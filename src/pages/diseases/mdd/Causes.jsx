

import React from "react";
import "../DiseaseLayout.css";

const CausesMDD = () => {
  return (
    <div className="disease-section">
      <h2 className="disease-section-title">
        Causes: What Leads to Major Depressive Disorder (MDD)?
      </h2>
      <div className="disease-section-divider"></div>

      <p className="disease-section-text">
        Major Depressive Disorder (MDD) does not have a single cause. Instead, it
        is a <b>multifactorial condition</b> influenced by a combination of biological,
        psychological, genetic, and environmental factors. These factors interact in
        complex ways to alter mood regulation, stress response, and brain
        functioning, eventually triggering depression.
      </p>

      {/* 1. Biological and Neurochemical Factors */}
      <h2 className="disease-section-subt">
        1. Biological & Neurochemical Factors
      </h2>
      <p className="disease-section-text">
        The most widely accepted explanation for MDD involves disruptions in the
        brain’s chemical signaling systems. These include:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Neurotransmitter Imbalance:</b> Changes in serotonin, norepinephrine,
          and dopamine—key chemicals that regulate mood, motivation, and
          emotional stability.
        </li>
        <li>
          <b>HPA Axis Dysregulation:</b> Overactivity of the body's stress-response
          system (Hypothalamic–Pituitary–Adrenal axis) leading to high cortisol
          levels, which can worsen mood and impair brain function.
        </li>
        <li>
          <b>Brain Structure Changes:</b> Reduced volume in the <i>hippocampus</i>,
          altered activity in the <i>prefrontal cortex</i>, and increased
          hyperactivity of the <i>amygdala</i>.
        </li>
        <li>
          <b>Inflammation:</b> Elevated inflammatory markers (cytokines) have been
          associated with depressive symptoms in many patients.
        </li>
      </ul>

      {/* 2. Genetic Factors */}
      <h2 className="disease-section-subt">
        2. Genetic Contribution
      </h2>
      <p className="disease-section-text">
        Genetics play an important role in MDD, but they do not determine fate.
        Having a relative with depression increases risk, but no single gene
        “causes” the disorder. Instead, MDD results from the combined influence of
        many genes.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Family history:</b> First-degree relatives (parents or siblings) of a
          person with depression are 2–3 times more likely to develop it.
        </li>
        <li>
          <b>Serotonin Transporter Gene (5-HTTLPR):</b> A commonly studied genetic
          variant linked to increased vulnerability to stress and depression.
        </li>
        <li>
          <b>Polygenic Nature:</b> Multiple genes each add small contributions to
          overall risk.
        </li>
      </ul>

      <p className="disease-section-text">
        Importantly, genes only increase <i>susceptibility</i>. Environmental and emotional
        experiences often determine whether the disorder actually develops.
      </p>

      {/* 3. Psychological Factors */}
      <h2 className="disease-section-subt">
        3. Psychological & Personality Factors
      </h2>

      <p className="disease-section-text">
        Certain thinking styles and personality traits can make individuals more
        prone to depression, especially when combined with stress.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Negative Thinking Patterns:</b> Persistent self-criticism, pessimism,
          or hopelessness.
        </li>
        <li>
          <b>Low Self-Esteem:</b> Viewing oneself as inadequate or unworthy.
        </li>
        <li>
          <b>Perfectionism:</b> Setting unrealistically high standards and harsh
          self-judgment.
        </li>
        <li>
          <b>Rumination:</b> Overthinking problems and replaying negative events.
        </li>
        <li>
          <b>High Emotional Sensitivity:</b> Strong emotional reactions to stress or
          criticism.
        </li>
      </ul>

      {/* 4. Environmental Triggers */}
      <h2 className="disease-section-subt">
        4. Environmental & Life-Event Triggers
      </h2>

      <p className="disease-section-text">
        Stressful or traumatic experiences often act as triggers in people who are
        biologically or psychologically vulnerable. Common triggers include:
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Chronic Stress:</b> Work pressure, financial difficulties, caregiving
          responsibilities, or long-term relationship conflicts.
        </li>
        <li>
          <b>Trauma & Abuse:</b> Physical, emotional, or sexual abuse can increase
          long-term vulnerability to depression.
        </li>
        <li>
          <b>Major Life Changes:</b> Divorce, job loss, bereavement, academic failure,
          or relocation.
        </li>
        <li>
          <b>Social Isolation:</b> Lack of supportive relationships or feelings of
          loneliness.
        </li>
        <li>
          <b>Childhood Adversity:</b> Neglect, unstable family environments, or early
          parental loss significantly increase adult risk.
        </li>
      </ul>

      {/* 5. Medical & Lifestyle Factors */}
      <h2 className="disease-section-subt">
        5. Medical & Lifestyle-Related Factors
      </h2>

      <p className="disease-section-text">
        Physical health conditions and lifestyle habits can directly influence mood
        and contribute to the development of MDD.
      </p>

      <ul className="disease-section-text">
        <li>
          <b>Chronic Illnesses:</b> Diabetes, thyroid disorders, cancer, chronic pain,
          and cardiovascular disease increase depressive risk.
        </li>
        <li>
          <b>Substance Use:</b> Alcohol, tobacco, and recreational drugs can worsen
          mood regulation and disrupt brain chemistry.
        </li>
        <li>
          <b>Hormonal Changes:</b> Pregnancy, postpartum changes, menopause, and
          thyroid dysfunction.
        </li>
        <li>
          <b>Sleep Disturbance:</b> Sleep deprivation or irregular sleep cycles
          significantly raise the risk of depressive episodes.
        </li>
        <li>
          <b>Poor Diet & Physical Inactivity:</b> Lack of nutrients, exercise, and
          sunlight can impact serotonin production and energy levels.
        </li>
      </ul>

      {/* 6. Stress-Diathesis Model */}
      <h2 className="disease-section-subt">
  6. The Stress–Diathesis Model
</h2>

<p className="disease-section-text">
  One of the most widely accepted explanations for Major Depressive Disorder
  is the <b>stress–diathesis model</b>. It suggests that depression occurs when the
  following two factors combine:
</p>

<ul className="disease-section-text">
  <li>
    <b>Vulnerability (Diathesis) :</b> a biological or psychological predisposition
    that makes a person more sensitive to developing depression.
  </li>
  <li>
    <b>Stress : </b>challenging life events such as trauma, loss, conflict, or
    ongoing pressure.
  </li>
</ul>

<p className="disease-section-text">
  These two factors <b>interact</b>, meaning that neither vulnerability nor stress
  alone is usually enough, but together they can trigger the onset of MDD.
</p>

<p className="disease-section-text">
  In simple terms: <i>People with higher vulnerability need less stress to develop
  depression, while people with lower vulnerability need more stress.</i>
</p>


    </div>
  );
};

export default CausesMDD;
