# generated by datamodel-codegen:
#   filename:  employee.schema.json
#   timestamp: 2024-01-11T20:15:05+00:00

from __future__ import annotations

from pydantic import BaseModel


class Employee(BaseModel):
    id: str
    firstName: str
    lastName: str
