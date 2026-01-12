
// import "../DiseaseLayout.css";

// const Overview = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Overview: Understanding MDD</h2>
//       <div className="disease-section-divider"></div>

//       <p className="disease-section-text">
//         Major Depressive Disorder (MDD), also known as clinical depression, is a
//         serious mood disorder characterized by persistent sadness, loss of
//         interest, and emotional and physical symptoms that interfere with daily
//         life. It affects how a person feels, thinks, and behaves.
//       </p>

//       <p className="disease-section-text">
//         Unlike temporary feelings of sadness, MDD lasts for weeks, months, or
//         even years and requires proper medical intervention. It is one of the
//         most common mental health disorders worldwide.
//       </p>
//     </div>
//   );
// };

// export default Overview;

import React from "react";
import "../DiseaseLayout.css";

const OverviewMDD = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Overview: Understanding Major Depressive Disorder (MDD)
      </h2>
      <div className="disease-section-divider"></div>

      {/* Main Description */}
      <p className="disease-section-text">
        Major Depressive Disorder (MDD), also called clinical depression, is a 
        common mental health condition characterized by persistent sadness, loss 
        of interest or pleasure, low energy, and significant difficulty 
        carrying out daily activities. It affects how a person thinks, feels, 
        and behaves, influencing mood, cognitive abilities, and physical health.
      </p>

      <p className="disease-section-text">
        Unlike temporary feelings of sadness, MDD is long-lasting and may persist 
        for weeks, months, or even years without treatment. It is one of the most 
        prevalent mental health disorders globally, impacting millions of people 
        across all age groups and often requiring professional medical or 
        psychological intervention.
      </p>

      <p className="disease-section-text">
        <b>Keywords:</b> Major Depressive Disorder, depression, mood disorder, symptoms, causes,
        risk factors, treatment, clinical depression
      </p>

      {/* Introduction */}
      <h2 className="disease-section-title">Introduction</h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        MDD is a serious mood disorder that significantly disrupts emotional 
        well-being, thinking patterns, and daily functioning. People with MDD 
        often experience overwhelming sadness, hopelessness, and reduced interest 
        in previously enjoyable activities. According to the World Health 
        Organization (WHO), more than 280 million people live with depression 
        worldwide, making it a leading cause of disability and a major 
        contributor to the global burden of disease.
      </p>

      {/* 1. Common Symptoms */}
      <h2 className="disease-section-subt">1. Common Symptoms</h2>
      <ul className="disease-section-text">
        <li>Persistent sadness, emptiness, or low mood.</li>
        <li>Loss of interest in previously enjoyable activities.</li>
        <li>Fatigue, slow thinking, or reduced energy levels.</li>
        <li>Changes in sleep patterns, including insomnia or excessive sleep.</li>
        <li>Significant weight loss, weight gain, or changes in appetite.</li>
        <li>Difficulty concentrating, memory issues, or indecisiveness.</li>
        <li>Feelings of guilt, worthlessness, or hopelessness.</li>
        <li>Thoughts of death, self-harm, or suicide in severe cases.</li>
      </ul>

      {/* 2. Causes and Risk Factors */}
      <h2 className="disease-section-subt">2. Causes and Risk Factors</h2>
      <p className="disease-section-text">
        MDD results from a complex mix of biological, psychological, and 
        environmental influences. Some key risk factors include:
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Genetic Factors:</b> Individuals with a family history of depression 
          have a higher probability of developing the disorder.
        </li>
        <li>
          <b>Biological Factors:</b> Imbalances in neurotransmitters such as 
          serotonin, dopamine, and norepinephrine; hormonal irregularities; and 
          changes in brain structure or inflammation.
        </li>
        <li>
          <b>Psychological Factors:</b> Negative thinking styles, chronic stress, 
          perfectionism, or low self-esteem.
        </li>
        <li>
          <b>Environmental Factors:</b> Trauma, abuse, financial pressure, 
          relationship conflicts, work stress, and social isolation.
        </li>
      </ul>

      {/* 3. How Depression Affects the Brain */}
      <h2 className="disease-section-subt">3. How Depression Affects the Brain</h2>
      <p className="disease-section-text">
        Research shows that MDD alters several key brain regions involved in 
        emotion regulation, memory, and decision-making:
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Prefrontal Cortex:</b> Lower activity affects concentration, planning, 
          and emotional control.
        </li>
        <li>
          <b>Hippocampus:</b> Shrinkage or impaired function reduces memory and 
          learning abilities.
        </li>
        <li>
          <b>Amygdala:</b> Heightened activity increases emotional sensitivity, 
          anxiety, and negative mood responses.
        </li>
      </ul>

      {/* 4. Progression and Course */}
      <h2 className="disease-section-subt">4. Progression and Course</h2>
      <p className="disease-section-text">
        MDD can occur as a single episode or develop into a recurrent condition 
        across a person's lifetime. The severity varies:
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Mild:</b> Symptoms are noticeable but manageable; functioning is mildly 
          impaired.
        </li>
        <li>
          <b>Moderate:</b> Symptoms interfere with work, social activities, and daily 
          responsibilities.
        </li>
        <li>
          <b>Severe:</b> Intense mood disturbance, inability to function, possible 
          hallucinations, or suicidal thoughts.
        </li>
      </ul>

      {/* 5. Subtypes of MDD */}
      <h2 className="disease-section-subt">5. Subtypes of MDD</h2>
      <ul className="disease-section-text">
        <li><b>Single Episode Depression:</b> One major depressive episode.</li>
        <li><b>Recurrent MDD:</b> Repeated episodes with periods of recovery in between.</li>
        <li><b>Melancholic Depression:</b> Severe loss of pleasure, early waking, and intense guilt.</li>
        <li><b>Atypical Depression:</b> Mood improvement with positive events, increased appetite, and oversleeping.</li>
        <li><b>Psychotic Depression:</b> Depression accompanied by delusions or hallucinations.</li>
      </ul>

      {/* 6. Differential Diagnosis */}
      <h2 className="disease-section-subt">6. Differential Diagnosis</h2>
      <p className="disease-section-text">
        Several medical or psychological conditions share symptoms with MDD and 
        must be ruled out:
      </p>
      <ul className="disease-section-text">
        <li>Bipolar disorder (depressive episode phase)</li>
        <li>Generalized Anxiety Disorder</li>
        <li>Thyroid disorders such as hypothyroidism</li>
        <li>Vitamin B12 and folate deficiencies</li>
        <li>Chronic illnesses (diabetes, heart disease, etc.)</li>
        <li>Medication-induced depressive symptoms</li>
      </ul>

      {/* 7. Treatment Overview */}
      <h2 className="disease-section-subt">7. Treatment Overview</h2>
      <p className="disease-section-text">
        Effective treatment can significantly reduce symptoms and prevent 
        relapses. The main treatment options include:
      </p>
      <ul className="disease-section-text">
        <li>
          <b>Psychotherapy:</b> Cognitive Behavioral Therapy (CBT), Interpersonal 
          Therapy (IPT), and mindfulness-based interventions.
        </li>
        <li>
          <b>Medications:</b> SSRIs, SNRIs, tricyclic antidepressants, and MAOIs.
        </li>
        <li>
          <b>Lifestyle Strategies:</b> Exercise, structured routines, sleep 
          hygiene, social support, and proper nutrition.
        </li>
        <li>
          <b>Advanced Therapies:</b> Electroconvulsive Therapy (ECT), 
          Transcranial Magnetic Stimulation (TMS), and ketamine-based treatments 
          for treatment-resistant depression.
        </li>
      </ul>

      {/* 8. Brief History */}
      <h2 className="disease-section-subt">8. Brief History</h2>
      <p className="disease-section-text">
        The concept of depression dates back to ancient civilizations, where it 
        was described as “melancholia.” In the 20th century, early psychiatrists 
        like Emil Kraepelin and Sigmund Freud helped shape modern diagnostic 
        models and treatment approaches. Advances in neuroscience and 
        pharmacology have since revolutionized the understanding and management 
        of mood disorders.
      </p>

      <div className="disease-section-divider"></div>
      <p className="disease-section-text">
        Major Depressive Disorder is a serious but highly treatable condition. 
        Early diagnosis, continuous care, and strong emotional and social 
        support can greatly improve recovery and long-term well-being.
      </p>
    </div>
  );
};

export default OverviewMDD;
