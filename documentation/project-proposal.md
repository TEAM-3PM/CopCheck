<!-- Replace with your project name and delete me -->
# CopCheck

Authors: 
<!-- Replace Name with your names -->
- **Patrick Dacius**
- **Mekhi Tudor**
- **Mekhi Miller**

Team Name: **TEAM 3PM**

## 😞 The Problem 


A problem that we’ve seen in our communities is the persistence of police brutality. A major part of this issue is the lack of accountability for officers who misuse their power. Time and again, we see cases where officers are just given a warning for their misconduct and then moved to another city or state, where they continue working as police without facing real consequences. This practice allows a cycle of abuse to continue, making it harder to achieve justice and accountability in policing. ***UC Berkeley Journalism*** states ‘at least **163** California police agencies have executed separation agreements concealing misconduct allegations against at least **297** officers and deputies, records obtained by this investigation show. The actual numbers are likely much higher because one-third of police agencies asked to release the agreements refused, citing privacy laws. With allegations of their wrongdoing safely hidden, ousted officers often find new jobs in law enforcement and other sensitive positions. Of the **297** officers identified by this investigation, at least **108** subsequently landed jobs at other law enforcement agencies, as security guards or correctional officers.’

This problem is exacerbated by the fact that people of color are often the target of law enforcement abuse. Officers act unjustly towards people of color too frequently, whether the individual knows their rights or not. This type of abuse and misconduct violates the principles of fairness and equality. Such actions weaken the trust between communities and law enforcement, creating an atmosphere of fear and suspicion. Transparency is what is needed within law enforcement to filter out the cops who want to protect and serve from the cops who want to carry out their vigilante agenda. 

---


## 📝 Summary
The problem of law enforcement targeting people of color is deeply rooted in systemic and socioeconomic inequalities that affect societies worldwide. Many studies show that people of color, especially Black individuals, are disproportionately targeted by police. For example, research from the ***Center for Policing Equity*** reveals that Black individuals are **3.5 times more likely** to be stopped by police than white individuals, which often leads to excessive use of force. In 2020, while Black people made up about **10% of the U.S. population**, they accounted for **27% of fatalities from police interactions** ***(according to Mapping Police Violence)***.
These concerning statistics have serious effects on the Black community, both directly and indirectly. Encounters marked by racial discrimination can lead to higher rates of mental health issues like depression and anxiety. The fear and tension surrounding police interactions may also prevent people from seeking help or reporting crimes, making communities more vulnerable.
A key part of this issue is the lack of accountability for officers who engage in misconduct. Records show that from 2000 to 2020, officers were investigated for nearly 20,000 reported acts of misconduct, with over 5,000 involving the use of force. An analysis by the ***New York Civil Liberties Union*** indicates that the New York State Police often do not hold officers accountable for their actions. Officers frequently use force, including Tasers and pepper spray, even during non-criminal situations like traffic stops or mental health crises.
The New York State Police looks into its own misconduct allegations, and like many police departments that investigate themselves, confirmed misconduct happens very rarely when officers are accused of wrongdoing, such as illegal searches, use of force, or discrimination. Even when misconduct is proven, only a few cases lead to serious punishment, with most officers facing little to no consequences. 

--- 

## 🤔 Our Hypothesis
If individuals are empowered to leave reports/complaints and document their experiences with specific police officers, this increased transparency will foster accountability and enhance the sense of safety and protection for victims, ultimately leading to a more respectful and equitable justice system.

---

## 📱 Product Overview

Our application is tailored for citizens who may have had a run-in with law enforcement or anyone wanting to make a change, such as community activists, residents in high-police areas, and those involved in legal matters. Users can see officers at the nearest precinct based on location, empowering them to be more informed and engaged. They can leave detailed reports or complaints about their experiences with specific officers, ensuring their voices are heard. Also, users can upload videos of interactions, providing crucial evidence of potential misconduct and injustices. The app also allows users to look up police officers by name and badge number, giving access to data on previous interactions and their community scores, fostering transparency and accountability within law enforcement.

---


## 🏙️  Mission Statement 
CopCheck seeks to hold our law enforcement accountable by providing information for both undocumented (provided by users) and documented police encounters(from public data resources). With police accountability comes community trust. When the community and police work together, everyone becomes more safe. Promoting transparency and accountability with the police force and the communities they serve.

---

## 🫂 Who do we serve?
We serve marginalized communities; those with the most need of police accountability and police trust, we will serve these communities by allowing them to have a voice that can be heard by others who have experienced the same misconduct. 

---

## 🧳 User Journey Map

In order to provide a clearer understanding of the user experience, we've created a user journey map that outlines key interactions and touchpoints. You can explore the detailed map below: 

[CopCheck's User Journey Map](https://docs.google.com/document/d/1NRCpMz_rr_YLP6hShHeh5Q3V9QgpTnQAsgATVwQhPMw/edit?usp=sharing)

 --- 

## 👥 User-stories

- Users will be able to create an CopCheck account and log in with their username and password.

- Users will be able to Search a individual officer by their name, badge number or both. Furthermore users could interact with an advanced search that allows them to specify  the officers Tax ID #, and precinct.

- Users will be able to see a list of officers. Upon viewing the list of officers users will be able to see the officers profile which would include all the official government documented complaints against that specific officer, CopCheck user complaints against that officer, the officers salary, Activity history, name, badge number, and precinct.

- Users will be able to file a report on a specific officer based on their interaction. Each report could include a detailed description of the encounter, a video of the encounter, and can include a picture if the user decides to add one.

- Users can initiate petitions related to their experiences with an officer or based on the officer's complaint history.

- Users can request body camera footage of any interaction by providing the officer’s name or badge number, along with the date and time of the encounter.

- Users can engage in discussions through forums created by other CopCheck users, fostering community interaction and support.

--- 
  
## 🧗‍♂️ Key Technical Challenge

We anticipate **several challenges** related to **data quality** and **user input** in our application. First, we may encounter issues with **stale** or **incomplete data** within our dataset. The API we are utilizing is government-run, and some fields that are consistently populated in recent records may have been inconsistently filled out in earlier data. This inconsistency poses a challenge, particularly for officers with extensive histories in the dataset. Ensuring that our data presentation remains uniform and coherent across timeframes will be crucial for maintaining the integrity of the information provided.

Additionally, challenges **will** arise in managing user-generated content, specifically videos uploaded by users. The application must be capable of handling this input without compromising performance. Furthermore, a moderation system will be essential to ensure that user-submitted content is both **relevant** and **valuable** to the platform. This will help maintain the quality and accuracy of the data while preventing irrelevant or inappropriate submissions from diluting the dataset's usefulness.

---

## 🏋🏽 Extension Opportunities 

**In-App petitions**
- Any particularly negative officer can have an online petition on their information page that our app users can sign. This petition can then be brought to the precinct of the office to express the community’s intolerance for the officer’s actions.
  
**AI Summative Score of Officer**
- Based on the data on a given officer’s page, a score will be calculated to give users an idea of how a particular officer acts. This will range from a positive score to a negative score.
  
**AI Summary of User Reports**
- Have an AI review the written report (video recording if there is one) and list all violations that took place within the report. This will educate users on what particular violations can look like and generally make the report more easily digestible.
  
**In-App Body Cam Footage Requests**
- The app will have an option to request body cam footage for a particular officer given the user can provide all of the information needed to make the request. This will make use of the normal channels to make the body cam footage request, but it will be streamlined and visible to the overall community.

**Real-time Incident Location Tracker Map**
- A map that will pinpoint locations where incidents have occurred for the user. Clicking on a specific marker will give details about the particular incident (officer involved, score of the interaction, etc.). Clicking on a precinct marker will display information about the precinct (officers employed at the precinct).




## 📒 Sources

*Mapping Police Violence.*
[](https://mappingpoliceviolence.org/).

*Policing Equity.*
[](https://policingequity.org/what-we-do). 
*New York Civil Liberties Union. "New York State Police."*
[](https://www.aclu.org/press-releases/nyclu-releases-report-analyzing-nypd-stop-and-frisk-data). 

*Rusch, Smith. "This is the secret system that covers up police misconduct — and ensures problem officers can get hired again“ Graduate School of Journalism, University of California, Berkeley*
[](https://journalism.berkeley.edu/projects/this-is-the-secret-system-that-covers-up-police-misconduct-and-ensures-problem-officers-can-get-hired-again/). 
