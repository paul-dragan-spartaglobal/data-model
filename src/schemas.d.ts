/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
}

export interface CaseSchedule {}

/**
 * Folders can have optional parents. All folders belong to a Case.
 */
export interface Folder {
  /**
   * The unique identifier within the Back Office.
   */
  id: number;
  /**
   * The case reference this folder belongs to.
   */
  caseReference: string;
  /**
   * Folder display name in English.
   */
  displayNameEnglish: string;
  /**
   * Folder display name in Welsh.
   */
  displayNameWelsh?: string;
  /**
   * Optional parent folder ID.
   */
  parentFolderId?: number;
}

export interface NSIPDocument {
  /**
   * The unique identifier for the file. This will be different to documentReference
   */
  documentId: string;
  /**
   * Internal case identifier
   */
  caseId?: number;
  caseRef?: string;
  /**
   * Reference used throughout ODT <CaseRef>-<SequenceNo>
   */
  documentReference?: string;
  version: number;
  examinationRefNo?: string;
  /**
   * Current stored filename of the file
   */
  filename: string;
  /**
   * Original filename of file
   */
  originalFilename: string;
  size: number;
  mime?: string;
  /**
   * The internal location of the document
   */
  documentURI: string;
  /**
   * The location of the published document. Only applicable to documents which are published.
   */
  publishedDocumentURI?: string;
  path?: string;
  virusCheckStatus?: 'not_scanned' | 'scanned' | 'affected';
  fileMD5?: string;
  dateCreated: string;
  lastModified?: string;
  caseType?: 'nsip' | 'has';
  redactedStatus?: 'not_redacted' | 'redacted';
  publishedStatus?:
    | 'not_checked'
    | 'checked'
    | 'ready_to_publish'
    | 'do_not_publish'
    | 'publishing'
    | 'published'
    | 'archived';
  datePublished?: string;
  documentType?: string;
  securityClassification?: 'public' | 'official' | 'secret' | 'top-secret';
  sourceSystem?: 'back-office-appeals' | 'back-office-applications' | 'horizon' | 'ni_file' | 'sharepoint';
  origin?: 'pins' | 'citizen' | 'lpa' | 'ogd';
  owner?: string;
  /**
   * Name of person who authored document
   */
  author?: string;
  /**
   * The on behalf of or agent submitter of document
   */
  representative?: string;
  description?: string;
  documentCaseStage?:
    | 'draft'
    | 'pre-application'
    | 'acceptance'
    | 'pre-examination'
    | 'examination'
    | 'recommendation'
    | 'decision'
    | 'post_decision'
    | 'withdrawn'
    | 'developers_application';
  /**
   * Filter field to provide additional filtering
   */
  filter1?: string;
  /**
   * Filter field to provide additional filtering
   */
  filter2?: string;
  /**
   * The folder where the document exists
   */
  horizonFolderId?: string;
  /**
   * The GUID of the transcript document (if one was provided).
   */
  transcriptId?: string;
}

/**
 * Examination Timetable for an NSIP Project
 */
export interface ExaminationTimetable {
  /**
   * Unique string reference of the associated Case
   */
  caseReference: string;
  events: Event[];
}
export interface Event {
  /**
   * Event Identifier
   */
  eventId?: number;
  /**
   * Compulsory Acquisition Hearing/Deadline/Issue Specific Hearing etc
   */
  type:
    | 'Accompanied Site Inspection'
    | 'Compulsory Acquisition Hearing'
    | 'Deadline'
    | 'Deadline For Close Of Examination'
    | 'Issued By'
    | 'Issue Specific Hearing'
    | 'Open Floor Hearing'
    | 'Other Meeting'
    | 'Preliminary Meeting'
    | 'Procedural Deadline (Pre-Examination)'
    | 'Procedural Decision'
    | 'Publication Of';
  /**
   * Title Of Examination Timetable Event
   */
  eventTitle?: string;
  description: string;
  /**
   * Optional start date for event window
   */
  eventDeadlineStartDate?: string;
  /**
   * Event Date = effective deadline (end) date
   */
  date: string;
  eventLineItems?: LineItem[];
}
export interface LineItem {
  description: string;
}

/**
 * NSIP Project Update (formerly known as Banners)
 */
export interface NSIPProjectUpdate {
  /**
   * The unique identifier within the Back Office.
   */
  id: number;
  /**
   * the case reference this update relates to
   */
  caseReference: string;
  /**
   * The date the update was published
   */
  updateDate?: string;
  /**
   * Internal title or name of the update
   */
  updateName?: string;
  /**
   * HTML content of the update in English. Can only include `<a> <b> <ul> <li>` tags.
   */
  updateContentEnglish: string;
  /**
   * HTML content of the update in Welsh. Can only include `<a> <b> <ul> <li>` tags.
   */
  updateContentWelsh?: string;
  /**
   * The current status of this update
   */
  updateStatus: 'draft' | 'ready-to-publish' | 'published' | 'ready-to-unpublish' | 'unpublished' | 'archived';
}

/**
 * Subset of Pins Data Model [Case]
 */
export interface NSIPProject {
  /**
   * The unique identifier within the Back Office. This is not the same as the case reference
   */
  caseId: number;
  caseReference?: string;
  /**
   * Name of project
   */
  projectName?: string;
  projectDescription?: string;
  /**
   * Decision: approved/refused/split-decision
   */
  decision?: 'approved' | 'refused' | 'split-decision';
  publishStatus?: 'published' | 'unpublished';
  /**
   * {Sector Abbreviation} - {Sector Display Name}
   */
  sector?:
    | 'BC - Business and Commercial'
    | 'EN - Energy'
    | 'TR - Transport'
    | 'WA - Water'
    | 'WS - Waste'
    | 'WW - Waste Water';
  /**
   * {SubSector Abbreviation} - {SubSector Display Name}
   */
  projectType?:
    | 'BC01 - Office Use'
    | 'BC02 - Research and Development of Products or Processes'
    | 'BC03 - An Industrial Process or Processes'
    | 'BC04 - Storage or Distribution of Goods'
    | 'BC05 - Conferences'
    | 'BC06 - Exhibitions'
    | 'BC07 - Sport'
    | 'BC08 - Leisure'
    | 'BC09 - Tourism'
    | 'EN01 - Generating Stations'
    | 'EN02 - Electric Lines'
    | 'EN03 - Underground Gas Storage Facilities'
    | 'EN04 - LNG Facilities'
    | 'EN05 - Gas Reception Facilities'
    | 'EN06 - Gas Transporter Pipe-lines'
    | 'EN07 - Other Pipe-lines'
    | 'TR01 - Highways'
    | 'TR02 - Airports'
    | 'TR03 - Harbour Facilities'
    | 'TR04 - Railways'
    | 'TR05 - Rail Freight Interchanges'
    | 'WS01 - Hazardous Waste Facilities'
    | 'WW01 - Waste Water Treatment Plants'
    | 'WA01 - Dams and Reservoirs'
    | 'WA02 - Transfer of Water Resources';
  sourceSystem: 'back-office-applications' | 'horizon';
  /**
   * Process stage identifier
   */
  stage?:
    | 'draft'
    | 'pre_application'
    | 'acceptance'
    | 'pre_examination'
    | 'examination'
    | 'recommendation'
    | 'decision'
    | 'post_decision'
    | 'withdrawn';
  /**
   * Description of site location
   */
  projectLocation?: string;
  /**
   * PINS Project email address pubished on website
   */
  projectEmailAddress?: string;
  regions?: (
    | 'east_midlands'
    | 'eastern'
    | 'london'
    | 'north_east'
    | 'north_west'
    | 'south_east'
    | 'south_west'
    | 'wales'
    | 'west_midlands'
    | 'yorkshire_and_the_humber'
  )[];
  /**
   * Drives addition of Transboundary tab on website. [TODO]
   */
  transboundary?: boolean;
  /**
   * Project site Easting co-ordinate.
   */
  easting?: number;
  /**
   * Project site Northing co-ordinate.
   */
  northing?: number;
  /**
   * Welsh Language translation required.
   */
  welshLanguage?: boolean;
  /**
   * Resolution of pinned map. Set when co-ordinates are created.
   */
  mapZoomLevel?: 'country' | 'region' | 'county' | 'borough' | 'district' | 'city' | 'town' | 'junction' | 'none';
  /**
   * Relevant Government Department. [TODO]
   */
  secretaryOfState?: string;
  _preApplicationDates?: unknown;
  /**
   * Date at which applicant notify PINS of a project (pre-publishing)
   */
  datePINSFirstNotifiedOfProject?: string;
  /**
   * Date Project Appears On Website
   */
  dateProjectAppearsOnWebsite?: string;
  /**
   * Approximate Anticipated Submission Date Of Application, e.g. Q3 2023
   */
  anticipatedSubmissionDateNonSpecific?: string;
  /**
   * Anticipated Submission Date Of Application
   */
  anticipatedDateOfSubmission?: string;
  /**
   * (TBC by Env. Services Team)
   */
  screeningOpinionSought?: string;
  /**
   * (TBC by Env. Services Team)
   */
  screeningOpinionIssued?: string;
  /**
   * (TBC by Env. Services Team)
   */
  scopingOpinionSought?: string;
  /**
   * (TBC by Env. Services Team)
   */
  scopingOpinionIssued?: string;
  /**
   * Applicant must notify PINS of statutory consultation
   */
  section46Notification?: string;
  _acceptanceDates?: unknown;
  /**
   * Date Applcation is submitted
   */
  dateOfDCOSubmission?: string;
  /**
   * DeadlineForAcceptanceDecision
   */
  deadlineForAcceptanceDecision?: string;
  /**
   * Date Application is Formerly Accepted by PINS
   */
  dateOfDCOAcceptance?: string;
  /**
   * Date of Non Acceptance
   */
  dateOfNonAcceptance?: string;
  _preExaminationDates?: unknown;
  /**
   * Date at which point publish can submit relevant reps
   */
  dateOfRepresentationPeriodOpen?: string;
  /**
   * Date at which point publish can no longer submit relevant reps
   */
  dateOfRelevantRepresentationClose?: string;
  /**
   * ExtensionToDateRelevantRepresentationsClose
   */
  extensionToDateRelevantRepresentationsClose?: string;
  /**
   * Date at which relevant reps appear on the website
   */
  dateRRepAppearOnWebsite?: string;
  dateIAPIDue?: string;
  rule6LetterPublishDate?: string;
  /**
   * Meeting between all parties inc public
   */
  preliminaryMeetingStartDate?: string;
  notificationDateForPMAndEventsDirectlyFollowingPM?: string;
  notificationDateForEventsDeveloper?: string;
  _examinationDates?: unknown;
  /**
   * Applicant has notified all parties of application
   */
  dateSection58NoticeReceived?: string;
  /**
   * ConfirmedStartOfExamination by panel
   */
  confirmedStartOfExamination?: string;
  rule8LetterPublishDate?: string;
  /**
   * DeadlineForCloseOfExamination
   */
  deadlineForCloseOfExamination?: string;
  /**
   * ConfirmedSEndOfExamination by panel
   */
  dateTimeExaminationEnds?: string;
  /**
   * Examination Period extended to this date
   */
  stage4ExtensionToExamCloseDate?: string;
  _recommendationDates?: unknown;
  /**
   * DeadlineForSubmissionOfRecommendation
   */
  deadlineForSubmissionOfRecommendation?: string;
  /**
   * Date recomm report sent to SoS
   */
  dateOfRecommendations?: string;
  /**
   * Recommendation period extended to this date
   */
  stage5ExtensionToRecommendationDeadline?: string;
  _decisionDates?: unknown;
  /**
   * DeadlineForDecision
   */
  deadlineForDecision?: string;
  /**
   * Decision by SoS
   */
  confirmedDateOfDecision?: string;
  /**
   * Decision period extended to this date
   */
  stage5ExtensionToDecisionDeadline?: string;
  _postDecisionDates?: unknown;
  /**
   * Judicial Review
   */
  jRPeriodEndDate?: string;
  _withdrawalDates?: unknown;
  /**
   * DateProjectWithdrawn by applicant
   */
  dateProjectWithdrawn?: string;
  /**
   * Maps to [Employee].[EmployeeID].
   */
  operationsLeadId?: string;
  /**
   * New NSIP role, Maps to [Employee].[EmployeeID]
   */
  operationsManagerId?: string;
  /**
   * Maps to [Employee].[EmployeeID]
   */
  caseManagerId?: string;
  nsipOfficerIds?: string[];
  nsipAdministrationOfficerIds?: string[];
  /**
   * Maps to [Employee].[EmployeeID]
   */
  leadInspectorId?: string;
  inspectorIds?: string[];
  /**
   * Maps to [Employee].[EmployeeID]
   */
  environmentalServicesOfficerId?: string;
  /**
   * Maps to [Employee].[EmployeeID]
   */
  legalOfficerId?: string;
  /**
   * Maps to [ServiceUser].[id] where the serviceUserType is Applicant
   */
  applicantId?: string;
}

export interface Representation {
  representationId: number;
  referenceId?: string;
  examinationLibraryRef?: string;
  caseRef: string;
  /**
   * The unique identifier within the Back Office. This is not the same as the case reference
   */
  caseId?: number;
  status?: 'awaiting_review' | 'referred' | 'valid' | 'invalid' | 'published' | 'archived';
  originalRepresentation: string;
  redacted?: boolean;
  redactedRepresentation?: string;
  redactedBy?: string;
  redactedNotes?: string;
  representationFrom?: 'PERSON' | 'ORGANISATION' | 'AGENT';
  /**
   * ServiceUser Id of the person or organisation being represented
   */
  representedId: string;
  /**
   * ServiceUser Id of the person or organisation submitting representation in the case of Agent representationFrom
   */
  representativeId?: string;
  registerFor?: 'PERSON' | 'ORGANISATION' | 'FAMILY_GROUP';
  representationType?:
    | 'Local Authorities'
    | 'Parish Councils'
    | 'Members of the Public/Businesses'
    | 'Public & Businesses'
    | 'Statutory Consultees'
    | 'Non-Statutory Organisations'
    | 'Another Individual';
  dateReceived: string;
  attachmentIds?: string[];
}

/**
 * Subscribers are a subset of Service Users, part of the PINS Data Model
 */
export interface NsipSubscription {
  /**
   * The unique identifier within the Back Office. Ignored as part of register-nsip-subscription.
   */
  subscriptionId?: number;
  /**
   * the case reference the subscription relates to
   */
  caseReference: string;
  emailAddress: string;
  /**
   * which update does the subscriber want to get notified of. For multiple types, use multiple messages.
   */
  subscriptionType: 'allUpdates' | 'applicationSubmitted' | 'applicationDecided' | 'registrationOpen';
  /**
   * The date to start getting updates
   */
  startDate?: string;
  /**
   * The date to stop getting updates
   */
  endDate?: string;
  language?: 'English' | 'Welsh';
}

export interface S51Advice {
  adviceId: number;
  adviceReference: string;
  caseId?: number;
  caseReference?: string;
  /**
   * Title of the advice
   */
  title: string;
  /**
   * Who the enquiry is from
   */
  from: string;
  /**
   * Who the enquiry is on behalf of
   */
  agent: string;
  /**
   * How the enquiry was made
   */
  method: 'phone' | 'email' | 'meeting' | 'post';
  /**
   * Date the enquiry was made
   */
  enquiryDate?: string;
  /**
   * Details of the enquiry
   */
  enquiryDetails?: string;
  /**
   * Who issued the advice
   */
  adviceGivenBy?: string;
  /**
   * Date the advice was given
   */
  adviceDate?: string;
  /**
   * Details of the advice
   */
  adviceDetails?: string;
  status?: 'checked' | 'unchecked' | 'readytopublish' | 'published' | 'donotpublish';
  redactionStatus?: 'unredacted' | 'redacted';
  attachmentIds?: string[];
}

/**
 * Service User of the planning inspectorate. Also contains role information by combining serviceUserType and caseReference.
 */
export interface ServiceUser {
  /**
   * A unique identifier for the entity.
   */
  id: string;
  /**
   * A formal greeting, e.g., Mr, Mrs, Ms.
   */
  salutation?: string;
  /**
   * The first name of the individual.
   */
  firstName?: string;
  /**
   * The last name of the individual.
   */
  lastName?: string;
  /**
   * The first line of the address.
   */
  addressLine1?: string;
  /**
   * The second line of the address, usually includes suite or apartment number.
   */
  addressLine2?: string;
  /**
   * The town or city of the address.
   */
  addressTown?: string;
  /**
   * The county in which the town or city is located.
   */
  addressCounty?: string;
  /**
   * The postal code for the address.
   */
  postcode?: string;
  /**
   * The country of the address.
   */
  addressCountry?: string;
  /**
   * The name of the organisation associated with the individual.
   */
  organisation?: string;
  /**
   * The type or nature of the organisation.
   */
  organisationType?: string;
  /**
   * The individual's role or position within the organisation.
   */
  role?: string;
  /**
   * The primary telephone contact number.
   */
  telephoneNumber?: string;
  /**
   * An alternate or secondary phone number.
   */
  otherPhoneNumber?: string;
  /**
   * A fax contact number.
   */
  faxNumber?: string;
  /**
   * The primary email address for contact.
   */
  emailAddress?: string;
  /**
   * Website address or URL.
   */
  webAddress?: string;
  /**
   * Type or category of the service user.
   */
  serviceUserType: 'Applicant' | 'Appellant' | 'Agent' | 'RepresentationContact' | 'Subscriber';
  /**
   * Reference number for a particular case or incident.
   */
  caseReference: string;
  /**
   * The originating system from where the data was sourced.
   */
  sourceSystem: string;
  /**
   * Unique identifier from the source system.
   */
  sourceSuid: string;
}

export type Name = string;

/**
 * Subset of Pins Data Model [Service User]
 */
export interface InterestedParty {
  id?: number;
  interestedPartyNumber?: string;
  firstName?: string;
  lastName?: string;
  under18?: boolean;
  organisationName?: Name;
  jobTitle?: string;
  contactMethod?: 'email' | 'post';
  email?: string;
  phoneNumber?: string;
  address?: Address;
}
export interface Address {
  addressLine1: string;
  addressLine2?: string;
  town: string;
  postcode: string;
  country?: string;
}

/**
 * A command to deliver metadata about a new document submission added to a deadline
 */
export interface NewDeadlineSubmission {
  /**
   * The unique reference of the case
   */
  caseReference?: string;
  /**
   * The name of the FO user who made the submission
   */
  name: string;
  /**
   * The email address of the FO user who made the submission
   */
  email: string;
  /**
   * Was the submission made by an interested party on behalf of someone else?
   */
  interestedParty?: boolean;
  /**
   * Only necessary if `interestedParty` is true
   */
  interestedPartyReference?: string;
  /**
   * The name of the deadline which the submission was made against
   */
  deadline: string;
  /**
   * The name of the deadline line item the submission was made against
   */
  submissionType: string;
  /**
   * Does the submission contain sensitive data?
   */
  sensitiveData?: boolean;
  lateSubmission?: boolean;
  /**
   * ID of the submission in the database
   */
  submissionId?: string;
  /**
   * The GUID of the blob in storage
   */
  blobGuid: string;
  /**
   * The file name of the document in blob storage
   */
  documentName: string;
}

/**
 * Result of processing a new exam timetable submission
 */
export interface NsipExamTimetableSubmission {
  status: 'SUCCESS' | 'VIRUS_DETECTED' | 'FAILURE';
  deadline: string;
  submissionType: string;
  blobGuid: string;
  documentName: string;
}

/**
 * A command to register an NSIP subscription with the back office
 */
export interface RegisterNsipSubscription {
  /**
   * Properties in additionalProperties in the Service Bus message. Not present in the message body.
   */
  __additionalProperties__?: {
    type?: 'Create' | 'Delete';
  };
  nsipSubscription?: NsipSubscription;
  /**
   * Which update(s) does the subscriber want to get notified of. Note nsipSubscription.subscriptionType is ignored.
   */
  subscriptionTypes?: ('allUpdates' | 'applicationSubmitted' | 'applicationDecided' | 'registrationOpen')[];
}
/**
 * Subscribers are a subset of Service Users, part of the PINS Data Model
 */
export interface NsipSubscription {
  /**
   * The unique identifier within the Back Office. Ignored as part of register-nsip-subscription.
   */
  subscriptionId?: number;
  /**
   * the case reference the subscription relates to
   */
  caseReference: string;
  emailAddress: string;
  /**
   * which update does the subscriber want to get notified of. For multiple types, use multiple messages.
   */
  subscriptionType: 'allUpdates' | 'applicationSubmitted' | 'applicationDecided' | 'registrationOpen';
  /**
   * The date to start getting updates
   */
  startDate?: string;
  /**
   * The date to stop getting updates
   */
  endDate?: string;
  language?: 'English' | 'Welsh';
}

export type Name = string;

export interface RegisterRepresentation {
  /**
   * registration identification number
   */
  referenceId: string;
  /**
   * The unique reference of the case
   */
  caseReference: string;
  /**
   * Type of representation
   */
  representationType?: string;
  originalRepresentation: string;
  representationFrom: 'PERSON' | 'ORGANISATION' | 'AGENT';
  registerFor: 'PERSON' | 'ORGANISATION' | 'FAMILY_GROUP';
  represented: InterestedParty;
  representative?: InterestedParty1;
  dateReceived?: string;
}
/**
 * Person or organisation being represented
 */
export interface InterestedParty {
  id?: number;
  interestedPartyNumber?: string;
  firstName?: string;
  lastName?: string;
  under18?: boolean;
  organisationName?: Name;
  jobTitle?: string;
  contactMethod?: 'email' | 'post';
  email?: string;
  phoneNumber?: string;
  address?: Address;
}
export interface Address {
  addressLine1: string;
  addressLine2?: string;
  town: string;
  postcode: string;
  country?: string;
}
/**
 * Person or organisation submitting representation in the case of Agent representationFrom
 */
export interface InterestedParty1 {
  id?: number;
  interestedPartyNumber?: string;
  firstName?: string;
  lastName?: string;
  under18?: boolean;
  organisationName?: Name;
  jobTitle?: string;
  contactMethod?: 'email' | 'post';
  email?: string;
  phoneNumber?: string;
  address?: Address;
}

