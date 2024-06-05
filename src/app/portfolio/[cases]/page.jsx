import React from "react";
import Hero from "./sections/Hero";
import ClientAndInd from "./sections/ClientAndInd";
import ProjectGoals from "./sections/ProjectGoals";
import BusinessChlanges from "./sections/BusinessChallenges";
import Soltions from "./sections/Soltions";
import KeyFeatures from "./sections/KeyFeatures";
import TechStack from "@/app/about/sections/TechStack";
import OurImpact from "./sections/OurImpact";
import OurWork from "@/app/component/sections/OurWork";
import TestimonialsN from "@/app/component/sections/TestimonialsN";
import Footer from "@/app/component/sections/Footer";

const page = ({ params }) => {
  console.log("path", params.cases);

  const heroDataMap = {
    mbux: [
      {
        // logo: "/potfolio/mbenz/hero/logo.png",
        title: "Gesture Recognition based User Experience",
        description:
          "Enhance interaction between driver and car by detecting driver hand gesture for superior level driver experience with Mercedes Benz User Experience - MBUX System.",
        industry: "Automotive OEM",
        year: "2021",
      },
    ],
    bosch: [
      {
        logo: "/potfolio/bosch/hero/logo.png",
        title: "Vulnerable Roadside User Protection System",
        description:
          "Accurate, low footprint detection with vulnerable roadside users (VRUs) and road signs covered in the Bosch-Daimler autonomous driving initiative.",
        industry: " Automotive Tier 1",
        year: "2022",
      },
    ],
    "federated-learning": [
      {
        // logo: "/potfolio/bosch/hero/logo.png",
        title: "Federated Learning on Edge",
        description:
          "Revolutionizing privacy and efficiency in data processing with Federated Learning (FL) on edge devices, enabling real-time, secure analytics in several key sectors.",
        industry: " Automotive OEM",
        year: "2022",
      },
    ],

    "fitness-pose-estimation": [
      {
        // logo: "/potfolio/bosch/hero/logo.png",
        title:
          "Posture Estimation: Harnessing ML for Personalized Physiotherapy",
        description:
          "Empowering exercise perfection with AI-driven real-time pose estimation, providing interactive visual feedback for correct posture and effective workouts.",
        industry: "Healthcare",
        year: "2022",
      },
    ],

    sqlwizard: [
      {
        // logo: "/potfolio/bosch/hero/logo.png",
        title: "Secure Text-to-SQL Interface",
        description:
          "Transforming data access with a natural language interface that converts queries into SQL, simplifying database interaction.",
        industry: "FMCG Retail",
        year: "2023",
      },
    ],

    "loneliness-assistant": [
      {
        // logo: "/potfolio/bosch/hero/logo.png",
        title: "Loneliness Assistant",
        description:
          "Personalised assistant designed to empthatize with humans and serves as a close companion by engaging in an emotionally deep manner.",
        industry: "Healthcare",
        year: "2021",
      },
    ],

    "fashion-framework": [
      {
        // logo: "/potfolio/bosch/hero/logo.png",
        title: "Indian Fashion Insights framework",
        description:
          "Pioneering deep learning in fashion with a custom Indian dataset for advanced trend forecasting and targeted consumer insights.",
        industry: "Fashion Retail",
        year: "2021",
      },
    ],

    "banking-infra": [
      {
        // logo: "/potfolio/bosch/hero/logo.png",
        title: "AI Banking Infra Monitoring",
        description:
          "Enhancing banking with AI: Advanced data analytics for customer insights and predictive modeling, streamlined with efficient application monitoring.",
        industry: "Fintech",
        year: "2020",
      },
    ],

    rag: [
      {
        // logo: "/potfolio/bosch/hero/logo.png",
        title: "RAG based Personal Diary",
        description:
          "Smart, diary-like system that effortlessly organizes and retrieves your daily activities and information with cutting-edge Retrieval-Augmented Generation techniques.",
        industry: "Tech",
        year: "2020",
      },
    ],
    // Add more paths and corresponding data as needed
  };

  const clientAndRole = {
    mbux: [
      {
        description:
          "A premier German OEM, recognized as a market leader that places quality above all, and epitomizes the pinnacle of luxury and innovation in the automotive sector. Known for its relentless pursuit of excellence, the brand has consistently introduced pioneering technologies and luxurious vehicles, setting the gold standard for safety, performance, and design.",
        industry: "Automotive OEM",
        businessType: "Enterprise",
        services: "Research, Development & Deployment",
        role: "FastCode partnered with German Automotive OEM to redefine the way drivers interact with their vehicles, through an intelligent system that provides a deeply personalised user experience via body pose and gesture recognition.",
      },
    ],

    bosch: [
      {
        description:
          "A leading player in the Automotive space, based in Germany, renowned for its innovation, reliability and quality. As a top global supplier, it has significantly impacted automotive technology with its advancements in fuel injection systems, safety features, and electric drives, affirming its pivotal role as a major contributor to the automotive sector's development.          ",
        industry: " Automotive Tier 1",
        businessType: "Enterprise",
        services: "Research & Development",
        role: "As part of a collaborative venture for robotaxi development, involving two leading automotive companies, FastCode developed an advanced pedestrian protection system, leveraging radar, ultrasonic and video sensors for the early identification of Vulnerable Roadside Users (VRUs), to assist drivers and inform advanced automated driving systems.",
      },
    ],

    "federated-learning": [
      {
        description:
          "A premier German OEM, recognized as a market leader that places quality above all, and epitomizes the pinnacle of luxury and innovation in the automotive sector. Known for its relentless pursuit of excellence, the brand has consistently introduced pioneering technologies and luxurious vehicles, setting the gold standard for safety, performance, and design.",
        industry: "Automotive OEM",
        businessType: "Enterprise",
        services: "Research, Development & Deployment",
        role: "FastCode implemented Federated Learning (FL) on edge devices with limited computing capabilities, by deploying efficient, lightweight local machine learning models. These models process data on-device, enhancing privacy and security, while periodically updating a central global model, enabling comprehensive learning without exposing raw data. This approach was specifically applied to predict the battery state of health(SOH) in electric vehicles, optimizing performance and longevity.        ",
      },
    ],

    "fitness-pose-estimation": [
      {
        description:
          "An app-based healthcare company leveraging machine learning to identify postural problems, suggest appropriate physiotherapy exercises, and give users real-time feedback on maintaining correct posture during these exercises.",
        industry: "Healthcare",
        businessType: "Startup",
        services: "Development",
        role: "FastCode collaborated with the client for training and testing the machine learning models aimed at identifying posture, in addition to developing the mobile application, ensuring the system's functionality.        ",
      },
    ],

    sqlwizard: [
      {
        description: "An egg retail startup in India.",
        industry: "FMCG Retail",
        businessType: "Startup",
        services: " Development & Deployment        ",
        role: "FastCode’s contribution lies in developing an LLM-based interface that effectively transforms natural language into SQL queries, bridging the gap between conversational input and database interactions.",
      },
    ],

    "loneliness-assistant": [
      {
        description:
          "With an increasing number of individuals seeking fitness and wellness through exercise, the necessity for correct form and posture during workouts has never been more important. Incorrect posture not only reduces the efficacy of exercises but also elevates the risk of injuries. There is a substantial need for a solution that can guide users in real-time to ensure their exercise movements are accurate, a tool that can provide real-time, accurate feedback on their posture during various exercises, especially in the absence of a personal trainer.",
        industry: "Healthcare",
        businessType: "Enterprise/Startup",
        services: "Development & Deployment",
        role: "FastCode is developing an emotionally intelligent digital assistant to address loneliness and disconnection in the digital era. The project focuses on understanding and responding to emotional cues to provide support and alleviate feelings of isolation.",
      },
    ],

    "fashion-framework": [
      {
        description:
          "The client is widely acknowledged as a leading institution in India for fashion education, providing comprehensive courses in design, management, and technology. Its influential role continues to significantly shape the fashion industry, both in India and internationally.",
        industry: "Fashion Retail",
        businessType: "Institute",
        services: "Research & Development",
        role: "FastCode developed a novel deep learning-based approach to perform attribute level multi-label classification of a specially curated Indian fashion dataset. This initiative paves the way for prediction of fashion trends, and consumer behavior, in the Indian market.",
      },
    ],

    "banking-infra": [
      {
        description:
          "An award-winning fintech company from India, serving as a global solution provider for digital banking, catering to over 60 banks and financial institutions worldwide.",
        industry: "Fintech",
        businessType: "Enterprise/Startup",
        services: "Development & Deployment",
        role: "FastCode deployed AI/ML technologies to monitor and analyze banking applications and IT infrastructure, aiming to proactively detect and address operational bottlenecks, thereby optimizing overall system performance.",
      },
    ],

    rag: [
      {
        description:
          "In our fast-paced world, information overload is a common challenge. To address this, we recognized the need for a digital assistant that functions like a personal diary, intuitively organizing and retrieving information. This need is particularly crucial for those who manage extensive data daily, requiring quick and accurate access to past entries. Our project, a Retrieval-Augmented Generation system, is designed to act as a personal, intelligent archive. It not only records daily activities and information but also enables efficient retrieval of past entries, ensuring that crucial information is always at your fingertips. This system is especially beneficial for professionals and individuals who need to track and access detailed information over long periods.",
        industry: "Tech",
        businessType: "Startup",
        services: "Development & Deployment",
        role: "Our project, a Retrieval-Augmented Generation system, serves as a smart, personalized archive. It not only logs daily activities and information but also facilitates swift retrieval of past records, ensuring essential information is readily accessible when needed.",
      },
    ],
    // Add more paths and corresponding data as needed
  };

  const projGoals = {
    mbux: [
      {
        details:
          "Install an interior camera system behind the rearview mirror to enhance user experience, facilitating gesture-based controls for toggling reading lights and accessing favourite features through specific hand poses, improving interaction for both driver and passenger.",
      },
      {
        details:
          "Foster OEM's in-house expertise by starting with our consultancy, gradually building a robust 200 member team to achieve self-sufficiency within 4 years, before our strategic exit.",
      },
    ],

    bosch: [
      {
        details:
          "Early detection of VRUs, in the exterior of the vehicle within the hazard range. The system would alert the driver or trigger automatic emergency braking if there's no timely response.",
        details:
          "Segmentation of VRUs into specific categories such as school guards, police officers, construction workers, cyclists, among others, facilitating context-aware Advanced Driver Assistance Systems (ADAS).",
        details:
          "Estimating the intentions of VRUs through stable pose estimates, crucial for development of future automated driving systems. E.g. - Will the person at the crosswalk actually cross?",
      },
    ],

    "federated-learning": [
      {
        details:
          "Validate the model using a public dataset, to ensure its efficacy.",
        details:
          "Reproduce the results within the client's specific environment, using their own data.",
        details: "Integrate and deploy the model on test cars.",
      },
    ],

    "fitness-pose-estimation": [
      {
        details:
          "Postural Assessment: Provide users with a straightforward, self-directed assessment to pinpoint postural irregularities.",
        details:
          "Enhance Exercise Effectiveness: Ensure users perform exercises with correct form and posture, maximizing exercise benefits and minimizing risk of injury. ",
        details:
          "Real-Time Feedback: Provide immediate, accurate feedback on posture during exercises to guide users.",

        details:
          "Support Rehabilitation and Functional Training: Offer guidance for therapeutic routines, aiding users in rehabilitation and enhancing functional fitness.",
      },
    ],

    sqlwizard: [
      {
        details:
          "Develop a privacy-preserving text2sql system that accepts natural language queries and database schema, outputting the corresponding SQL query.",
        details:
          "Execute the generated SQL queries automatically on the existing database to retrieve the required results.",
        details:
          "Adapt the same system for use with databases beyond MySQL, ensuring broad applicability.",
      },
    ],

    "loneliness-assistant": [
      {
        details:
          "Integrate Open-Source Technology: Continuously update our LLM with open-source innovations to enhance emotional engagement and maintain technological relevance.",
        details:
          "Enhance Emotional Intelligence: Refine the system's responsiveness to a diverse array of emotional cues, bolstering empathy and support.",
        details:
          " Develop Personalized Interaction: Improve the LLM’s adaptive persona to customize interactions based on individual user needs, ensuring a personalized experience.",
      },
    ],

    "fashion-framework": [
      {
        details:
          "Dataset Creation: Construct a bespoke dataset from the ground up, sourcing images from social media, e-commerce sites, and various online resources.",
        details:
          "Data Annotation: Meticulously annotate the dataset to capture a broad range of attributes including design elements, fabric types, colors, and patterns.",
        details:
          "Model Development: Engineered a specialized two-stage deep learning model that integrates a detection component with a classifier model ensemble for enhanced accuracy.",
        details:
          " Insight Generation: Produce authentic, geographically and temporally specific fashion insights, to empower the Indian textile, fashion, and retail industries in developing products tailored for the Indian market.",
      },
    ],

    "banking-infra": [
      {
        details:
          "Create Monitoring Platform: Develop a comprehensive platform featuring custom dashboards for real-time log analysis, enhancing oversight of banking and finance applications.",
        details:
          " Improve Detection and Resolution: Implement advanced alerting systems to ensure timely detection and effective resolution of performance issues in applications and IT infrastructure.",
      },
    ],

    rag: [
      {
        details:
          "Seamlessly log user journal entries through voice transcription, ensuring easy and efficient documentation of daily activities and thoughts.",
        details:
          "Offer a fully secure service by storing all data in the user's personal cloud storage, such as Google Drive, to maintain privacy and control.",
        details:
          "Function as a digital clone, enabling users to index and search through their recorded thoughts, which may include audio clips, photos, and location data.",
        details:
          "Generate meaningful insights, including summaries of thoughts and mood indicators, and assist with tasks like drafting emails and managing to-do lists.",
      },
    ],
  };

  const businessChallenge = {
    mbux: [
      "The system had to be designed to operate on low-power hardware to mitigate heat emission, as the Electronic Control Unit (ECU) was located in a part of the vehicle that could not dissipate additional heat efficiently.",
      "Training the model to recognize a wide range of activities across diverse demographics, locations, and conditions (including driving, weather, and daylight variations) with over Six Sigma accuracy, ensuring reliability in at least 99,999 out of 100,000 instances.",
    ],

    bosch: [
      "Given that VRUs are crucially significant on the road, success is imperative. Achieving accuracy 99,999 times out of 100,000 is insufficient; the system must function flawlessly at all times, without exception. ",
      "The VRU detector operates alongside various systems such as traffic sign and light detection, utilizing a backbone network with specialized modules designed for multi-task learning. This setup requires coordination with 15 different teams to ensure that updates to the model do not adversely affect their outputs. Retraining, versioning, and testing within this framework present significant challenges.",
      "In high-speed scenarios, vehicles must detect VRUs from afar to allow safe deceleration and stopping. Despite using high-resolution cameras, the challenge arises because objects at great distances appear significantly smaller (less than 50px). Balancing the demands of swift detection, significant distance, and camera constraints poses a complex engineering challenge.",
    ],

    "federated-learning": [
      "Data Privacy Concerns: Due to GDPR restrictions, sensitive battery data, which can be personally identifiable and could influence insurance premiums, cannot be sent to servers. This necessitates on-device training to ensure privacy.",
      "Limited Computing Resources: The project involves using micro-controllers with constrained computational memory, requiring the development of very small neural networks with fewer than 100 trainable parameters.",
      "Software Limitations: Neural network code must be written from scratch in C, as these micro-controllers do not support many C packages.",
      "Code Safety and Compliance: Extensive code validation, and compliance with various standards like MISRA (embedded coding in automotives), SPICE(software), and ASIL(automotive), are essential to prevent system lock-ups and ensure safety",
    ],

    "fitness-pose-estimation": [
      "Accuracy of Pose Estimation: Developing a machine learning model capable of accurately recognizing and analyzing human body motion and posture across a diverse set of exercises and body types. ",
      "User Engagement and Retention: Ensuring the solution is user-friendly and engaging enough to keep users motivated and consistently using the tool.",
      "Data Privacy and Security: Safeguarding user data, especially sensitive information derived from analyzing users' physical activity, conformant to HEPA guidelines.",
    ],

    sqlwizard: [
      "Data privacy is a critical concern. Existing tools that deliver similar functionalities compromise security by exposing database content to LLMs, to generate and execute SQL queries.",
      "Data size can also be an area of concern once it becomes too large.",
    ],

    "loneliness-assistant": [
      " Resource Intensive: Address the high costs associated with both data procurement and product development, especially in securing and processing large datasets.",
      "Data Curation: Overcome the tedious yet critical process of data curation and annotation, and manage the difficulties in finding vendors willing to handle sensitive datasets.",
      "Computational Demands: Tackle the high GPU resource requirements necessary for training sophisticated chatbot models, ensuring efficient resource allocation and optimization.",
    ],

    "fashion-framework": [
      "Leveraging a dataset encompassing approximately 125 categories, including 15 types of accessories, using around 600,000 unique images for model training.",
      "Providing annotations for each image at both the category and attribute levels, with special attention to unique cases such as sarees and one-piece garments.",
      "Implementing robust detection capabilities for multiple accessories across various scenarios.",
    ],

    "banking-infra": [""],

    rag: [
      "Ensuring the highest level of privacy for the intimate act of journaling by utilizing the user’s own Google Drive, with limited app access permissions.",
      "Overcoming inconsistencies in native Speech-to-Text functionality, especially on Android, where developers face challenges in recording sound and transcribing simultaneously.",
    ],
  };

  const solutions = {
    mbux: [
      `Leveraging our expertise in Computer Vision, FastCode developed a cutting-edge solution for multimodal human pose estimation using heatmaps. Our efforts were focused on embedding this technology into vehicles, effectively bringing on-board intelligence to life. Achieving this required a dramatic reduction in the model's size—compressing it by over 25,000 times—without compromising accuracy.`,
      `The implementation of this technology has revolutionized how drivers and passengers interact with the vehicle. It introduced a more intuitive way of interacting with the car's systems, such as using gestures to control menus, close doors, and adjust the rearview mirrors by simply looking in the desired direction.`,
    ],

    bosch: [
      "FastCode developed a system for VRU detection and protection, combining radar, ultrasonic sensors and cameras, enabling prompt braking or maneuvering to avert pedestrian collisions. Upon evasive action initiation, it activates steering support and alerts drivers within half a second, processing accident scenarios in just 5 milliseconds for maximum safety.",
      "Enhanced radar sensors, with advanced signal processing, accurately detect objects like pedestrians and cyclists, even in limited visibility or adverse weather, by analyzing their direction and speed relative to the vehicle. This early detection capability enables the system to alert the driver or automatically engage emergency braking, aiming to prevent collisions or significantly lower impact speeds, thus reducing serious injury risks.",
    ],

    "federated-learning": [""], //not defined

    "fitness-pose-estimation": [
      "The system harnesses machine learning, notably temporal video analysis, to offer real-time posture correction. Trained on extensive data, collected and annotated in-house, it accurately identifies human anatomical and motion details, enabling precise body landmark tracking and posture adjustment.",
    ],

    sqlwizard: [
      "We developed a system that processes natural language queries and database schemas as input into an LLM, which then generates the corresponding SQL query. This query is executed in the backend to produce the desired result. Key features include:",
    ],

    "loneliness-assistant": [
      "In an era marked by digital pervasiveness, genuine human connection has become a rarity, heightening the sense of loneliness and disconnection among individuals. Recognizing this challenge, Fast Code AI has embarked on creating an emotionally intelligent digital assistant designed to mitigate these feelings by providing companionship and empathetic interaction.",
    ],

    "fashion-framework": [
      "FastCode developed a highly accurate detection model tailored for traditional Indian ethnic garments, achieving 99% accuracy in identifying sarees and one-piece outfits. This model is part of a broader high precision, low latency prediction platform that efficiently processes and interprets fashion data.",

      "The system incorporates a sophisticated multihead deep learning architecture that supports concurrent training on multiple clothing attributes. This architecture uses a custom loss function to enhance model accuracy, effectively reducing the need for multiple models to just one. Additionally, a finely-tuned YoloV7 model within the data preprocessing pipeline ensures the accurate detection of individuals in various attire types. The model excels in fine-grained attribute classification by incorporating localized attention through on-body keypoints, resulting in heightened precision in identifying clothing details.",

      "For accessories, we implemented a unified accessory flagger. This single model adeptly identifies all accessories present in an image, streamlining accessory detection across various scenarios. The platform also compiles comprehensive insights from all processed and inferred data, supporting the creation of mood boards and storyboards for detailed fashion analysis.",
    ],

    "banking-infra": [""],

    rag: [
      "Our team has developed an innovative Retrieval-Augmented Generation system that marries the intuitive ease of a personal diary with the robust capabilities of modern AI. This system transforms the traditional journaling experience, integrating cutting-edge technology to enhance user interaction and data management.",
    ],
  };

  const keyFeatures = {
    mbux: [
      {
        description:
          "A key feature of our solution is the ability to distinguish between various gestures made by drivers and passengers, enhancing the overall user experience.",
        points: [
          "Activating vehicle functions via hand gestures, applying a 3D Convolutional Neural Network (3D-CNN) and Gated Recurrent Unit (GRU) to analyze video frames and extract spatio-temporal features.",
          "Advanced airbag deployment control system, utilizing a processing unit equipped with Long Short Term Memory (LSTM) neural network architecture, analyzes images to determine and predict the future position and orientation of the occupant's head.",
        ],
        refrances: [
          "1 -  Cholakkal Hisham , Arjun Jain, et al. Method For Identifying a Hand Pose in a Vehicle, WO2020048814, March 2020",
          "2 - Vikram Gupta, Arjun Jain, et al. Method and System for Triggering an Event in a Vehicle, EP3895064, Jan 2023",
          "3 - Sai Kumar Dwivedi, Arjun Jain, et al. System And Method For Deployment Of Airbag Based On Head Pose Estimation, 201911039220 A, April 2021",
        ],
      },
    ],

    bosch: [
      {
        description:
          "The system incorporates methods like VRU Pose-SSD1, a cutting-edge model for VRU detection and 2-D pose estimation, tailored for robotaxis. By providing accurate pose estimates, it enables sophisticated analyses of VRU behaviors, crucial for predicting their intentions.",
        points: [
          "Features robust detection in adverse weather and tracks multiple objects simultaneously, enhancing safety.",
          "Meets NCAP standards for automatic emergency braking, safeguarding vulnerable road users effectively.",
        ],
        refrances: [
          "1 -  Chandan Kumar, Christoph Weinrich , Arjun Jain, Fabian B. Flohr et al. VRU Pose-SSD: Multiperson Pose Estimation For Automated Driving",
        ],
      },
    ],

    "federated-learning": [{}],

    "fitness-pose-estimation": [
      {
        description:
          "At its core, interactive visual feedback highlights posture accuracy, enhancing exercise techniques. This approach not only improves unsupervised workouts but also supports therapeutic routines, promoting overall health and wellness with personalized fitness coaching through cutting-edge technology.",
        points: [
          "Core ML algorithms enable instant visual feedback, overlaying dynamic corrections on the user's image.",
          "Transforms exercise routines with a real-time, interactive guide for correct posture and technique.",
          "Offers exercise recommendations and detailed guidance for therapeutic routines, supporting rehabilitation and functional training",
        ],
      },
    ],

    sqlwizard: [
      {
        points: [
          " The LLM does not access actual data, ensuring privacy.",
          " Data can reside either on our servers or the client's servers. Our system is designed to function without direct data access; we only require the database schema, which also solves the data size issue.",
          "While our current solution utilizes a MySQL database, our methodology is adaptable to other database systems such as ElasticSearch.",
        ],
      },
    ],

    "loneliness-assistant": [
      {
        description:
          "These strategies aim to provide a supportive presence that comprehends and responds to users' emotional states, improving mental well-being and diminishing feelings of isolation in our increasingly digital world.",
        points: [
          "Leveraging Open-Source Flexibility: Our Language Learning Model (LLM) is built on open-source technology, enabling continual updates and improvements to maintain technological leadership and deepen user connections.",
          "Fostering Genuine Emotional Connections: Programmed to recognize and react to various emotional cues, our LLM facilitates meaningful conversations that significantly enhance user engagement and emotional understanding.",
          "Adaptive Persona for Personalized Interaction: The LLM's dynamic persona adapts its responses to match individual user needs, providing personalized interactions that go beyond typical digital tools to offer true companionship.",
        ],
      },
    ],

    "fashion-framework": [{}],

    "banking-infra": [{}],

    rag: [
      {
        points: [
          "Effortless Recording: We have designed a user-friendly interface that simplifies the logging of daily activities, making it as easy and familiar as writing in a personal diary.",
          "Efficient Information Organization and Retrieval: By incorporating OpenAI's API for advanced indexing and utilizing ChatGPT for superior search capabilities, our system efficiently organizes and retrieves pertinent information from user entries.",
          "User-Friendly Interaction: Enhanced with features such as contact integration and query-based search, our system allows users to easily interact with their journal entries. This makes finding and connecting with stored information both intuitive and quick, streamlining the retrieval process significantly.",
        ],
      },
    ],
  };

  const impact = {
    mbux: [
      "The OEM was honored with 4 prestigious Automotive INNOVATIONS awards, notably one for “Most Innovative Premium Brand - Interface & Connectivity”. These awards, presented by PricewaterhouseCoopers (PwC) in collaboration with Prof. Dr. Stefan Bratzel and the Center of Automotive Management (CAM), showcase the brand’s unwavering dedication to pushing boundaries in the automotive industry.",
      "As a result of our collaboration, the OEM developed one of the best ML teams in India.",
      "The OEM integrated advanced Deep Learning models directly into their vehicles for the first time, setting a precedent in the industry.",
      "This leap forward inspired numerous competitors to follow suit, creating a new industry standard. The game changer was innovating away from the traditional left-right button for rearview mirror adjustments, in favor of adjusting based on the driver's head pose, showcasing the brand's commitment to intuitive design and functionality.",
    ],

    bosch: [
      ` Co-authored a research paper titled "VRU Pose-SSD: Multiperson Pose Estimation for Automated Driving" in collaboration with Bosch, Mercedes, and the Indian Institute of Science.`,
      `The predictive pedestrian protection system complies with NCAP requirements regarding automatic emergency braking.`,
      `Implementation of Automatic Emergency Braking has shown great potential: `,
      `It can be triggered, up to 60 km/h, in order to prevent or mitigate frontal collisions with pedestrians, significantly reducing the injury risk.`,
      `Equipping every car in Germany can avoid almost half the accidents with cyclists that result in personal injury, or at least mitigate their severity.`,
      `Can reduce up to 30 % of relevant pedestrian accidents`,
    ],

    "federated-learning": [
      "FastCode's innovation effectively balances the computational constraints of edge devices with the need for sophisticated, privacy-preserving model training, thereby extending the applicability of FL to resource-limited and privacy-sensitive environments. ",
    ],

    "fitness-pose-estimation": [
      "Our client is able to provide a low cost scalable physiotherapy solution for physical rehabilitation without the need of an in-person trainer.",
      "The solution transforms workouts by offering a technologically advanced, personalized fitness coach that guides users through exercises with step-by-step instructions, ensuring optimal posture and technique.",
    ],

    sqlwizard: [
      "Our client was able to use the tool to create an org wide data centric culture for decision making, enabling everyone to ask meaningful questions of the data directly.",
    ],

    "loneliness-assistant": [
      "Personal Companion: Acts as a personal companion in the absence of human interaction, addressing users' unique emotional needs and reducing feelings of loneliness.",
      "Broad Scope: Envisions a future where everyone has their own AI assistant, expanding beyond emotional support to meet a wider range of personal needs.",
    ],

    "fashion-framework": [
      "Our client was able to build an app based on their current technolo",
    ],

    "banking-infra": [
      "Enhanced Operational Efficiency: The monitoring platform transformed the bank's approach to operational monitoring, significantly boosting efficiency and robustness of digital services.",
      "Improved Customer Experience: Our solution notably improved the bank's ability to swiftly address and resolve issues, leading to superior customer satisfaction.",
    ],

    rag: [
      "Efficient Record Keeping and Retrieval: Seamlessly logs daily activities and enables quick access to past entries, ensuring crucial information is always readily available.",
      "Enhances Productivity: Streamlines the process of finding and using historical data, significantly improving efficiency and decision-making. ",
    ],
  };

  // Get the hero data based on the current path
  const heroData = heroDataMap[params.cases] || [];
  const clientAndRoleData = clientAndRole[params.cases] || [];
  const projGoalsData = projGoals[params.cases] || [];
  const businessChallengeData = businessChallenge[params.cases] || [];
  const solutionsData = solutions[params.cases] || [];
  const keyFeaturesData = keyFeatures[params.cases] || [];
  const impactData = impact[params.cases] || [];

  return (
    <>
      <Hero heroData={heroData} />
      <ClientAndInd clientAndRoleData={clientAndRoleData} />
      <ProjectGoals projectGoalList={projGoalsData} />
      <BusinessChlanges businessChallengeList={businessChallengeData} />
      <Soltions solutionsData={solutionsData} />
      <KeyFeatures keyFeaturesData={keyFeaturesData} />
      <TechStack />
      <OurImpact impactData={impactData} />
      <OurWork />
      <TestimonialsN />
      <Footer />
    </>
  );
};

export default page;
