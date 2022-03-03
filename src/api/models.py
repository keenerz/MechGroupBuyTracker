from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    usertype = db.Column(db.Enum("buyer", "creator", name="UserTypes"), unique=False, nullable=False)

    def __repr__(self):
            return self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "usertype": self.usertype
            # do not serialize the password, its a security breach
        }

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    project_type = db.Column(db.Enum("keycap", "keyboard", "switches", name="ProjectTypes"), unique=False, nullable=False)
    project_stage = db.Column(db.Enum("interestcheck", "groupbuy", "ended", name="ProjectStage"), unique=False, nullable=False)
    sale_type = db.Column(db.String(120), unique=False, nullable=True)
    region = db.Column(db.String(120), unique=False, nullable=True)
    baseprice = db.Column(db.Float(8), unique=False, nullable=True)
    estimated_ship = db.Column(db.String(120), unique=False, nullable=True)
    create_at = db.Column(db.DateTime(timezone=False), nullable=True)
    updated_at = db.Column(db.DateTime(timezone=False), nullable=True)
    started_at = db.Column(db.DateTime(timezone=True), nullable=True)
    ended_at = db.Column(db.DateTime(timezone=True), nullable=True)
    vendor_links = db.Column(db.String(250), unique=False, nullable=True)
    discussion_links = db.Column(db.String(250), unique=False, nullable = True)
    img_url = db.Column(db.String(250), unique=False, nullable = True)
    tracked_list = db.relationship("Tracked")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "project_type": self.project_type,
            "project_stage": self.project_stage,
            "sale_type": self.sale_type,
            "region": self.region,
            "baseprice": self.baseprice,
            "estimated_ship": self.estimated_ship,
            "create_at": self.create_at,
            "updated_at": self.updated_at,
            "started_at": self.started_at,
            "ended_at": self.ended_at,
            "vendor_links": self.vendor_links,
            "discussion_links": self.discussion_links,
            "tracked_list": [t.serialized() for t in self.tracked_list]
            # do not serialize the password, its a security breach
        }

class Tracked(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userid = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    projectid = db.Column(db.Integer, db.ForeignKey("project.id"), nullable=False)
    user = db.relationship(User)
    project = db.relationship(Project)

    def serialize(self):
        return {
            "user": self.user.serialize(),
            "project": self.project.serialize()
        }