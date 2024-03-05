"use client";
import { Tabs } from "./ui/tabsEffect.tsx";
import React from "react";

export function SDGTabs() {
  const tabs = [
    {
      title: "No Poverty",
      value: "No Poverty",
      content: (
        <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
          <p>SDG 1:  End poverty in all its forms everywhere</p>
          <p className="text-2xl font-light pt-10">There is a concerning trend in global poverty, exacerbated by the COVID-19 pandemic, which has halted decades of progress in poverty reduction. It predicts that by 2030, approximately 575 million people will still be living in extreme poverty, particularly challenging in sub-Saharan Africa and conflict-affected regions. Despite some expansion in social protection during the pandemic, over 4 billion people globally remain without adequate coverage. Historical trends suggest only one-third of countries will halve their national poverty rates by 2030, and social protection coverage remains insufficient for various vulnerable groups. To effectively combat poverty, there's a call for increased action and investment in job creation and social services, emphasizing the need to redirect public resources toward essential services.</p>
        </div>
      ),
    },
    {
      title: "Zero Hunger",
      value: "Zero Hunger",
      content: (
        <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
          <p>SDG 2:  End hunger, achieve food security and improved nutrition and promote sustainable agriculture</p>
          <p className="text-xl font-light pt-10">There is an escalating issue of hunger and food insecurity worldwide, with the number of affected individuals rising steadily since 2015, exacerbated by factors such as the COVID-19 pandemic, conflict, climate change, and inequality. Despite global efforts, projections suggest that by 2030, approximately 670 million people will still face hunger, equal to the number in 2015. Challenges persist in reducing malnutrition among children, necessitating a 2.2-fold increase in the current rate of reduction in stunting to meet global targets. Urgent action is required to transform food systems, enhance food security, and invest in sustainable agricultural practices to achieve zero hunger by 2030. Additionally, various targets address issues such as the increase in food insecurity due to the pandemic, the stagnation in reducing overweight children, declining investments in agriculture, the elimination of agricultural export subsidies, and the ongoing challenge of fluctuating food prices, especially in sub-Saharan Africa and least developed countries.</p>
        </div>
      ),
    },
    {
      title: "Good health and Well-being",
      value: "Good health and Well-being",
      content: (
        <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
          <p>SDG 3:  Ensure healthy lives and promote well-being for all ages</p>
          <p className="text-2xl font-light pt-10">It is noted that the challenges facing the achievement of Sustainable Development Goal 3 (SDG3), exacerbated by the pandemic and ongoing crises, lead to a rise in health inequalities and threatening universal health coverage. Notably, there's an alarming increase in the number of un- or under-vaccinated children, especially in low- and middle-income countries, alongside a slow decline in maternal mortality rates and under-5 mortality rates, with urgent efforts required to meet the 2030 targets. Progress towards ending communicable diseases remains off track, with setbacks observed in reducing HIV infections, TB, and malaria cases. Additionally, there's a need to bolster health systems and address the shortage of health workers, especially in regions with high disease burdens. Efforts to enhance family planning services and childhood vaccinations also require immediate attention to ensure universal access to healthcare services.</p>
        </div>
      ),
    },
    {
      title: "Quality Education",
      value: "Quality Education",
      content: (
        <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
          <p>SDG 4:  Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</p>
          <p className="text-2xl font-light pt-10">The existing challenges in achieving education targets, is worsened by the COVID-19 pandemic, which has further disrupted progress. Without additional measures, only a small fraction of countries will meet Sustainable Development Goal 4 (SDG4) by 2030, leaving millions of children without access to quality education and lacking essential numeracy and literacy skills. Despite some improvements in school completion rates, progress has slowed, and learning levels have stagnated, with documented losses due to pandemic-related school closures. Access to pre-primary education remains limited, and participation in education and training for youth and adults is insufficient. Basic school infrastructure and teacher qualifications are also highlighted as areas needing attention. Reimagining education systems and prioritizing education financing are crucial for achieving SDG4 effectively.</p>
        </div>
      ),
    },
    {
      title: "Gender Equality",
      value: "Gender Equality",
      content: (
        <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
          <p>SDG 5:  Achieve gender equality and empower all women and girls</p>
          <p className="text-2xl font-light pt-10">The illustrated stark reality that the world is far from achieving gender equality by 2030, with none of the 18 indicators being on track to meet targets. Progress in closing gender gaps in various areas, such as legal protection, representation in leadership roles, and ending child marriage, remains slow, with estimations suggesting it could take centuries to achieve parity. The COVID-19 pandemic has exacerbated existing gender inequalities, particularly in healthcare, education, and economic opportunities. Comprehensive policy reforms and strong political leadership are deemed essential to dismantle systemic barriers to achieving Sustainable Development Goal 5 (SDG5) and advancing gender equality globally.</p>
        </div>
      ),
    },
    {
        title: "Clean Water and Sanitation",
        value: "random2",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 6:   Ensure availability and sustainable management of water and sanitation for all</p>
            <p className="text-2xl font-light pt-10">Despite some progress, billions of people still lack access to safe water, sanitation, and hygiene, with water scarcity worsening due to conflicts and climate change. Achieving universal coverage by 2030 requires substantial increases in current rates of progress, particularly for drinking water, sanitation, and hygiene. Challenges include water pollution, wastewater treatment, and water use efficiency, compounded by inadequate frameworks for sustainable water management and decreasing ODA disbursements to the water sector. Addressing these issues necessitates boosting infrastructure investment, enhancing cross-sectoral coordination, and prioritizing climate change adaptation efforts to achieve Sustainable Development Goal 6 (SDG6).</p>
          </div>
        ),
      },
      {
        title: "Decent Work and Economic Growth",
        value: "random3",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 8: Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all</p>
            <p className="text-2xl font-light pt-10">Progress toward achieving SDG8 faces significant challenges exacerbated by various crises including the aftermath of COVID-19, trade tensions, and the conflict in Ukraine. These factors are predicted to slow down global economic growth, jeopardizing advancements in equitable pay and decent work. While global real GDP per capita increased in 2021, forecasts indicate a slowdown in growth, particularly impacting LDCs. Informal employment remains a prevalent issue with around 2 billion workers lacking social protection, and productivity growth has been declining globally. The global unemployment rate has slightly decreased but remains a concern, especially among young people, with nearly one in four not in education, employment, or training. Additionally, child labor has increased, and while tourism's economic contribution is recovering, challenges persist in achieving sustainable development goals related to finance access and digital solutions. Addressing these issues will require comprehensive reforms in the financial system to tackle rising debts and promote equitable pay and decent work for all.</p>
          </div>
        ),
      },
      {
        title: "Industry, Inovation, and Infrastructure",
        value: "random4",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 9:  Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation</p>
            <p className="text-2xl font-light pt-10">The recovery of the manufacturing industry from COVID-19 is varied, with high-income regions reaching record levels of manufacturing value added (MVA) per capita in 2022, while levels in least developed countries (LDCs) remained close to the 2015 baseline. Higher-technology industries recovered faster, indicating the importance of promoting innovation and technology transfer. To achieve Goal 9 by 2030, it is crucial to support LDCs, invest in advanced technologies, reduce carbon emissions, and enhance global mobile broadband access. Despite global manufacturing employment returning to pre-pandemic levels in 2021, the share of manufacturing employment in total employment continued to decline. Additionally, while global CO2 emissions reached a new all-time high in 2022, access to mobile broadband, particularly in Sub-Saharan Africa and LDCs, remains a challenge.</p>
          </div>
        ),
      },
      {
        title: "Reduced Inequalities",
        value: "random5",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 10:  Reduce inequality within and among countries</p>
            <p className="text-2xl font-light pt-10">Before the COVID-19 pandemic, the incomes of the bottom 40% of the population were increasing faster than the national average in many countries, contributing to a reduction in income inequality. However, the pandemic and subsequent uneven recoveries across regions threaten to reverse this trend and exacerbate global inequality. Record numbers of people are fleeing conflicts and economic hardship, with one in 251 people worldwide being a refugee by mid-2022, the highest proportion ever documented. Achieving SDG 10 requires addressing the root causes of wage disparities and access to resources within and between countries. Despite some progress, challenges remain, such as the persistence of a high share of people living below half the median income in many countries and a decline in the share of economic output earned by workers over the past decade. Additionally, the global average cost of sending remittances remains high, exceeding the SDG target.</p>
          </div>
        ),
      },
      {
        title: "Sustainable Cities and Communities",
        value: "random6",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 11: Make cities and human settlements, inclusive, safe, resilient, and sustainable</p>
            <p className="text-2xl font-light pt-10">The COVID-19 pandemic has led to significant shifts in migration patterns, impacting urban areas disproportionately and hindering progress towards sustainable cities. The number of people living in slums or slum-like conditions in urban areas has been steadily growing, exacerbating the housing crisis, particularly in developing countries. Access to public transportation remains inadequate for over half of the world's urban population, and the physical expansion of cities outpaces population growth, highlighting challenges in urban planning. Waste management also remains a concern, with a significant portion of municipal solid waste left uncollected, contributing to pollution and health risks. To achieve SDG 11, efforts must focus on strengthening urban planning capacities, improving public transportation access, enhancing waste management systems, and increasing the proportion of open public spaces in cities. Additionally, increasing the number of countries with local governments equipped with disaster risk reduction strategies is crucial for building resilience in urban areas.</p>
          </div>
        ),
      },
      {
        title: "Responsible Consumption and Production",
        value: "random7",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 12: Ensure sustainable and production patterns</p>
            <p className="text-2xl font-light pt-10">The world is falling short of its target to reduce per-capita food waste and losses by 2030, exacerbated by the disruptions caused by the COVID-19 pandemic, which have altered consumption and production patterns. There is an urgent need for responsible consumption and production practices to be integrated into the pandemic recovery efforts, alongside accelerating the decoupling of economic growth from resource use. While reporting on corporate sustainability has increased significantly since the start of the SDG period, there is room for improvement, particularly in reporting activities contributing to the SDGs. Key policies supporting the transition to sustainable practices have been implemented, but there are regional disparities in reporting and progress. Despite efforts, post-harvest food losses remain stagnant, far from the goal of halving them by 2030. Additionally, fossil fuel subsidies have risen, posing a challenge to sustainability efforts. To achieve SDG12, robust policies promoting sustainable practices and reducing resource use are essential.</p>
          </div>
        ),
      },
      {
        title: "Climate Action",
        value: "random8",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 13:  Take urgent action to combat climate change and its impacts</p>
            <p className="text-2xl font-light pt-10">The world faces an imminent climate crisis, with current actions insufficient to prevent catastrophic impacts. Urgent and transformative measures are needed within this decade to significantly reduce greenhouse gas emissions across all sectors to meet the 1.5°C target. Failure to act risks the lives of billions of people, leading to worsening heatwaves, droughts, floods, wildfires, sea-level rise, and famines. Emissions must be nearly halved by 2030 to combat climate change effectively. Despite some progress in disaster risk reduction strategies and climate finance, global temperatures have already exceeded 1.1°C, and emissions continue to rise, surpassing pre-industrial levels. Furthermore, climate change education remains inadequate, with a significant portion of national curriculum frameworks lacking mention of climate change, highlighting the urgent need for comprehensive climate action and education.</p>
          </div>
        ),
      },
      {
        title: "Life Below Water",
        value: "random9",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 14:  Conserve and sustainably use the oceans, seas and marine resources for sustainable development</p>
            <p className="text-2xl font-light pt-10">The health of the ocean, the world's largest ecosystem, is in danger due to rising acidification, eutrophication, declining fish stocks, and plastic pollution. Despite some progress in expanding marine protected areas and combating illegal fishing, more concerted efforts and acceleration are needed to advance towards SDG14. Urgent and coordinated global action is required to protect the ocean, which continues to be endangered by destructive trends. The UN Ocean Conference 2025 and other events are planned to address these issues, including the Civil Society and Other Stakeholders Forum-SIDS4 4th International Conference on Small Island Developing States and the Second Preparatory Committee Meeting for the SIDS4 Conference. Publications and reports emphasize the need for win-win synergies between tackling climate and sustainable development crises, such as the expert group report "Analysing Climate and SDG Synergies, Aiming to Maximize Action Impact" and the video "Ocean 20: Building a Sustainable Blue Economy". These resources highlight the importance of a unified approach to protect the ocean and promote sustainable development.</p>
          </div>
        ),
      },
      {
        title: "Life on Land",
        value: "random10",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 15:   Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss</p>
            <p className="text-2xl font-light pt-10">The global community faces a critical triple planetary crisis encompassing climate change, pollution, and biodiversity loss, with escalating trends in forest loss, land degradation, and species extinction posing grave threats to both the planet's health and human well-being. Despite some progress in sustainable forest management, deforestation driven primarily by agricultural expansion remains a pressing concern, while efforts to conserve marine and terrestrial key biodiversity areas (KBAs) face challenges due to uneven regional coverage. Land degradation, exacerbated by human activities and climate change, imperils food and water security for 1.3 billion people, with projections indicating further degradation without intervention. Species extinction rates continue to rise, with the Red List Index deteriorating steadily, underscoring the urgency to halt biodiversity loss. Progress in implementing measures like the Nagoya Protocol and addressing invasive alien species is noted, yet significant gaps persist in incorporating biodiversity values into national frameworks and achieving Aichi Biodiversity Targets, highlighting the need for concerted global action and transformative shifts in human-nature relationships to meet Goal 15 objectives.</p>
          </div>
        ),
      },
      {
        title: "Peace, Justice, and Strong Institutions",
        value: "random11",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 16:  Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels</p>
            <p className="text-2xl font-light pt-10">The pursuit of Sustainable Development Goal 16, aimed at fostering peace, justice, and strong institutions, faces significant challenges as ongoing violent conflicts worldwide disrupt global efforts for peace and stability. With one-quarter of humanity residing in conflict-affected regions and a record-breaking 100 million individuals forcibly displaced as of May 2022, the accessibility of justice, basic services, and legal protections is severely compromised, exacerbating structural injustices and inequalities. Rising homicides, especially in 2021, partly linked to COVID-19 economic repercussions and increased socio-political violence, underscore the urgency of addressing escalating violence. The United Nations' alarming report of a 53% increase in civilian killings during armed conflicts in 2022, with disproportionate impacts on women and heavy weapon use, highlights the urgent need for effective conflict resolution mechanisms. Moreover, persistent gender disparities in safety perceptions and widespread violence against children at home further emphasize the imperative for comprehensive interventions. While COVID-19 measures temporarily disrupted trafficking dynamics, efforts to combat trafficking require adaptation to changing circumstances. Data gaps persist concerning sexual violence against children and budget credibility, indicating the need for enhanced monitoring and reporting mechanisms. Youth underrepresentation in governance structures, coupled with widespread under-registration of births, underlines the necessity of inclusive policies to ensure universal access to justice and uphold human rights. Despite progress in adopting access to information laws globally, concerted action is needed to bolster institutions, restore trust, and foster peaceful and inclusive societies in line with SDG 16 objectives.</p>
          </div>
        ),
      },
      {
        title: "Partnerships for the Goals",
        value: "random12",
        content: (
          <div className="w-full overflow-auto relative h-full border-2 border-white rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-700 to-neutral-900">
            <p>SDG 17:  Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development</p>
            <p className="text-2xl font-light pt-10">While there has been progress in development aid, remittances, and access to technology, achieving SDG 17 (Partnerships for the Goals) faces challenges. Funding for development remains insufficient, especially for low-income countries, and international cooperation is hampered by geopolitical tensions and nationalism. Though internet access and trade have grown, significant gaps persist, particularly for developing countries. Despite increases in funding for data and statistics, long-term challenges hinder progress.</p>
          </div>
        ),
      } 
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}