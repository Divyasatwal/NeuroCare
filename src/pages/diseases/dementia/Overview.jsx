/*import React from "react";
import "../DiseaseLayout.css";

const Overview = () => (
  <div className="disease-section">
    <h2>Dementia Overview</h2>
    <p>This section gives an overview of Dementia...</p>
  </div>
);

export default Overview;*/

// import React from "react";
// import "../DiseaseLayout.css";

// const Overview = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Overview: Understanding Dementia</h2>
//       <div className="disease-section-divider"></div>
//       <p className="disease-section-text">
//         Dementia is a general term for a group of symptoms affecting memory,
//         thinking, and social abilities severely enough to interfere with daily
//         life. It’s not a specific disease but a collection of symptoms caused by
//         various disorders that affect the brain.
//       </p>
//     </div>
//   );
// };

// export default Overview;

import React from "react";
import "../DiseaseLayout.css";

const Overview = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Overview: Understanding Dementia
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Dementia is a broad term used to describe a group of conditions that lead
        to a significant decline in memory, thinking, and daily functioning.
        Unlike normal aging, dementia interferes with a person’s ability to
        live independently. Dementia is not a single disease—rather, it is
        caused by various disorders that damage brain cells. These include
        Alzheimer’s disease, vascular dementia, Lewy body dementia, and
        frontotemporal dementia, among others.
      </p>

      <p className="disease-section-text">
        The symptoms of dementia occur when nerve cells in the brain stop
        working properly. This leads to disruption in communication between
        different brain regions. While some causes of dementia are reversible,
        most forms are progressive and worsen over time. Current treatments
        focus on managing symptoms, improving quality of life, and slowing
        decline whenever possible.
      </p>

      <p className="disease-section-text">
        <b>Keywords:</b> dementia, cognitive decline, memory loss, brain
        degeneration, vascular dementia, Lewy bodies, frontotemporal dementia,
        neurocognitive disorder
      </p>

      {/* Introduction */}
      <h2 className="disease-section-title">  
        Introduction
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Dementia is a progressive decline in cognitive abilities severe enough
        to interfere with daily life. It affects memory, language, reasoning,
        judgment, emotional control, and behavior. Although it is more common in
        older adults, dementia is not a normal part of aging.
      </p>

      {/* Normal Aging vs Dementia */}
      <h2 className="disease-section-subt">
        1. Normal Aging vs. Dementia: What is the Difference?
      </h2>

      <p className="disease-section-text">
        Occasional forgetfulness can be a part of aging, but dementia involves
        persistent, worsening decline that disrupts everyday functioning.
      </p>

      <div style={{ overflowX: "auto", margin: "20px 0" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Sign of Normal Aging</th>
              <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>Sign of Dementia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Forgetting names occasionally.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Forgetting names of close family members or familiar people.
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Sometimes misplacing objects.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Putting objects in unusual places (e.g., keys in the fridge) and
                being unable to retrace steps.
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Needing reminders for appointments.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Forgetting important events and repeating questions frequently.
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Slower processing speed.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Difficulty following conversations and losing track of tasks
                completely.
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Occasional difficulty finding words.
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Severe language problems—struggling to form coherent sentences.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* What happens in the brain */}
      <h2 className="disease-section-subt">
        2. What happens in the brain?
      </h2>

      <p className="disease-section-text">
        Dementia results from damage to brain cells, which disrupts how regions
        of the brain communicate. Depending on the type of dementia, different
        brain structures are affected.
      </p>

      <p className="disease-section-text">
        Common biological changes that contribute to dementia include:
      </p>

      <ol className="disease-section-text">
        <li>
          <b>Neuron Damage & Loss:</b> Brain cells deteriorate and die, causing
          decline in memory, language, and behavior.
        </li>
        <li>
          <b>Vascular Damage:</b> Reduced blood flow due to strokes or vessel
          blockages deprives brain tissue of oxygen and nutrients.
        </li>
        <li>
          <b>Abnormal Protein Deposits:</b> In conditions like Lewy body or
          frontotemporal dementia, harmful proteins accumulate inside neurons.
        </li>
      </ol>

      {/* Stages */}
      <h2 className="disease-section-subt">
        3. The Three Stages of Progression
      </h2>

      <ul className="disease-section-text">
        <li>
          <b>Early-stage (Mild):</b> Subtle memory issues, difficulty planning,
          mood changes, getting lost in familiar places.
        </li>
        <li>
          <b>Middle-stage (Moderate):</b> Increasing confusion, poor judgment,
          sleep disturbances, personality changes, difficulty with daily tasks.
        </li>
        <li>
          <b>Late-stage (Severe):</b> Loss of speech, inability to walk or eat
          independently, complete dependence on caregivers.
        </li>
      </ul>

      {/* Types of Dementia */}
      <h2 className="disease-section-subt">
        4. Types of Dementia
      </h2>

      <ul className="disease-section-text">
        <li>
          <b>Alzheimer’s Disease:</b> The most common type, marked by amyloid
          plaques and tau tangles.
        </li>
        <li>
          <b>Vascular Dementia:</b> Caused by impaired blood flow due to strokes
          or vessel damage.
        </li>
        <li>
          <b>Lewy Body Dementia:</b> Involves abnormal protein deposits called
          Lewy bodies, affecting movement and alertness.
        </li>
        <li>
          <b>Frontotemporal Dementia:</b> Often affects younger adults and
          impacts personality, behavior, and language.
        </li>
      </ul>

      {/* Differential diagnosis */}
      <h2 className="disease-section-subt">
        5. Is it always Dementia?
      </h2>

      <p className="disease-section-text">
        Not all cognitive issues are caused by dementia. Several reversible
        conditions can mimic dementia symptoms. Proper medical assessment is
        essential.
      </p>

      <p className="disease-section-text">
        <b>Common reversible causes include:</b>
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Nutritional Deficiencies:</b> Vitamin B12 or folate deficiency.
        </li>
        <li>
          <b>Thyroid Disorders:</b> Abnormal hormone levels affecting cognition.
        </li>
        <li>
          <b>Medication Reactions:</b> Sedatives, pain medications, or drug
          interactions.
        </li>
        <li>
          <b>Depression & Anxiety:</b> Severe mood disorders can appear like
          memory loss.
        </li>
        <li>
          <b>Infections:</b> UTIs and systemic infections, especially in seniors.
        </li>
      </ul>

      {/* History */}
      <h2 className="disease-section-subt">
        6. A Brief History
      </h2>

      <p className="disease-section-text">
        The concept of dementia has existed for centuries, originally described
        as “senility.” As scientific knowledge expanded, researchers discovered
        that dementia has multiple causes and is not simply a consequence of old
        age.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Early Observations:</b> Ancient Greek physicians noted progressive
          memory loss in older adults.
        </li>
        <li>
          <b>Modern Understanding:</b> In the 20th century, advancements in
          neurology helped distinguish between different types of dementia
          (Alzheimer’s, vascular, etc.).
        </li>
      </ul>

      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Although dementia cannot be cured, early diagnosis and appropriate care
        can significantly improve quality of life. Research continues to explore
        new therapies aimed at slowing progression and better supporting
        individuals and families living with dementia.
      </p>
    </div>
  );
};

export default Overview;
