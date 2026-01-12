// import React from "react";
// import "../DiseaseLayout.css";

// const Symptoms = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Symptoms of Bipolar Disorder</h2>
//       <div className="disease-section-divider"></div>

//       <h3>Manic Symptoms</h3>
//       <ul>
//         <li>High energy or abnormal excitement</li>
//         <li>Decreased need for sleep</li>
//         <li>Racing thoughts</li>
//         <li>Impulsive decisions</li>
//       </ul>

//       <h3>Depressive Symptoms</h3>
//       <ul>
//         <li>Low mood</li>
//         <li>Fatigue</li>
//         <li>Loss of interest</li>
//         <li>Sleep and appetite changes</li>
//       </ul>
//     </div>
//   );
// // };


// export default Symptoms;

import React from "react";
import "../DiseaseLayout.css";

const BipolarSymptoms = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Symptoms of Bipolar Disorder
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Bipolar disorder is a mental health condition characterized by extreme and often unpredictable mood swings. These swings range from emotional highs (mania or hypomania) to lows (depression) and can affect thoughts, behavior, energy levels, and day-to-day functioning. Recognizing the symptoms early is crucial for timely intervention, effective treatment, and reducing the impact on personal, social, and occupational life.
      </p>

      {/* 1. Manic or Hypomanic Symptoms */}
      <h2 className="disease-section-subt">
        1. Manic or Hypomanic Symptoms
      </h2>
      <p className="disease-section-text">
        Manic or hypomanic episodes involve abnormally elevated, expansive, or irritable moods that last for days or weeks. These episodes can significantly impact judgment, decision-making, and interpersonal relationships. Common signs include:
      </p>
      <ul className="disease-section-text">
        <li><b>Elevated or irritable mood:</b> Feeling excessively happy, euphoric, or unusually irritable, sometimes with rapid mood changes.</li>
        <li><b>Increased energy and activity:</b> A surge in goal-directed activity, restlessness, or engaging in multiple tasks simultaneously, often leading to exhaustion later.</li>
        <li><b>Reduced need for sleep:</b> Feeling rested after only a few hours of sleep, yet remaining highly energetic.</li>
        <li><b>Impulsive and risky behaviors:</b> Overspending, risky sexual activity, reckless driving, or making major decisions without considering consequences.</li>
        <li><b>Inflated self-esteem or grandiosity:</b> Feeling unusually confident, powerful, or believing one has special abilities or talents.</li>
        <li><b>Racing thoughts and distractibility:</b> Thoughts move rapidly, making it difficult to focus or complete tasks, and attention shifts quickly from one idea to another.</li>
      </ul>

      {/* 2. Depressive Symptoms */}
      <h2 className="disease-section-subt">
        2. Depressive Symptoms
      </h2>
      <p className="disease-section-text">
        Depressive episodes are characterized by persistent sadness, low energy, and a lack of interest in daily activities. These episodes can last for weeks to months and severely impair normal functioning. Common symptoms include:
      </p>
      <ul className="disease-section-text">
        <li><b>Persistent sadness or emptiness:</b> Feeling hopeless, tearful, or emotionally numb for extended periods.</li>
        <li><b>Loss of interest or pleasure:</b> Activities that were once enjoyable, such as hobbies, socializing, or work, no longer bring satisfaction.</li>
        <li><b>Fatigue or low energy:</b> Feeling constantly drained, sluggish, or lacking motivation, even with adequate rest.</li>
        <li><b>Changes in appetite or weight:</b> Either weight loss or weight gain unrelated to diet, accompanied by changes in eating habits.</li>
        <li><b>Sleep disturbances:</b> Insomnia or oversleeping, often worsening mood and energy levels.</li>
        <li><b>Difficulty concentrating or making decisions:</b> Struggling with memory, problem-solving, or focusing on routine tasks.</li>
        <li><b>Thoughts of death or suicide:</b> Persistent feelings of worthlessness, hopelessness, or preoccupation with self-harm or suicidal thoughts.</li>
      </ul>

      {/* 3. Mixed Features */}
      <h2 className="disease-section-subt">
        3. Mixed Features
      </h2>
      <p className="disease-section-text">
        Mixed episodes occur when symptoms of both mania and depression appear simultaneously. These episodes can be especially distressing and dangerous, as individuals may feel agitated or restless while also experiencing intense sadness or hopelessness. Signs include:
      </p>
      <ul className="disease-section-text">
        <li>Rapid mood swings, such as feeling very sad or hopeless while simultaneously feeling highly agitated or irritable.</li>
        <li>High energy coupled with depressive thoughts, making it difficult to sleep, concentrate, or maintain daily routines.</li>
        <li>Impulsive actions combined with feelings of guilt or despair, increasing the risk of accidents or self-harm.</li>
      </ul>

      {/* 4. Early Warning Signs */}
      <h2 className="disease-section-subt">
        4. Early Warning Signs
      </h2>
      <p className="disease-section-text">
        Early recognition of warning signs can help prevent full-blown mood episodes and reduce their impact. These signs may appear days or weeks before a manic, hypomanic, or depressive episode:
      </p>
      <ul className="disease-section-text">
        <li>Changes in sleep patterns, such as sleeping much less or more than usual.</li>
        <li>Shifts in energy levels, either unusually high or extremely low.</li>
        <li>Noticeable changes in behavior, including increased irritability, restlessness, or hyperactivity.</li>
        <li>Difficulty concentrating, making decisions, or completing daily tasks.</li>
        <li>Social withdrawal or unusual changes in relationships with family, friends, or colleagues.</li>
        <li>Increased risk-taking or impulsive behaviors during early manic states.</li>
      </ul>

      {/* 5. When to Seek Help */}
      <h2 className="disease-section-subt">
        5. When to Seek Help
      </h2>
      <p className="disease-section-text">
        If mood swings, changes in behavior, or early warning signs interfere with work, school, relationships, or personal safety, it is essential to seek professional help immediately. Early intervention can improve the effectiveness of treatment, reduce the severity of episodes, and improve long-term outcomes. Mental health professionals may include psychiatrists, psychologists, and licensed therapists.
      </p>

      <div style={{
        background: 'rgba(212, 93, 0, 0.08)',
        padding: '1.5rem',
        borderRadius: '8px',
        borderLeft: '4px solid #d45d00',
        margin: '1.5rem 0'
      }}>
        <p className="disease-section-text" style={{margin: 0}}>
          <b>Important Note:</b> Bipolar disorder manifests differently in each individual. Only a qualified mental health professional can make an accurate diagnosis and recommend an appropriate treatment plan.
        </p>
      </div>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Awareness of bipolar disorder symptoms is the first step toward effective management. By recognizing mood changes, mixed features, and early warning signs, individuals and families can take proactive steps to seek care, adhere to treatment, and maintain stability in daily life. Understanding these symptoms also reduces stigma and supports better mental health outcomes.
      </p>
    </div>
  );
};

export default BipolarSymptoms;

