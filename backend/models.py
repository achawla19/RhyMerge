from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
import uuid

# User Models
class UserBase(BaseModel):
    username: str
    email: str
    user_type: str  # 'producer', 'vocalist', 'engineer'
    
class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
# Project Models
class ProjectBase(BaseModel):
    title: str
    description: Optional[str] = None
    genre: Optional[str] = None
    
class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    owner_id: str
    collaborators: List[str] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Audio Track Models
class AudioTrackBase(BaseModel):
    title: str
    project_id: str
    
class AudioTrackCreate(AudioTrackBase):
    pass

class AudioTrack(AudioTrackBase):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    file_url: str
    duration: Optional[float] = None
    uploaded_by: str
    created_at: datetime = Field(default_factory=datetime.utcnow)