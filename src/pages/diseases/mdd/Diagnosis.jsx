

import React from "react";
import "../DiseaseLayout.css";

const Diagnosis = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Diagnosis Methods: How Major Depressive Disorder (MDD) is Identified
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Diagnosing Major Depressive Disorder (MDD) requires a comprehensive
        clinical evaluation. There is no single medical test that can confirm
        depression. Instead, clinicians rely on standardized psychiatric
        assessments, symptom evaluation, medical examinations, and screening
        tools to rule out other medical or psychological conditions that may
        mimic depression.
      </p>

      {/* 1. Clinical and Medical History */}
      <h2 className="disease-section-subt">
        1. Clinical and Medical Assessment
      </h2>
      <p className="disease-section-text">
        A detailed clinical evaluation is the first and most important step.
        Doctors gather information to understand symptoms, duration, severity,
        and whether another condition might better explain them.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Clinical Interview:</b> Covers mood, sleep, appetite, energy,
          concentration, thoughts of self-harm, and daily functioning.
        </li>
        <li>
          <b>Medical History:</b> Reviews chronic illnesses, current medications,
          hormonal issues, substance use, and past psychiatric conditions.
        </li>
        <li>
          <b>Family History:</b> Depression or other mood disorders in close
          relatives can increase risk and support diagnosis.
        </li>
        <li>
          <b>Physical Examination:</b> Helps rule out medical causes that can
          mimic depressive symptoms, such as thyroid issues or anemia.
        </li>
        <li>
          <b>Laboratory Tests:</b> Blood tests (thyroid function, Vitamin B12,
          anemia panel), urine tests, and sometimes hormone tests are performed
          to rule out medical contributors.
        </li>
      </ul>

      {/* 2. Psychiatric Evaluation & Symptom Criteria */}
      <h2 className="disease-section-subt">
        2. Psychiatric Evaluation and Diagnostic Criteria
      </h2>
      <p className="disease-section-text">
        The diagnosis of MDD is based on standardized mental health guidelines
        such as the <b>DSM-5</b> or <b>ICD-11</b>. A person must experience at least
        five symptoms for most of the day, nearly every day, for a minimum of
        two weeks — with at least one core symptom.
      </p>

      <ul className="disease-section-text">
        <li><b>Core Symptoms:</b> Depressed mood, loss of interest/pleasure (anhedonia)</li>
        <li>Changes in sleep</li>
        <li>Changes in appetite or weight</li>
        <li>Fatigue or loss of energy</li>
        <li>Feelings of worthlessness or guilt</li>
        <li>Difficulty concentrating</li>
        <li>Psychomotor agitation or slowing</li>
        <li>Thoughts of death or suicidal ideation</li>
      </ul>

      <p className="disease-section-text">
        These symptoms must cause significant distress or impair daily
        functioning. The clinician also ensures the symptoms are not better
        explained by bipolar disorder, grief, medical illness, or substance use.
      </p>

      {/* 3. Standardized Screening Tools */}
      <h2 className="disease-section-subt">
        3. Standardized Screening and Rating Scales
      </h2>
      <p className="disease-section-text">
        These tools help assess the severity of depression, track progress, and
        support diagnosis, but they are not used alone to make a final decision.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>PHQ-9 (Patient Health Questionnaire-9):</b> A widely used 9-item self-report tool that screens for major depressive symptoms 
    like low mood, loss of interest, sleep issues, fatigue, and suicidal thoughts. 
        </li>
        <li>
          <b>HAM-D (Hamilton Depression Rating Scale):</b>  A clinician-administered scale that evaluates mood changes, guilt, anxiety, 
    physical symptoms, and sleep disturbances. It is commonly used in hospitals 
    and research to track symptom intensity.
        </li>
        <li>
          <b>Beck Depression Inventory (BDI-II):</b>  A self-report questionnaire measuring emotional, cognitive, and physical 
    symptoms of depression. It helps capture how the individual personally 
    experiences their symptoms on a day-to-day basis.
        </li>
        <li>
          <b>SCID-5:</b>   A structured interview conducted by trained professionals to diagnose mental 
    disorders according to DSM-5 criteria. It helps distinguish MDD from bipolar 
    disorder, anxiety disorders, and personality-related conditions.
        </li>
          <li>
    <b>MADRS (Montgomery-Åsberg Depression Rating Scale):</b>  
    A clinician-rated tool designed to measure the core psychological and 
    physical symptoms of depression. It is sensitive to small changes, making 
    it useful for monitoring treatment progress.
  </li>
      </ul>

      {/* 4. Psychological and Cognitive Testing */}
      <h2 className="disease-section-subt">
        4. Psychological and Cognitive Tests
      </h2>
     
<p className="disease-section-text">
  In some cases, depression can affect cognitive abilities such as attention,
  memory, and decision-making. To understand these changes better, psychologists
  may perform structured psychological or neurocognitive assessments, including:
</p>

<ul className="disease-section-text">
  <li>
    <b>Cognitive Tests:</b> Evaluate skills like attention span, concentration,
    processing speed, working memory, and executive functioning. These tests help
    determine how depression is affecting day-to-day thinking and problem-solving.
  </li>
  <li>
    <b>Personality Assessments:</b> Conducted when additional mental health 
    conditions are suspected. They help identify traits or patterns linked to 
    anxiety disorders, personality disorders, or other emotional difficulties.
  </li>
</ul>
      {/* 5. Brain Imaging (Only When Needed) */}
      <h2 className="disease-section-subt">
        5. Brain Imaging (Used Selectively)
      </h2>
      <p className="disease-section-text">
        Unlike Alzheimer’s, imaging is <b>not routinely required</b> for diagnosing
        MDD. However, it may be ordered if symptoms suggest another neurological
        condition.
      </p>

      <ul className="disease-section-text">
        <li><b>MRI or CT Scan:</b> Used only to rule out tumors, stroke, traumatic brain injury, or neurodegenerative diseases.</li>
        <li><b>EEG:</b> Rarely used; may help if seizures or unusual neurological symptoms are present.</li>
      </ul>

      {/* 6. Differential Diagnosis */}
      <h2 className="disease-section-subt">
        6. Differential Diagnosis
      </h2>
      <p className="disease-section-text">
        The clinician ensures that symptoms are not caused by other conditions.
      </p>

      <ul className="disease-section-text">
        <li>Bipolar disorder (important to rule out mania/hypomania)</li>
        <li>Generalized anxiety disorder or PTSD</li>
        <li>Medical conditions (thyroid disorders, anemia, chronic pain)</li>
        <li>Medication side effects</li>
        <li>Substance use disorders</li>
        <li>Grief or situational sadness</li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        A diagnosis of MDD is made by combining detailed clinical interviews,
        symptom criteria, psychological tests, and medical evaluations. Early
        diagnosis improves outcomes by enabling timely treatment and reducing
        the risk of complications such as chronic depression or suicidal
        thoughts.
      </p>
    </div>
  );
};

export default Diagnosis;

