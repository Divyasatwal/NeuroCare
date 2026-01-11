// import React from "react";
// import "../DiseaseLayout.css";

// const Symptoms = () => {
//   return (
//     <div>
//       <h2 className="disease-section-title">Symptoms</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Symptoms of dementia vary but often include memory loss, confusion,
//         difficulty with communication, impaired judgment, and personality changes.
//         As the condition progresses, individuals may struggle with performing daily tasks.
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
        Symptoms: Recognizing the Signs
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Dementia is a general term for a decline in mental ability severe enough to interfere with daily life. It is progressive, meaning symptoms develop gradually and worsen over time. While memory loss is common, dementia can also affect communication, reasoning, behavior, and emotional regulation. The progression and combination of symptoms vary depending on the type of dementia and the individual.
      </p>

      {/* 1. Common Warning Signs */}
      <h2 className="disease-section-subt">
        1. Common Warning Signs
      </h2>
      <p className="disease-section-text">
        Recognizing early signs of dementia is important for seeking timely medical evaluation and support:
      </p>
      
      <ol className="disease-section-text">
        <li><b>Memory loss affecting daily life:</b> Forgetting important events, repeatedly asking the same questions, or relying on memory aids more than usual.</li>
        <li><b>Difficulty planning or solving problems:</b> Trouble following steps in a familiar process or managing finances.</li>
        <li><b>Challenges completing familiar tasks:</b> Difficulty cooking, managing chores, or navigating familiar routes.</li>
        <li><b>Confusion with time or place:</b> Losing track of dates, seasons, or forgetting where they are.</li>
        <li><b>Visual and spatial difficulties:</b> Trouble judging distance, reading, or interpreting visual information.</li>
        <li><b>Problems with language:</b> Difficulty finding words, repeating phrases, or struggling to follow conversations.</li>
        <li><b>Misplacing items:</b> Placing objects in unusual locations and being unable to retrace steps.</li>
        <li><b>Poor judgment:</b> Making uncharacteristic decisions or showing decreased attention to personal care.</li>
        <li><b>Withdrawal from social or work activities:</b> Losing interest in hobbies, social events, or professional projects.</li>
        <li><b>Changes in mood and personality:</b> Depression, anxiety, irritability, or confusion in familiar situations.</li>
      </ol>

      {/* 2. Symptoms by Stage */}
      <h2 className="disease-section-subt">
        2. Symptoms by Stage of Progression
      </h2>
      <p className="disease-section-text">
        Dementia progression varies depending on the underlying cause. In general, symptoms can be grouped into early, middle, and late stages:
      </p>

      <h3 className="disease-section-text font-bold mt-4">
        Early Stage
      </h3>
      <p className="disease-section-text">
        Individuals may function independently but notice subtle memory lapses and difficulty with complex tasks. Common symptoms include:
      </p>
      <ul className="disease-section-text">
        <li>Occasional forgetfulness of recent events or conversations.</li>
        <li>Difficulty finding the right words.</li>
        <li>Challenges managing finances or organizing tasks.</li>
        <li>Losing items more frequently than before.</li>
        <li>Decreased attention to planning or decision-making.</li>
      </ul>

      <h3 className="disease-section-text font-bold mt-4">
        Middle Stage
      </h3>
      <p className="disease-section-text">
        Symptoms become more noticeable and interfere with daily life. Assistance may be needed for routine activities. Common symptoms include:
      </p>
      <ul className="disease-section-text">
        <li>Forgetting personal history and important details.</li>
        <li>Confusion about time, place, and familiar people.</li>
        <li>Changes in sleep patterns and restlessness.</li>
        <li>Increased risk of wandering and getting lost.</li>
        <li>Behavioral changes such as agitation, mood swings, or repetitive actions.</li>
      </ul>

      <h3 className="disease-section-text font-bold mt-4">
        Late Stage
      </h3>
      <p className="disease-section-text">
        Individuals require extensive assistance with daily living. Communication becomes limited, and physical abilities may decline. Common symptoms include:
      </p>
      <ul className="disease-section-text">
        <li>Complete dependence on caregivers for personal care and daily activities.</li>
        <li>Loss of awareness of surroundings and recent experiences.</li>
        <li>Severe difficulty with communication, walking, or eating.</li>
        <li>Increased vulnerability to infections and other health complications.</li>
      </ul>

      {/* 3. Psychological and Behavioral Symptoms */}
      <h2 className="disease-section-subt mt-8">
        3. Psychological and Behavioral Symptoms
      </h2>
      <p className="disease-section-text">
        Dementia can cause neuropsychiatric symptoms that impact quality of life for both patients and caregivers:
      </p>
      <ul className="disease-section-text">
        <li><b>Apathy:</b> Reduced motivation or interest in activities.</li>
        <li><b>Depression and anxiety:</b> Withdrawal, irritability, or mood swings.</li>
        <li><b>Agitation and aggression:</b> Restlessness, verbal outbursts, or physical agitation.</li>
        <li><b>Hallucinations or delusions:</b> Seeing or believing things that aren’t real, more common in certain types like Lewy body dementia.</li>
      </ul>

      {/* 4. Sundowning */}
      <h2 className="disease-section-subt mt-8">
        4. The "Sundowning" Phenomenon
      </h2>
      <p className="disease-section-text">
        Some people with dementia experience increased confusion, agitation, or anxiety in the late afternoon and evening. Contributing factors include:
      </p>
      <ul className="disease-section-text">
        <li>Fatigue and end-of-day exhaustion.</li>
        <li>Disruption of the internal circadian rhythm.</li>
        <li>Reduced lighting or shadows causing visual confusion.</li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        <b>When to see a doctor:</b> If you notice any of these signs in yourself or a loved one, seek medical evaluation promptly. Early assessment helps with management, symptom support, and planning for future care.
      </p>
    </div>
  );
};

export default Symptoms;
