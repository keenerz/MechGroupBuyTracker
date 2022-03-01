"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Project, Tracked
from api.utils import generate_sitemap, APIException
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
    return jsonify({ "token": access_token, "user_id": user.id })

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

#Project Endpoints
@api.route('/projects', methods=['GET'])
def get_project():
    project_query = Project.query.all()
    all_serialized_project = list(map(lambda item:item.serialize(), project_query))
    return jsonify(all_serialized_project)

@api.route('/projects', methods=['POST'])
# @jwt_required()
def create_project():
    name = request.json.get('name', None)
    project_type = request.json.get('project_type', None)
    project_stage = request.json.get('project_stage', None)
    sale_type = request.json.get('sale_type', None)
    region = request.json.get('region', None)
    baseprice = request.json.get('baseprice', None)
    estimated_ship = request.json.get('estimated_ship', None)
    create_at = request.json.get('create_at', None)
    updated_at = request.json.get("updated_at", None)
    started_at = request.json.get('started_at', None)
    ended_at = request.json.get('ended_at', None)
    vendor_links = request.json.get('vendor_links', None)
    discussion_links = request.json.get('discussion_links', None)
    img_url = request.json.get('img_url', None)
    
    project = Project(name=name,
                    project_type=project_type,
                    project_stage=project_stage,
                    sale_type=sale_type,
                    region=region,
                    baseprice=baseprice,
                    estimated_ship=estimated_ship,
                    create_at=create_at,
                    updated_at=updated_at,
                    started_at=started_at,
                    ended_at=ended_at,
                    vendor_links=vendor_links,
                    discussion_links=discussion_links,
                    img_url=img_url)
    db.session.add(project)
    db.session.commit()
    return jsonify(project.serialize())

@api.route('/projects', methods=['DELETE'])
#@jwt_required()
def delete_project():
    project_id = request.json.get('project')
    target_project = Project.query.filter_by(id=project_id).first()
    if target_project is None: 
        return jsonify({"msg": "Invalid project"}), 400
    db.session.delete(target_project)
    db.session.commit()
    return jsonify({ "msg": "Project Deleted"}), 200


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