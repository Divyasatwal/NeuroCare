import React from "react";
import "../DiseaseLayout.css"; // Maintaining the import for consistency

const Symptoms = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Symptoms: Recognizing the Signs of Depression
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Major Depressive Disorder (MDD) is a common mental health condition that affects mood, cognition, behavior, and physical wellbeing. Symptoms can develop gradually or suddenly and vary in severity. Early recognition is key to effective treatment.
      </p>

      {/* 1. Core Symptoms */}
      <h2 className="disease-section-subt">
        1. Core Symptoms of Depression
      </h2>
      <p className="disease-section-text">
        The following symptoms are commonly observed in depression. Experiencing several of these consistently for at least two weeks may indicate MDD:
      </p>
      
      <ol className="disease-section-text">
        <li><b>Persistent low mood:</b> Feeling sad, empty, or hopeless most of the day, nearly every day.</li>
        <li><b>Loss of interest or pleasure:</b> Marked disinterest in hobbies, work, or social activities once enjoyed.</li>
        <li><b>Changes in appetite or weight:</b> Significant weight loss or gain unrelated to dieting.</li>
        <li><b>Sleep disturbances:</b> Insomnia, early morning awakening, or oversleeping.</li>
        <li><b>Fatigue or low energy:</b> Feeling physically drained or mentally exhausted even after adequate rest.</li>
        <li><b>Difficulty concentrating:</b> Trouble focusing, making decisions, or remembering things.</li>
        <li><b>Feelings of worthlessness or guilt:</b> Excessive self-blame or harsh self-criticism.</li>
        <li><b>Psychomotor changes:</b> Observable agitation (restlessness) or slowing of movement and speech.</li>
        <li><b>Suicidal thoughts or behaviors:</b> Thoughts of death, self-harm, or suicide, which require immediate attention.</li>
      </ol>

      {/* 2. Symptoms by Severity */}
      <h2 className="disease-section-subt">
       2. Symptoms by Severity
      </h2>
      <p className="disease-section-text">
        Depression symptoms can range from mild to severe, affecting daily functioning and overall wellbeing.
      </p>
      
      <h3 className="disease-section-text font-bold mt-4">
        Mild Depression
      </h3>
      <p className="disease-section-text">
        Individuals may experience low mood, reduced motivation, and mild functional impairment. They can usually continue daily routines but may feel less engaged or enjoy activities less than usual.
      </p>
      <ul className="disease-section-text">
        <li>Feeling down or irritable most of the day</li>
        <li>Mild loss of interest in hobbies</li>
        <li>Fatigue or decreased energy</li>
        <li>Occasional trouble concentrating</li>
      </ul>

      <h3 className="disease-section-text font-bold mt-4">
        Moderate Depression
      </h3>
      <p className="disease-section-text">
        Symptoms are more pronounced and interfere with work, school, and relationships. Daily functioning becomes noticeably impaired, and physical symptoms often appear.
      </p>
      <ul className="disease-section-text">
        <li>Persistent sadness and hopelessness</li>
        <li>Significant loss of interest in previously enjoyed activities</li>
        <li>Sleep disturbances, appetite changes, and fatigue</li>
        <li>Difficulty making decisions or concentrating</li>
        <li>Feelings of guilt, worthlessness, or self-blame</li>
      </ul>

      <h3 className="disease-section-text font-bold mt-4">
        Severe Depression
      </h3>
      <p className="disease-section-text">
        Symptoms are severe, often including suicidal thoughts, and substantially impair daily functioning. Hospitalization may be required in some cases.
      </p>
      <ul className="disease-section-text">
        <li>Intense sadness, emptiness, or despair</li>
        <li>Marked inability to function at work, school, or home</li>
        <li>Severe psychomotor agitation or retardation</li>
        <li>Persistent thoughts of death, self-harm, or suicide</li>
        <li>Significant changes in appetite, sleep, and energy levels</li>
      </ul>

      {/* 3. Physical and Cognitive Symptoms */}
      <h2 className="disease-section-subt mt-8">
       3. Physical and Cognitive Symptoms
      </h2>
      <p className="disease-section-text">
        In addition to emotional symptoms, depression often causes physical and cognitive effects that can impact daily life:
      </p>
      <ul className="disease-section-text">
        <li>Slowed thinking or difficulty concentrating</li>
        <li>Memory problems</li>
        <li>Headaches, digestive issues, or chronic pain without clear medical cause</li>
        <li>Changes in movement or coordination (restlessness or slowed movements)</li>
      </ul>

      {/* 4. Behavioral and Social Symptoms */}
      <h2 className="disease-section-subt mt-8">
       4. Behavioral and Social Symptoms
      </h2>
      <p className="disease-section-text">
        Depression can also affect social interaction, motivation, and behavior:
      </p>
      <ul className="disease-section-text">
        <li>Withdrawal from friends, family, and social activities</li>
        <li>Neglect of responsibilities at home, school, or work</li>
        <li>Reduced motivation to engage in daily tasks</li>
        <li>Substance use or other coping behaviors</li>
      </ul>

      {/* Final Call to Action */}
      <div className="disease-section-divider"></div>
      <p className="disease-section-text">
        <b>When to see a doctor:</b> If you or someone you know experiences persistent sadness, loss of interest, or thoughts of self-harm, seek help immediately. Early diagnosis and treatment of depression improve recovery, prevent complications, and reduce the risk of recurrence.
      </p>
    </div>
  );
};

export default Symptoms;
