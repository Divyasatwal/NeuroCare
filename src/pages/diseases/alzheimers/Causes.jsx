import React from "react";
import "../DiseaseLayout.css";

const Causes = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Causes: What Leads to Alzheimer's?
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Scientists do not yet fully understand what causes Alzheimer's disease in most people. In the vast majority of cases, the disease is not caused by a single factor. Instead, it is considered a <b>multifactorial disease</b>, meaning it likely develops from a complex combination of genetic, lifestyle, and environmental factors.
      </p>

      {/* 1. The Main Scientific Hypotheses */}
      <h2 className="disease-section-subt">
        1. The Main Scientific Hypotheses
      </h2>
      <p className="disease-section-text">
        Researchers have proposed several theories to explain why brain cells die in Alzheimer's patients. The two most prominent hypotheses are:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>The Amyloid Hypothesis:</b> This theory suggests that the accumulation of beta-amyloid (Aβ) plaques is the primary cause. These toxic clusters disrupt cell-to-cell communication and trigger an immune response that damages neurons.
        </li>
        <li>
          <b>The Cholinergic Hypothesis:</b> This is the oldest hypothesis, which suggests AD is caused by a reduction in the synthesis of <i>acetylcholine</i>, a vital neurotransmitter responsible for memory and learning. Most current drug treatments work by trying to boost this chemical.
        </li>
        <li>
          <b>The Tau Hypothesis:</b> This focuses on the "tangles." It suggests that when the tau protein structure collapses, the transport system inside the cell fails, leading to cell death.
        </li>
      </ul>

      {/* 2. Genetic Factors */}
      <h2 className="disease-section-subt">
       2. The Role of Genetics
      </h2>
      <p className="disease-section-text">
        Genetics play a role in Alzheimer's, but having a family member with the disease does not guarantee you will get it. The influence of genes depends on the type of Alzheimer's:
      </p>

      <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "15px", color: "#2c3e50" }}>
        Early-Onset Alzheimer’s (Familial)
      </h3>
      <p className="disease-section-text">
        This is rare (less than 5% of cases) and usually appears between ages 30 and 60. It is caused by inherited changes in one of three specific genes. If a parent has one of these mutations, the child has a 50/50 chance of inheriting the disease.
      </p>
      <ul className="disease-section-text">
        <li>Amyloid precursor protein (APP)</li>
        <li>Presenilin 1 (PSEN1)</li>
        <li>Presenilin 2 (PSEN2)</li>
      </ul>

      <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginTop: "15px", color: "#2c3e50" }}>
        Late-Onset Alzheimer’s (Sporadic)
      </h3>
      <p className="disease-section-text">
        This is the common form. There is no single gene that causes it, but one gene is known to increase risk: <b>APOE ε4</b>. Carrying this gene increases susceptibility, but many people with this gene never develop the disease.
      </p>
      
      {/* 3. Risk Factors */}
      <h2 className="disease-section-subt">
       3. Major Risk Factors
      </h2>
      <p className="disease-section-text">
        While age and genetics cannot be changed, other risk factors may be influenced by lifestyle and environment.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Age:</b> This is the greatest known risk factor. The likelihood of developing Alzheimer's doubles every 5 years after age 65.
        </li>
        <li>
          <b>Head Trauma:</b> There is a strong link between serious head injuries (especially those involving loss of consciousness) and future risk of dementia.
        </li>
        <li>
          <b>Heart-Head Connection:</b> The brain requires 20% of the body's blood and oxygen. Conditions that damage the heart or blood vessels also damage the brain. These include:
          <ul>
            <li>High blood pressure</li>
            <li>Heart disease</li>
            <li>Stroke</li>
            <li>Diabetes</li>
            <li>High cholesterol</li>
          </ul>
        </li>
        <li>
          <b>Lifestyle Factors:</b> Smoking, excessive alcohol consumption, poor sleep patterns, and lack of physical exercise have all been associated with higher risk.
        </li>
      </ul>

      {/* 4. Down Syndrome Connection */}
      <h2 className="disease-section-subt">
       4. Connection to Down Syndrome
      </h2>
      <p className="disease-section-text">
        Individuals with Down syndrome are at a significantly higher risk of developing Alzheimer's. This is because they have an extra copy of chromosome 21, which contains the gene that produces harmful amyloid. By age 40, almost all people with Down syndrome have amyloid plaques in their brains, though symptoms may not appear until later.
      </p>

    </div>
  );
};

export default Causes;