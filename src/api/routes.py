"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Project, Tracked
from api.utils import generate_sitemap, APIException, send_sms
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token


api = Blueprint('api', __name__)

#User Endpoints
@api.route('/token', methods=['POST'])
def create_token():
    if request.json is None:
        return jsonify({"msg":"Missing the payload"}), 400
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Missing email or password"}), 401
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id, "usertype": user.usertype })

@api.route('/user', methods=['POST'])
def create_user():
    email = request.json.get('email')
    username = request.json.get('username')
    password = request.json.get('password')
    usertype = request.json.get('usertype')
    user = User(email=email, username=username, password=password, usertype=usertype)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize())

@api.route('/user', methods=['DELETE'])
@jwt_required()
def delete_user():
    email = request.json.get('email')
    username = request.json.get('username')
    password = request.json.get('password')
    usertype = request.json.get('usertype')
    user = User.query.filter_by(email=email, username=username, password=password, usertype=usertype).first()
    if user is None: 
        return jsonify({"msg": "Invalid user"}), 400
    db.session.delete(user)
    db.session.commit()
    return jsonify({ "msg": "User Deleted"}), 200

@api.route('/user', methods=['PUT'])
@jwt_required()
def update_user():
    current_user_id = get_jwt_identity()
    user = User.query.filter_by(id=current_user_id).first()
    if user is None:
        return jsonify({"msg":"User doesn't exist"}), 400
    email = request.json.get('email')
    username = request.json.get('username')
    password = request.json.get('password')
    usertype = request.json.get('usertype')
    phone = request.json.get('phone')

    if email is None or not email:
        user.email = user.email
    else:
        user.email = email

    if username is None or not username:
        user.username = user.username
    else:
        user.username = username

    if password is None or not password:
        user.password = user.password
    else:
        user.password = password
    
    if usertype is None or not usertype:
        user.usertype = user.usertype
    else:
        user.usertype = usertype
    
    if phone is None or not phone:
        user.phone = user.phone
    else:
        user.phone = phone
        send_sms(to=user.phone, message=f'Thank you {user.username} for signing up for notifications!')

    db.session.commit()
    return jsonify(user.serialize())

@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    current_user_id = get_jwt_identity()
    user_query = User.query.filter_by(id=current_user_id).first()
    if user_query is None:
        return jsonify({"msg": "User Not Found"}), 403
    email_get = user_query.email
    username_get = user_query.username
    phone_get = user_query.phone
    return jsonify({"email": email_get, "username": username_get, "phone":phone_get})


#Project Endpoints
@api.route('/projects', methods=['GET'])
@jwt_required(optional=True)
def get_project():
    user_id = get_jwt_identity()
    project_query = Project.query.all()
    all_serialized_project = list(map(lambda item:item.serialize(extended=True, user_id=user_id), project_query))
    return jsonify(all_serialized_project)

@api.route('/projects/<project_id>', methods=['GET'])
def get_specified_project(project_id):
    project = Project.query.filter_by(id=project_id).first()
    if project is None: 
        return jsonify({"msg": "Invalid project"}), 400
    return jsonify(project.serialize())

@api.route('/projects', methods=['POST'])
@jwt_required()
def create_project():
    name = request.json.get('name', None)
    project_type = request.json.get('project_type', None)
    project_stage = request.json.get('project_stage', None)
    sale_type = request.json.get('sale_type', None)
    region = request.json.get('region', None)
    baseprice = request.json.get('baseprice', None)
    estimated_ship = request.json.get('estimated_ship', None)
    started_at = request.json.get('started_at', None)
    ended_at = request.json.get('ended_at', None)
    vendor_links = request.json.get('vendor_links', None)
    discussion_links = request.json.get('discussion_links', None)
    img_url = request.json.get('img_url', None)
    creator = get_jwt_identity()
    description = request.json.get('description', None)
    
    project = Project(name=name,
                    project_type=project_type,
                    project_stage=project_stage,
                    sale_type=sale_type,
                    region=region,
                    baseprice=baseprice,
                    estimated_ship=estimated_ship,
                    started_at=started_at,
                    ended_at=ended_at,
                    vendor_links=vendor_links,
                    discussion_links=discussion_links,
                    img_url=img_url,
                    creator=creator,
                    description=description)
    db.session.add(project)
    db.session.commit()
    return jsonify(project.serialize())

@api.route('/projects', methods=['DELETE'])
@jwt_required()
def delete_project():
    project_id = request.json.get('project')
    target_project = Project.query.filter_by(id=project_id).first()
    if target_project is None: 
        return jsonify({"msg": "Invalid project"}), 400
    db.session.delete(target_project)
    db.session.commit()
    return jsonify({ "msg": "Project Deleted"}), 200

@api.route('/projects/<project_id>', methods=['PUT'])
@jwt_required()
def update_project(project_id):
    creator=get_jwt_identity()
    project = Project.query.filter_by(id=project_id).first()
    if creator is not project.creator:
        return  jsonify({"msg": "Unauthorized user"}), 400
    if project is None:
        return jsonify({"msg":"Project doesn't exist"}), 400
    name = request.json.get('name')
    message = ""
    project_type = request.json.get('project_type')
    project_stage = request.json.get('project_stage')
    sale_type = request.json.get('sale_type')
    region = request.json.get('region')
    baseprice = request.json.get('baseprice')
    estimated_ship = request.json.get('estimated_ship')
    started_at = request.json.get('started_at')
    ended_at = request.json.get('ended_at')
    vendor_links = request.json.get('vendor_links')
    discussion_links = request.json.get('discussion_links')
    img_url = request.json.get('img_url')
    description = request.json.get('description')

    if name is None or not name:
        project.name = project.name
    else:
        project.name = name

    if project_type is None or not project_type:
        project.project_type = project.project_type
    else:
        project.project_type = project_type

    if project_stage is None or not project_stage:
        project.project_stage = project.project_stage
    else:
        project.project_stage = project_stage
        message+="project stage changed to " + project_stage + "\n"
    
    if sale_type is None or not sale_type:
        project.sale_type = project.sale_type
    else:
        project.sale_type = sale_type
        message+="sale type changed to " + sale_type + "\n"
    
    if region is None or not region:
        project.region = project.region
    else:
        project.region = region

    if baseprice is None or not baseprice:
        project.baseprice = project.baseprice
    else:
        project.baseprice = baseprice
        message+="base price set to " + str(baseprice) + "\n"

    if estimated_ship is None or not estimated_ship:
        project.estimated_ship = project.estimated_ship
    else:
        project.estimated_ship = estimated_ship
        message+="estimated ship date changed to " + estimated_ship + "\n"

    if started_at is None or not started_at:
        project.started_at = project.started_at
    else:
        project.ended_at = ended_at

    if ended_at is None or not ended_at:
        project.ended_at = project.ended_at
    else:
        project.ended_at = ended_at

    if vendor_links is None or not vendor_links:
        project.vendor_links = project.vendor_links
    else:
        project.vendor_links = vendor_links

    if discussion_links is None or not discussion_links:
        project.discussion_links = project.discussion_links
    else:
        project.discussion_links = discussion_links

    if img_url is None or not img_url:
        project.img_url = project.img_url
    else:
        project.img_url = img_url

    if description is None or not description:
        project.description = project.description
    else:
        project.description = description

    db.session.commit()
    if message != "":
        tracked_list = Tracked.query.filter_by(projectid=project.id) 
        for t in tracked_list:
            send_sms(to={if t.user.phone != None or is t.user.phone:
                t.user.phone}, message=f'Project {project.name} updated: \n {message}')

    return jsonify(project.serialize())


#Tracker Endpoints
@api.route('/tracked', methods=['GET'])
@jwt_required()
def get_tracked():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    if user is None:
        return jsonify({"msg": "User Not Found"}), 403
    tracked_query = Tracked.query.filter_by(userid=current_user_id)
    all_serialized_tracked = list(map(lambda item:item.serialize(), tracked_query))
    return jsonify(all_serialized_tracked)

@api.route('/tracked', methods=['POST'])
@jwt_required()
def add_tracked():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    user_id = request.json.get('user')
    project_id = request.json.get('project')
    if user is None:
        return jsonify({"msg": "User Not Found"}), 403
    project = Tracked(userid = user.id, projectid = project_id)
    duplicate = Tracked.query.filter_by(userid=user.id,projectid=project_id).first()
    if duplicate is None:
        db.session.add(project)
        db.session.commit()
        return jsonify(project.serialize())
    else:
        return jsonify({"msg": "Duplicate"}), 400

@api.route('/tracked', methods=['DELETE'])
@jwt_required()
def delete_tracked():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    user_id = request.json.get('user')
    project_id_get = request.json.get('project')
    target_tracked = Tracked.query.filter_by(userid=user_id, projectid=project_id_get).first()
    if target_tracked is None: 
        return jsonify({"msg": "Invalid tracked"}), 400
    db.session.delete(target_tracked)
    db.session.commit()
    return jsonify({ "msg": "Tracked Deleted"}), 200