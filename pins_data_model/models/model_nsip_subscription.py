# generated by datamodel-codegen:
#   filename:  nsip-subscription.schema.json
#   timestamp: 2024-01-11T14:34:04+00:00

from __future__ import annotations

from enum import Enum

from pydantic import AwareDatetime, BaseModel, EmailStr, Field


class SubscriptionType(Enum):
    """
    which update does the subscriber want to get notified of. For multiple types, use multiple messages.
    """

    allUpdates = "allUpdates"
    applicationSubmitted = "applicationSubmitted"
    applicationDecided = "applicationDecided"
    registrationOpen = "registrationOpen"


class Language(Enum):
    English = "English"
    Welsh = "Welsh"


class NsipSubscription(BaseModel):
    """
    Subscribers are a subset of Service Users, part of the PINS Data Model
    """

    subscriptionId: int | None = None
    """
    The unique identifier within the Back Office. Ignored as part of register-nsip-subscription.
    """
    caseReference: str
    """
    the case reference the subscription relates to
    """
    emailAddress: EmailStr = Field(
        ..., examples=["alan.turing@planninginspectorate.gov.uk"]
    )
    subscriptionType: SubscriptionType
    """
    which update does the subscriber want to get notified of. For multiple types, use multiple messages.
    """
    startDate: AwareDatetime | None = None
    """
    The date to start getting updates
    """
    endDate: AwareDatetime | None = None
    """
    The date to stop getting updates
    """
    language: Language | None = "English"