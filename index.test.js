const { medicalRecordAuditEvents } = require("./index");

describe("medical record audit events", () => {
  it("records an access and an update", () => {
    expect(medicalRecordAuditEvents.map(({ eventType }) => eventType)).toEqual([
      "medical_record.accessed",
      "medical_record.updated",
    ]);
  });

  it.each(medicalRecordAuditEvents)(
    "includes patient relationship and consent context for $eventType",
    (event) => {
      expect(event.actor.relationshipToPatient).toEqual({
        type: "treating_clinician",
        verified: true,
        encounterId: "encounter-00042",
      });
      expect(event.patient.id).toBe("patient-sample-001");
      expect(event.consent).toEqual(
        expect.objectContaining({
          status: "granted",
          basis: "patient_authorization",
          authorizationId: "consent-sample-017",
          validAtEventTime: true,
        }),
      );
    },
  );

  it("matches each event's consent scope to its operation", () => {
    expect(medicalRecordAuditEvents[0].consent.scope).toContain(
      "view_medical_record",
    );
    expect(medicalRecordAuditEvents[1].consent.scope).toContain(
      "update_medical_record",
    );
  });
});
