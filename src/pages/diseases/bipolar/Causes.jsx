// import React from "react";
// import "../DiseaseLayout.css";

// const Causes = () => {
//   return (
//     <div className="disease-section">
//       <h2 className="disease-section-title">Causes of Bipolar Disorder</h2>
//       <div className="disease-section-divider"></div>

//       <ul className="disease-section-text">
//         <li><strong>Genetics:</strong> Bipolar disorder is highly hereditary.</li>
//         <li><strong>Brain Chemistry:</strong> Imbalance in neurotransmitters like dopamine.</li>
//         <li><strong>Trauma:</strong> Major stress or childhood trauma.</li>
//         <li><strong>Hormonal Changes:</strong> Can trigger or worsen mood episodes.</li>
//         <li><strong>Environmental Factors:</strong> Sleep disturbances, substance use, stress.</li>
//       </ul>
//     </div>
//   );
// };

// export default Causes;
import React from "react";
import "../DiseaseLayout.css";

const BipolarCauses = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Causes: Understanding Bipolar Disorder
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Bipolar disorder (BD) is a complex mental health condition characterized by extreme mood swings, including periods of mania and depression. Researchers believe that the disorder develops through the interaction of multiple factors rather than a single cause. While genetics can predispose an individual to bipolar disorder, environmental influences, brain chemistry, and lifestyle factors play crucial roles in triggering and shaping episodes.
      </p>

      {/* Genetic Factors */}
      <h2 className="disease-section-subt">
        1. Genetic Factors
      </h2>
      <p className="disease-section-text">
        Genetics are among the most significant contributors to bipolar disorder. Family and twin studies suggest that heritability accounts for roughly 60-80% of the risk. This means that individuals with a first-degree relative (parent or sibling) who has BD are at a much higher risk compared to the general population. However, having a genetic predisposition does not guarantee the development of the disorder.
      </p>

      <ul className="disease-section-text">
        <li><b>Family History:</b> Children of parents with bipolar disorder are significantly more likely to develop the condition, particularly if both parents are affected.</li>
        <li><b>Gene Variants:</b> Certain genes related to neurotransmitter regulation, such as <i>CACNA1C</i> and <i>ANK3</i>, have been linked to increased susceptibility.</li>
        <li><b>Epigenetics:</b> Environmental factors can influence how genes are expressed, meaning that genes associated with BD can be activated or silenced depending on life experiences and exposures.</li>
      </ul>

      <p className="disease-section-text">
        Overall, genetics set the foundation for vulnerability, but environmental and lifestyle triggers are often necessary to precipitate the first mood episode.
      </p>

      {/* Brain Chemistry & Structure */}
      <h2 className="disease-section-subt">
        2. Brain Chemistry & Structure
      </h2>
      <p className="disease-section-text">
        Bipolar disorder is associated with imbalances in brain chemicals and differences in brain structure. Neurotransmitters, which are chemical messengers, play a crucial role in regulating mood, energy, and cognition. Disruptions in their normal functioning can contribute to the extreme mood fluctuations seen in BD.
      </p>

      <ul className="disease-section-text">
        <li><b>Neurotransmitter Imbalances:</b> Abnormal levels of dopamine, serotonin, and norepinephrine can cause periods of heightened energy, irritability, or depression.</li>
        <li><b>Brain Structure Differences:</b> Studies have found structural differences in areas such as the prefrontal cortex (decision-making and emotional regulation), amygdala (processing emotions), and hippocampus (memory and mood regulation).</li>
        <li><b>Circadian Rhythm Disruption:</b> Irregular sleep patterns and biological clock disruptions can trigger manic or depressive episodes by affecting hormone and neurotransmitter levels.</li>
      </ul>

      <p className="disease-section-text">
        These neurobiological factors suggest that bipolar disorder is not simply a behavioral problem but a condition with measurable changes in brain function and structure.
      </p>

      {/* Environmental & Lifestyle Factors */}
      <h2 className="disease-section-subt">
        3. Environmental & Lifestyle Factors
      </h2>
      <p className="disease-section-text">
        While genetic and biological factors create vulnerability, environmental and lifestyle factors often act as triggers for mood episodes. These factors can influence the onset, frequency, and severity of bipolar episodes throughout a person’s life.
      </p>

      <ul className="disease-section-text">
        <li><b>Stressful Life Events:</b> Trauma, abuse, loss of a loved one, or significant life changes can precipitate the first manic or depressive episode.</li>
        <li><b>Substance Use:</b> Alcohol, recreational drugs, and even certain medications can provoke mood swings or worsen symptoms.</li>
        <li><b>Sleep Disruption:</b> Poor sleep, shift work, or jet lag can destabilize mood and trigger mania in predisposed individuals.</li>
        <li><b>Medical Conditions:</b> Hormonal imbalances (thyroid disorders), chronic illnesses, and neurological conditions can contribute to symptom onset or severity.</li>
        <li><b>Social Environment:</b> Lack of social support, unstable relationships, or high-pressure environments may increase vulnerability to episodes.</li>
      </ul>

      {/* Risk Factors */}
      <h2 className="disease-section-subt">
        4. Risk Factors
      </h2>
      <p className="disease-section-text">
        Certain factors are consistently associated with higher risk of developing bipolar disorder. While some cannot be changed, others can be managed to reduce severity or frequency of episodes.
      </p>

      <ul className="disease-section-text">
        <li><b>Family History:</b> Having a parent or sibling with BD significantly increases risk.</li>
        <li><b>Early Life Stress or Trauma:</b> Childhood adversity, abuse, or neglect is linked to earlier onset and more severe episodes.</li>
        <li><b>Substance Abuse:</b> Drug or alcohol use can trigger or intensify episodes.</li>
        <li><b>Sleep Problems:</b> Chronic insomnia or irregular schedules can precipitate mania or depression.</li>
        <li><b>High-Stress Occupations or Environments:</b> Jobs or life situations with ongoing stress may increase episode frequency.</li>
      </ul>

      {/* Closing Paragraph */}
      <p className="disease-section-text" style={{ marginTop: "1.5rem" }}>
        In summary, bipolar disorder arises from the interaction of genetic predisposition, neurobiological changes, and environmental factors. While some risk factors cannot be controlled, awareness of triggers and lifestyle influences can help manage symptoms, prevent relapses, and improve overall quality of life. Early diagnosis and intervention remain essential for reducing the impact of the disorder on daily functioning.
      </p>
    </div>
  );
};

export default BipolarCauses;
