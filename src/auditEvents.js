const medicalRecordAuditEvents = [
  {
    eventId: "audit-evt-0001",
    occurredAt: "2026-10-12T08:30:00.000Z",
    eventType: "medical_record.accessed",
    outcome: "success",
    actor: {
      id: "user-clinician-104",
      role: "physician",
      relationshipToPatient: {
        type: "treating_clinician",
        verified: true,
        encounterId: "encounter-00042",
      },
    },
    patient: { id: "patient-sample-001" },
    consent: {
      status: "granted",
      basis: "patient_authorization",
      authorizationId: "consent-sample-017",
      scope: ["view_medical_record"],
      validAtEventTime: true,
    },
    resource: {
      type: "medical_record",
      id: "record-sample-001",
      fieldsAccessed: ["medications", "allergies"],
    },
    purposeOfUse: "treatment",
  },
  {
    eventId: "audit-evt-0002",
    occurredAt: "2026-10-12T08:34:12.000Z",
    eventType: "medical_record.updated",
    outcome: "success",
    actor: {
      id: "user-clinician-104",
      role: "physician",
      relationshipToPatient: {
        type: "treating_clinician",
        verified: true,
        encounterId: "encounter-00042",
      },
    },
    patient: { id: "patient-sample-001" },
    consent: {
      status: "granted",
      basis: "patient_authorization",
      authorizationId: "consent-sample-017",
      scope: ["update_medical_record"],
      validAtEventTime: true,
    },
    resource: {
      type: "medical_record",
      id: "record-sample-001",
      fieldsUpdated: ["medications"],
    },
    purposeOfUse: "treatment",
  },
];

module.exports = { medicalRecordAuditEvents };
