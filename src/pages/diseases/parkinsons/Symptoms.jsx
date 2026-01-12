/*import React from "react";
import "../DiseaseLayout.css";

const Symptoms = () => {
  return (
    <div className="content-section">
      <h1>Symptoms of Parkinson's Disease</h1>

      <p>Symptoms vary by individual but generally fall into motor and non-motor categories.</p>

      <h3>Motor Symptoms</h3>
      <ul>
        <li>Resting tremor (shaking hands or legs)</li>
        <li>Bradykinesia (slowness of movement)</li>
        <li>Rigid or stiff muscles</li>
        <li>Postural instability and balance problems</li>
        <li>Shuffling gait or freezing episodes</li>
      </ul>

      <h3>Non-Motor Symptoms</h3>
      <ul>
        <li>Sleep disturbances</li>
        <li>Loss of smell (anosmia)</li>
        <li>Constipation</li>
        <li>Anxiety or depression</li>
        <li>Cognitive decline or memory issues in later stages</li>
      </ul>
    </div>
  );
};

export default Symptoms;*/

// import React from "react";
// import "../DiseaseLayout.css";

// const Symptoms = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Symptoms of Parkinson’s Disease</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Common symptoms include tremors, stiffness, slowness of movement,
//         balance issues, and difficulty with coordination.
//       </p>
//     </div>
//   );
// };

// export default Symptoms;

import React from "react";
import "../DiseaseLayout.css";

const Symptoms = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Symptoms: Recognizing the Signs of Parkinson’s Disease
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Parkinson’s disease is a progressive neurological disorder primarily
        affecting movement. Symptoms appear gradually and worsen over time.
        Although tremor is the most recognizable sign, Parkinson’s affects
        multiple systems in the body—including mobility, speech, sleep,
        cognition, and mental health. Symptoms vary significantly between
        individuals.
      </p>

      {/* 1. Early Warning Signs */}
      <h2 className="disease-section-subt">1. Early Warning Signs</h2>
      <p className="disease-section-text">
        Parkinson’s often begins with subtle symptoms long before noticeable
        movement problems. These early signs may appear months or years before
        diagnosis.
      </p>

      <ol className="disease-section-text">
        <li><b>Mild Tremor:</b> A slight shake in the hand or fingers, often at rest.</li>
        <li><b>Reduced facial expressions:</b> A “masked face” with less blinking or smiling.</li>
        <li><b>Small handwriting (Micrographia):</b> Letters become unusually small and cramped.</li>
        <li><b>Loss of smell (Hyposmia):</b> Difficulty identifying odors.</li>
        <li><b>Stiffness:</b> Feeling unusually rigid in the arms, legs, or neck.</li>
        <li><b>Slight balance issues:</b> A tendency to lean or sway.</li>
        <li><b>Softer voice (Hypophonia):</b> Speaking more quietly than before.</li>
        <li><b>Constipation:</b> Slower bowel movements due to autonomic system changes.</li>
        <li><b>Sleep disturbances:</b> Acting out dreams or restless sleep.</li>
        <li><b>Fatigue:</b> Persistent tiredness even with adequate sleep.</li>
      </ol>

      {/* 2. Symptoms by Stage */}
      <h2 className="disease-section-subt">
        2. Symptoms by Stage of Progression
      </h2>
      <p className="disease-section-text">
        Parkinson’s disease progresses gradually and is generally categorized
        into early, mid, and advanced stages.
      </p>

      {/* Early stage */}
      <h3 className="disease-section-text font-bold mt-4">
        Early-Stage Parkinson’s
      </h3>
      <p className="disease-section-text">
        Symptoms are mild and do not significantly interfere with daily
        activities. They usually appear on one side of the body.
      </p>
      <ul className="disease-section-text">
        <li>Resting tremor in one hand or limb.</li>
        <li>Stiffness in the arms or legs.</li>
        <li>Changes in posture or reduced arm swing.</li>
        <li>Reduced facial expressions (masked face).</li>
        <li>Minor balance problems.</li>
      </ul>

      {/* Mid stage */}
      <h3 className="disease-section-text font-bold mt-4">
        Mid-Stage Parkinson’s
      </h3>
      <p className="disease-section-text">
        Symptoms become more noticeable and may affect both sides of the body.
        Daily tasks become slower and require more effort.
      </p>
      <ul className="disease-section-text">
        <li><b>Bradykinesia:</b> Slowness of movement.</li>
        <li><b>Postural instability:</b> Increased risk of falling.</li>
        <li><b>Freezing episodes:</b> Sudden inability to move, especially while walking.</li>
        <li><b>Speech changes:</b> Monotone speech, slurred words.</li>
        <li><b>Handwriting difficulty:</b> Micrographia becomes more severe.</li>
        <li><b>Muscle stiffening:</b> Rigid limbs causing discomfort.</li>
      </ul>

      {/* Advanced stage */}
      <h3 className="disease-section-text font-bold mt-4">
        Advanced Parkinson’s (Late Stage)
      </h3>
      <p className="disease-section-text">
        In advanced stages, movement becomes significantly impaired and the
        person may require full-time assistance.
      </p>
      <ul className="disease-section-text">
        <li>Severe freezing and frequent falls.</li>
        <li>Difficulty walking, standing, or sitting upright.</li>
        <li>Speech becomes very soft or unclear.</li>
        <li>Difficulty swallowing (dysphagia).</li>
        <li>Major stiffness and slow movement.</li>
        <li>Cognitive decline may appear in some individuals.</li>
      </ul>

      {/* 3. Non-Motor Symptoms */}
      <h2 className="disease-section-subt mt-8">
        3. Non-Motor Symptoms (Often Overlooked)
      </h2>
      <p className="disease-section-text">
        Non-motor symptoms can appear years before motor symptoms and may be
        more disabling in the long run.
      </p>

      <ul className="disease-section-text">
        <li><b>Depression and anxiety:</b> Very common due to brain chemical changes.</li>
        <li><b>Sleep disorders:</b> REM sleep behavior disorder, insomnia.</li>
        <li><b>Loss of smell:</b> Often one of the earliest symptoms.</li>
        <li><b>Autonomic problems:</b> Constipation, sweating issues, low blood pressure.</li>
        <li><b>Urinary problems:</b> Urinary urgency or difficulty.</li>
        <li><b>Cognitive changes:</b> Slower thinking, memory problems in late stages.</li>
        <li><b>Fatigue:</b> Persistent tiredness despite rest.</li>
        <li><b>Hallucinations (in later stages or due to medications):</b> Seeing things that are not there.</li>
      </ul>

      {/* 4. Psychological Symptoms */}
      <h2 className="disease-section-subt mt-8">
        4. Psychological and Behavioral Symptoms
      </h2>
      <p className="disease-section-text">
        Parkinson’s also affects emotional and psychological health, sometimes
        even before motor symptoms appear.
      </p>

      <ul className="disease-section-text">
        <li><b>Depression:</b> Persistent sadness, low energy.</li>
        <li><b>Anxiety:</b> Excessive worry, panic attacks.</li>
        <li><b>Apathy:</b> Decreased interest or motivation.</li>
        <li><b>Impulse-control behaviors:</b> Gambling, overspending (due to some medications).</li>
      </ul>

      {/* Final call */}
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        <b>When to see a doctor:</b> If you or someone you know experiences
        tremors, stiffness, slowed movement, or changes in walking or facial
        expressions, consult a neurologist. Early diagnosis and treatment can
        significantly improve quality of life.
      </p>
    </div>
  );
};

export default Symptoms;
