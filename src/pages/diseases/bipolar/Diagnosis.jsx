import React from "react";
import "../DiseaseLayout.css";

const BipolarDiagnosis = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Diagnosis Methods: How Bipolar Disorder is Identified
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Diagnosing bipolar disorder (BD) can be challenging because its symptoms overlap with other psychiatric conditions, such as depression or anxiety disorders. There is no single laboratory test or brain scan that can definitively diagnose bipolar disorder. Instead, clinicians rely on a combination of comprehensive medical, psychological, and behavioral assessments.
      </p>

      {/* 1. Clinical and Psychiatric Assessment */}
      <h2 className="disease-section-subt">
        1. Clinical and Psychiatric Assessment
      </h2>
      <p className="disease-section-text">
        The initial step involves a detailed clinical evaluation, including patient history, mood patterns, and behavioral observations. This helps the clinician distinguish between bipolar disorder and other conditions with similar symptoms.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Patient History:</b> Assessment of mood episodes, their duration, triggers, and impact on daily life. Patients may describe periods of elevated mood (mania/hypomania) alternating with depression.
        </li>
        <li>
          <b>Family History:</b> A strong family history of bipolar disorder or other mood disorders can indicate higher genetic susceptibility.
        </li>
        <li>
          <b>Mental Status Examination:</b> Evaluates appearance, behavior, thought patterns, mood, cognition, and insight during the consultation.
        </li>
        <li>
          <b>Medical Evaluation:</b> Doctors check for other medical conditions or medication side effects that could mimic mood episodes.
        </li>
      </ul>

      {/* 2. Mood and Symptom Rating Scales */}
      <h2 className="disease-section-subt">
        2. Mood and Symptom Rating Scales
      </h2>
      <p className="disease-section-text">
        Standardized rating scales help clinicians quantify the severity of mood episodes and monitor symptom patterns over time. They also aid in differentiating bipolar disorder from major depressive disorder or other mental health conditions.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Young Mania Rating Scale (YMRS):</b> Measures the severity of manic episodes through structured questions and observations.
        </li>
        <li>
          <b>Montgomery–Åsberg Depression Rating Scale (MADRS):</b> Assesses the severity of depressive symptoms, which helps track bipolar depression.
        </li>
        <li>
          <b>Bipolar Disorder Symptom Checklist:</b> Tracks both current and historical episodes of mania, hypomania, and depression.
        </li>
      </ul>

      {/* 3. Psychological and Neurocognitive Tests */}
      <h2 className="disease-section-subt">
        3. Psychological and Neurocognitive Tests
      </h2>
      <p className="disease-section-text">
        Psychologists may use specific tests to assess cognitive functioning, attention, memory, and executive skills. Cognitive patterns can differ during depressive vs. manic states, providing valuable diagnostic information.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Neurocognitive Testing:</b> Evaluates memory, attention, and decision-making abilities, which may fluctuate between episodes.
        </li>
        <li>
          <b>Personality Assessments:</b> Helps rule out other psychiatric disorders that can mimic bipolar disorder, such as borderline personality disorder.
        </li>
      </ul>

      {/* 4. Laboratory Tests and Imaging */}
      <h2 className="disease-section-subt">
        4. Laboratory Tests and Brain Imaging
      </h2>
      <p className="disease-section-text">
        Although no lab test or imaging can confirm bipolar disorder, these tools are important for ruling out medical conditions that could cause mood changes.
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Blood Tests:</b> Evaluate thyroid function, vitamin deficiencies, and other metabolic or hormonal disorders that can mimic mood symptoms.
        </li>
        <li>
          <b>Neuroimaging (MRI or CT):</b> Used to exclude structural brain abnormalities, tumors, or injuries that could affect mood and behavior.
        </li>
        <li>
          <b>Substance Screening:</b> Alcohol or drug use can cause mood swings and must be identified to avoid misdiagnosis.
        </li>
      </ul>

      {/* 5. Longitudinal Observation */}
      <h2 className="disease-section-subt">
        5. Longitudinal Observation
      </h2>
      <p className="disease-section-text">
        A key part of diagnosing bipolar disorder is observing mood patterns over time. Because episodes can be sporadic, tracking symptoms for weeks or months may be necessary. Patients may be asked to keep a mood diary or use digital apps to monitor fluctuations.
      </p>
      <ul className="disease-section-text">
        <li><b>Mood Tracking:</b> Recording daily mood, sleep, energy, and activity levels helps detect patterns of mania, hypomania, or depression.</li>
        <li><b>Behavioral Changes:</b> Observing shifts in social interactions, work performance, and decision-making can provide clues to underlying bipolar disorder.</li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        In conclusion, diagnosing bipolar disorder requires a comprehensive approach combining clinical interviews, psychological tests, family and personal history, laboratory evaluation, and careful longitudinal observation. Early and accurate diagnosis is critical for effective management, reducing episode severity, and improving overall quality of life.
      </p>
    </div>
  );
};

export default BipolarDiagnosis;
