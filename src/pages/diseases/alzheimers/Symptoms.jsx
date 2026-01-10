import React from "react";
import "../DiseaseLayout.css"; // Maintaining the import for consistency with other files

const Symptoms = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Symptoms: Recognizing the Signs
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Alzheimer’s disease is a progressive condition, meaning symptoms develop gradually and become more severe over time. While memory loss is the most well-known symptom, the disease affects the brain's ability to handle complex tasks, communicate, and regulate emotions. The speed at which symptoms advance varies significantly from person to person.
      </p>

      {/* 1. The 10 Warning Signs */}
      <h2 className="disease-section-subt">
        1. The 10 Early Warning Signs
      </h2>
      <p className="disease-section-text">
        Health organizations typically identify ten key warning signs that suggest cognitive decline beyond normal aging. Experiencing one or more of these suggests a need for medical evaluation.
      </p>
      
      {/* Ordered List styling */}
      <ol className="disease-section-text">
        <li>
          <b>Memory loss that disrupts daily life:</b> Forgetting recently learned information, important dates, or events, and asking for the same information over and over.
        </li>
        <li>
          <b>Challenges in planning or solving problems:</b> Difficulty following a familiar recipe, keeping track of monthly bills, or concentrating on detailed tasks.
        </li>
        <li>
          <b>Difficulty completing familiar tasks:</b> Trouble driving to a familiar location, organizing a grocery list, or remembering the rules of a favorite game.
        </li>
        <li>
          <b>Confusion with time or place:</b> Losing track of dates, seasons, and the passage of time. They may forget where they are or how they got there.
        </li>
        <li>
          <b>Trouble understanding visual images and spatial relationships:</b> Difficulty reading, judging distance, or determining color or contrast, which causes issues with driving.
        </li>
        <li>
          <b>New problems with words in speaking or writing:</b> Stopping in the middle of a conversation and having no idea how to continue, or repeating themselves. They may struggle to find the right word (e.g., calling a "watch" a "hand-clock").
        </li>
        <li>
          <b>Misplacing things and losing the ability to retrace steps:</b> Putting things in unusual places (like keys in the fridge). They may accuse others of stealing because they cannot remember where they placed an item.
        </li>
        <li>
          <b>Decreased or poor judgment:</b> poor decision-making when dealing with money (giving large amounts to telemarketers) or paying less attention to grooming and hygiene.
        </li>
        <li>
          <b>Withdrawal from work or social activities:</b> Removing themselves from hobbies, social activities, work projects, or sports because they are embarrassed by their cognitive changes.
        </li>
        <li>
          <b>Changes in mood and personality:</b> Becoming confused, suspicious, depressed, fearful, or anxious. They may become easily upset at home, at work, or in places where they are out of their comfort zone.
        </li>
      </ol>

      {/* 2. Symptoms by Stage */}
      <h2 className="disease-section-subt">
       2. Symptoms by Stage of Progression
      </h2>
      <p className="disease-section-text">
        Doctors typically categorize Alzheimer’s into three general stages: Mild (Early-stage), Moderate (Middle-stage), and Severe (Late-stage).
      </p>
      
      <h3 className="disease-section-text font-bold mt-4">
        Mild Alzheimer’s (Early-Stage)
      </h3>
      <p className="disease-section-text">
        In the early stage, a person may still function independently. They may drive, work, and be part of social activities. However, the person may feel as if they are having memory lapses. Friends and family may begin to notice difficulties. Common symptoms include:
      </p>
      <ul className="disease-section-text">
        <li>Difficulty coming up with the right name or word.</li>
        <li>Difficulty performing tasks in social or work settings.</li>
        <li>Forgetting material that was just read.</li>
        <li>Losing or misplacing a valuable object.</li>
        <li>Increasing trouble with planning or organizing.</li>
      </ul>

      <h3 className="disease-section-text font-bold mt-4">
        Moderate Alzheimer’s (Middle-Stage)
      </h3>
      <p className="disease-section-text">
        This is typically the longest stage and can last for many years. As the disease progresses, the person will require a greater level of care. Damage to the nerve cells in the brain makes it difficult to express thoughts and perform routine tasks. Symptoms become more pronounced:
      </p>
      <ul className="disease-section-text">
        <li><b>Forgetfulness of personal history:</b> Being unable to recall their own address, telephone number, or the high school/college from which they graduated.</li>
        <li><b>Disorientation:</b> Confusion about where they are or what day it is.</li>
        <li><b>Sleep Disturbances:</b> Changes in sleep patterns, such as sleeping during the day and becoming restless at night.</li>
        <li><b>Wandering:</b> an increased risk of wandering off and becoming lost.</li>
        <li><b>Physical Changes:</b> Occasional loss of bladder and bowel control.</li>
        <li><b>Behavioral Changes:</b> Personality changes, such as delusions (believing their caregiver is an imposter) or compulsive, repetitive behavior like hand-wringing or tissue shredding.</li>
      </ul>

      <h3 className="disease-section-text font-bold mt-4">
        Severe Alzheimer’s (Late-Stage)
      </h3>
      <p className="disease-section-text">
        In the final stage of this disease, individuals lose the ability to respond to their environment, to carry on a conversation, and, eventually, to control movement. They may still say words or phrases, but communicating pain becomes difficult. As memory and cognitive skills continue to worsen, significant personality changes may take place and individuals need extensive help with daily activities.
      </p>
      <ul className="disease-section-text">
        <li>Need round-the-clock assistance with daily activities and personal care.</li>
        <li>Lose awareness of recent experiences as well as of their surroundings.</li>
        <li>Experience changes in physical abilities, including the ability to walk, sit, and, eventually, swallow.</li>
        <li>Become vulnerable to infections, especially pneumonia.</li>
      </ul>

      {/* 3. Psychological Symptoms */}
      <h2 className="disease-section-subt mt-8">
       3. Psychological and Behavioral Symptoms
      </h2>
      <p className="disease-section-text">
        In addition to memory loss, Alzheimer's often brings distinct psychiatric symptoms ("neuropsychiatric symptoms"). These can be the most distressing aspect for caregivers.
      </p>
      <ul className="disease-section-text">
        <li><b>Apathy:</b> A lack of interest, enthusiasm, or concern. This is often the first noticeable behavioral change.</li>
        <li><b>Depression:</b> Social withdrawal, irritability, and crying spells.</li>
        <li><b>Agitation and Aggression:</b> Restlessness, pacing, hitting, or shouting, often triggered by frustration or confusion.</li>
        <li><b>Hallucinations:</b> Seeing or hearing things that are not there.</li>
      </ul>

      {/* 4. Sundowning */}
      <h2 className="disease-section-subt mt-8">
       4. The "Sundowning" Phenomenon
      </h2>
      <p className="disease-section-text">
        Many people with Alzheimer's experience "Sundowning"—a state of confusion, anxiety, and aggression that occurs in the late afternoon and spans into the night. Factors that may contribute to sundowning include:
      </p>
      <ul className="disease-section-text">
        <li>End-of-day exhaustion (both mental and physical).</li>
        <li>An upset in the "internal body clock," causing a biological mix-up between day and night.</li>
        <li>Shadows and low light causing visual confusion and hallucinations.</li>
      </ul>

      {/* Final Call to Action */}
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        <b>When to see a doctor:</b> If you notice any of these signs in yourself or a loved one, don't ignore them. Schedule an appointment with a doctor. Early detection allows for better management of symptoms and the opportunity to participate in clinical trials.
      </p>
    </div>
  );
};

export default Symptoms;