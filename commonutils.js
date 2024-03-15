/******************************************************************************
Copyright TechnoSolutions Corporation. 2003-2016. All Rights Reserved.
TITLE - tsclsCommonUtils
DESCRIPTION - This file contains all method which are required commonly.
CREATED BY - NikitaP
CREATED DT - 26-02-18
*******************************************************************************}

Version 1.0 (26-02-18)
Changed by: NikitaP
Change log: Created New file
Reviewer: RoshanJ
Status : Needs Revision
- Validate etpId irrespective of id and uqid.
- Use correct params in OpenRecord method.
- Add style to show cursor as pointer.


Version 2.0 (07-03-18)
Changed by: NikitaP
Change log:
- Added function to return flag to open linked record in modal window or new window.
Reviewer: RoshanJ
Status : Approved

Version 3.0
Changed by: SourabhR
Change Dt: 07-May-2018
Project: BMO Performance optimisation
Change log:
- Added method tsGetWebURLForRecord()
# This method will create and return the webURL as per the parameters passes
- Added method tsGetWinURLForRecord()
# This method will create and return the winURL for the record as per the passed paramters
Reviewer: RoshanJ
Status : Approved with todo
Todo:
- Use const for current baselineId

Version 3.1
Changed by: SourabhR
Change Dt: 08-May-2018
Project: BMO Performance optimisation
Change log:
- Coding convention changes.
- Param validation changes.
Reviewer: RoshanJ
Status: Approved

Version 3.2
Changed by: SourabhR
Change Dt: 08-May-2018
Project: BMO Performance optimisation
Change log:
- Proper Assert message
- Implemented Todo of version 3.0
Reviewer: RoshanJ
Status: Approved

Version 2.2 (11-10-18)
Changed by: HarshjeetB
Project: Add records to Selective Baseline
Change log:
- Added method tsCanAddRemoveInBaseline() to get AddRecordToBaseline permission
Reviewer: PreetiY
Status : Approved


Version 2.2
Changed by: Rajjat
Change log: Mind Map - added method GetDescriptionFieldForETPId
Reviewer: Arpan
Status :Approved

Version 3.3
Changed by: RoshanJ
Change Dt: 04-Jan-2019
Project: OneView Pop-up Editing
Change log:
- As per feedback from Arpan sir, Added method tsGetOneViewRecordUniqueId() to calculate OneView record's uniqueId
Reviewer:
Status:

Version 4.0
Changed By: SourabhR
Change Dt: 04-March-2019
Project: Package Support in Create Trace Record
Change Log:
- Implemented [TSK-279714] Package Support in Create Trace Record - Add method in CommonUtils to check whether record can in created in Package as per the RSS
# Added method tsCanCreateRecordInsidePackage() to check whether the new record can be created inside destination package or not
Reviewer: RoshanJ
Status:

Version 4.1
Changed By: SourabhR
Change Dt: 08-March-2019
Project: Package Support in Create Trace Record
Change Log:
- Fixed issue - Unable to create record when creating record inside package with RSS
Reviewer: RoshanJ
Status:

Version 4.2
Changed By: SourabhR
Change Dt: 08-March-2019
Project: Package Support in Create Trace Record
Change Log:
- In function tsCanCreateRecordInsidePackage(), define LRssAllowedChildRecordTypes as Array
Reviewer: RoshanJ
Status:

Version 4.3
Changed By: SourabhR
Change Dt: 22-March-2019
Project: Package Support in Create Trace Record
Change Log:
- In tsCanCreateRecordInsidePackage(), when returning result, add errorCode in it.
Reviewer: RoshanJ
Status: Needs Revision
Todo:
- In tsCanCreateRecordInsidePackage(), we can optimize code by reducing number of loops used and also breaking the loop when match result found.
- Also correction in Documentation.
Change Log:
- Implemented above feedback
- cacheUtil method name is changed from tsGetPackagePitIds() to tsGetSectionPITIds()
Reviewer: RoshanJ
Status:

Version 4.4
Changed By: Rajjat on 10-May-2019
Project: feat_web_create_record_using_template_V13
Change Log:
- Added method tsCanShowActionForCreateRecFromTemplate() for the template record
- Added validation for project node
Reviewer: RoshanJ
Status:

Version 4.5
Changed By: Rajjat on 16-May-2019
Project: 13.20
Change Log:
Fixed following PRs:
- [PR-285389] New record using template - Action to create new record using template is available even if template project does not exists in DB - refer steps
- [PR-285392] New record using template - New using template action is available(in Resos Explorer) for record type which are in ignore list (Use case,entity,test case etc.) - refer steps
Reviewer: RoshanJ
Status:

Version 4.6
Changed By: Rajjat on 17-May-2019
Project: 13.20
Change Log:
- Changes done to handle action for diagram fields, not showing action create using template if diagram is not editable in web
Reviewer: RoshanJ
Status:

Version 4.7
Changed By: Rajjat on 05-Jul-2019
Project: TopTeam 13.23
Change Log:
- Fixed [PR-288516] 'Create using template' action appears only once in the right pane of Explorer
Reviewer: ArpanG
Status:

Version 4.8
Changed By: SourabhR
Change Dt: 11-Jul-2019
Project: TopTeam 13.23
Change Log:
- Fixed [PR-285882] Tree editor (views and Filters)  - Once if I go to full screen mode views and filters change is not working. ref. attached video
# Added method tsResetMenuOwnerComponents() for the fix
Reviewer: ArpanG
Status:

Version 5.0
Changed By: SourabhR
Change Dt: 08August19
Project: TopTeam NextGen V14
Change log:
- Added method tsGetImageIndexOfRecord()
Reviewer: ArpanG
Status:

Version 5.1
Changed By: SourabhR
Change Dt: 13August19
Project: TopTeam NextGen V14
Change log:
- Added method tsGetGroupIndexForDynamicNewMenu(), to group recordtypes specifically to add menu separator (Can be useful in future for Template Driven Menus)
Reviewer: ArpanG
Status:

Version 5.0
Changed By: SourabhR
Change Dt: 01-July-2019
Project: Add As
Change Log:
- Implemented Roshan Sir's code review feedback
# Added method tsGetRecordTypeListWhichCannotBeCreatedInWeb()
Reviewer: RoshanJ
Status: Approved with todo
Todo:
Change name to tsGetIgnoredRecordTypesForRecordCreation()
Implemented Todo:
- Changed name of tsGetRecordTypeListWhichCannotBeCreatedInWeb() to tsGetIgnoredRecordTypesForRecordCreation()
Reviewer: RoshanJ
Review Status: Approved

Version 6.1
Changed By: SourabhR
Change Dt: 18August19
Project: TopTeam NextGen V14
Change log:
- Renamed method from tsCanCreateRecordInsidePackage to tsCanCreateRecordInContainer
# Used new container cache in the method instead of OneView sections
Reviewer: ArpanG
Status:

Version 6.2
Changed By: SourabhR
Change Dt: 05Sept19
Project: TopTeam NextGen V14
Change log:
- Added method tsGetMenuItemJsonForEtp() (Earlier present in cacheutils class names as pvtGetInfoJsonForEtpId())
Reviewer: ArpanG
Status:

Version 6.3
Changed By: SourabhR
Change Dt: 11Sept19
Project: TopTeam NextGen V14
Change log:
- In method tsGetImageIndexOfRecord(), ImageIndex 0 represents recordtype image for folders
- Added method tsIsCloneActionAvailableForEtp()
- In method tsGetImageIndexOfRecord(), check for etpId of package/system package instead of base collection EtpIndicator
- Fixed issue : tsGetImageIndexOfRecord() method is not showing proper icon
- Implemented USO Feedback - Show Create OneView action as secondary recordType
# Changes done in tsGetGroupIndexForDynamicNewMenu()
Reviewer: ArpanG
Status:

Version 6.4
Changed By: SourabhR
Change Dt: 17Sept19
Project: TopTeam NextGen V14
Change log:
- Fixed issue - unable to create term inside Glossary package reported by Rasika
# Changes done in tsCanCreateRecordInContainer()
Reviewer: ArpanG
Status:

Version 6.5
Changed By: SourabhR
Change Dt: 18Dec19
Project: TopTeam NextGen V14
Change log:
- Allow creation of Text under a text record
- In Dynamic New dropdown, Text Package record type will be under second partition
- Added method tsConvertRecordsJsonFromFlatToTree() to convert flat array of ELM records to tree
- Piyush Sir's feedback - tsConvertRecordsJsonFromFlatToTree() added param to read idProperty, childrenProperty and parentIdProperty
- Removed Dependancy of DBObject from method tsCanShowActionForCreateRecFromTemplate()
- Added tsCanShowCreateWizardActionForEtp() method to do action availability for New Using Wizard action
- In tsGetMenuItemJsonForEtp(), added param to include other new options avialable such as Using Template or Using Wizard for the specified record type
- Arpan Sir's Feedback: use small case for Using Wizard and Using Template captions
- USO Feedback implemented: The display sequence of second group needs to be as per the weightage
- Arpan Sir's feedback - Do not show "using Template" action for Collab Login
- Implemented USO Feedback - "Using Template" and "Using Wizard" recordtypes need to be in seperate group
- Implemented USO Feedback - When showing New using template option, check whether the records are available in Template Project for the provided recordType
- Added method tsGetCaption()
Reviewer: ArpanG
Status:

Version 4.4
Changed by: HarshjeetB
Changed dt: 11-June-2019
Project: Project Baselines
Change log: - Added tsGetBaselinePermissions method
Reviewer: PreetiY
Status: Needs Revision
- Confirm with ArpanG sir

Version 5.0
Changed by: HarshjeetB
Changed dt: 14-Nov-2019
Project: Next Gen
Change log: Added method GetSystemPackagesInProject to fetch the system packages for a project
Reviewer: PreetiY
Status:

Version 5.1
Changed by: ManmohanA
Changed dt: 28-Nov-2019
Project: Next Gen
Change log: tsGetImgIconClsForRecordType added method to fetch icon image class on base on etpId and for etpid.
Reviewer: ManmohanA
Status:

Version 5.2
Changed by: ManmohanA
Changed dt: 29-Nov-2019
Project: Next Gen
Change log: Implemented roshanj sir feedback
Reviewer: ManmohanA
Status:

Version 5.3
Changed by: ManmohanA
Changed dt: 20-Dec-2019
Project: Next Gen
Change log: Added method for fetch import action Json/menu item for etp id and module type
- Method create the Json for import action depending on etp ID
- If user passes module type then method first check the module type is availble
- in current editon if yes then fetech action on basis of etp id
Reviewer: ManmohanA
Status:

Version: 3.0
Changed by: SourabhR
Change Dt: 29/01/20
Project: V14 ITM to ELM
Change log:
- Use new recordtype constant for TODOs
Reviewer: ArpanG
Review Status:

Version: 3.1
Changed by: SourabhR
Change Dt: 04/02/2020
Project: V14 NG bugfixes
Change log:
- Implemented [CR-299218] Add as from comment dialog or rich text editor (System package) - 'system packages' record type should not be available while selecting record types. ref.desc
Reviewer: ArpanG
Review Status:

Version: 4.0
Changed by: HarshjeetB
Change Dt: 19/02/2020
Project: ITM ELM Migration
Change log:
- Added method tsGetTextForEmbedLink to get the Embed Link Title as per global settings length
Reviewer: ArpanG
Review Status:

Version 5.4
Changed by: ManmohanA
Changed dt: 21-Jan-2020
Project: Next Gen
Change log: Added check for etp id if EtpId is not container type then show
pit pural name before the caption else show only caption.
Reviewer: ManmohanA
Status:

Version: 5.5
Changed by: Rajjat on 12-Feb-20
Project: NextGen 02
Change log:
- Updated UI as per USO feedback, Removed "using" from the text of template record
Reviewer: PiyushJ
Review Status:

Version 5.6
Changed by: ManmohanA
Change dt: 20-02-2020
Project: V14 NextGen - bug Fixes
Change log:
- PR-298242 : Traceability tab - Throws error if I open the project link (which is parent of a record) - Refer Attch
- to fix this -> show Project Editor on link click if user is a team member of the project, else we can show a proper info message.
Reviewer: RoshanJ
Status:

Version 4.9
Project: Test Coverage Matrix
Changed by: PreetiY on 25-Jul-2019
Change log: created tsGetWinURLForEditor method to get the desktop URI for editor
Reviewer: ArpanG
Status:

Version: 5.7
Changed by: SourabhR
Change Dt: 24-Mar-20
Project: V14 NG - Bugfixes
Change log:
- Fixed [PR-298931] Repository Explorer - System raises error when a section is cloned and destination section under which the section is being cloned has package structure applied. - refer steps & Screenshot
- Added seperate Action - OneView Wizard under secondary recordtypes in new dropdown
Reviewer: ArpanG
Review Status:

Version: 5.8
Changed by: ManmohanA
Change Dt: 05/03/2020
Project: TopTeam NextGen V14
Change log: Modify code to remove warninig in build creation
Reviewer: RoshanJ
Review Status:

Version 4.0
Changed by: HarshjeetB
Change Dt: 1-Sept-2019
Project: Recycle Bin
Change log:
- As per feedback from Arpan sir, Added method tsCovertVersionNumberToStr() to convert the version number in stringformat
Reviewer:Preeti
Status:

Version 5.0
Changed by: SourabhR
Change Dt: 20-May-2020
Project: V14 NG
Change log:
- Shinu Sir's feedback: Do not show OneView using Wizard action
- Fixed bug: Add Records using Bulk action is available under OneView document.
- Fixed [PR-305306] Web Diagram - BPMN - Links which will direct to desktop app for Create New Business Process using wizard (Beginner's & expert) is missing with New Drop down
- USO Feedback: When generating WebURL of Wiki, always create permalink of Wiki Editor instead of Detail Editor
# Fixed issue when generating old version URL of wiki
- Fixed [PR-303599] Add As -  For Use Case record type, the Description field is shown as Rich text because of which it displays the message in Add As dialog
Reviewer: ArpanG
Status:

Version 5.1
Changed by: SourabhR
Change Dt: 24-April-2020
Project: V14 NG - Package Rules Enhancement
Change log:
- NG BIZ RULE: If current record is not hierarchical, Do not allow creation of same recordtype as Child
Reviewer: ArpanG
Status:

Version 5.2
Changed by: RoshanJ
Change Dt: 29May2020
Project: NextGen
Change log:
- Make corrections in tsGetMenuItemforImportRecordType() to return correct menu as per specific contaier single/Multiple PITs or Project node
Reviewer:
Status:

Version 5.3
Changed by: SourabhR
Change Dt: 16June2020
Project: NextGen
Change log:
- Added tsPasteLinksInRichTextEditor() to paste records as link in froala
- Removed tsBindPasteLinksShortcutToRichTextEditor() method - NOT USED
- Made changes in tsPasteLinksInRichTextEditor() as per new method of clipboard
Reviewer: ArpanG
Status:

Version 5.4
Changed by: AmitS on 6-July-2020
Project: TopTeam NextGen
Change log: Fixed [PR-310328] Open in Desktop App - Baselined record - When I open a record from a previous baseline in Desktop App, its current version is being opened instead of the baselined version
Reviewer: PiyushJ
Status:

Version 5.3
Changed by: RoshanJ on 8Jul2020
Project: TopTeam NextGen
Change log:
- Added tsGetRecordTypesToBeIgnoredForRecordData() which return list of recordType for which we can skip dislay of record
Reviewer:
Status:

Version 5.4
Changed by: RasikaI on 17Jul2020
Project: TopTeam NextGen - TCM Enhancements
Change log:Added p_boolIconClsWithHtml flag in tsGetImgIconClsForRecordType method and return icon cls with HTML on the basis of flag value.
Reviewer: ArpanG
Status:

Version 3.0
Changed by: Sourabh1
Change Dt: 28-Aug-2020
Project: V15 - Comment Stream bugfixes
Change log:
- Fixed [PR-314265] Comment Stream - Always opening current version of the record when I am going to open the record by click on version link of the comment. I was expecting it will open that version of the record on which link I clicked. ref. desc
# Added method tsGetOpenRecByVersionHtmlElement()
Reviewer: ArpanG
Status:

Version 3.1
Changed by: SagarH
Change Dt: 25-Sep-2020
Project: V15 - web Rich Text Editor
Change log:
- change in tsGetTextForEmbedLink
- add recordIds of only those record whose name is not completly fetch from awecwe
- Add increse LUserSettings_EmbedLinkLength by three
Reviewer: ArpanG
Status:

Version 3.2
Changed by: SourabhR
Change Dt: 14-Oct-2020
Project: NG Bugfixes
Change log:
- Implemented [CR-316421] Need WIN icon in dropdown of New where creation of recordtype is launched in Windows client (e,.g New BPD using Begineer wizard)
Reviewer: ArpanG
Status:

Version 3.2
Changed by: SourabhR
Change Dt: 08-10-2020
Project: V15 OneView Records Authoring
Change log:
- Implemented [TODO-317819] "New OneView Document" from Quick Explorer should invoke URI
Reviewer: ArpanG
Status:

Version 3.3
Changed by: SagarH
Change Dt: 09-11-2020
Project: Rich text text editor
Change log:
- fixed [PR-318610]Embedded Link text in rich text field - when the link text size set more than 239 characters, the maximum link text in rich text is always 239 characters only
Reviewer: SourabhR
Status:

Version 3.3
Changed by: SourabhR
Change Dt: 06-11-2020
Project: V15 OneView Reviews
Change log:
- Added method tsGetApprovalStatusIndicatorHTML() to generate Approval status based on Approval object
- Implemented [TODO-320191] Review Progress Tab - Update hint in review progress column. It should be "Needs Revision by 3 reviewers"
Reviewer: ArpanG
Status:

Version 3.2
Changed by: SagarH
Change Dt: 11-11-2020
Project: Import from excel web
Change log:
- Add web support to tsGetMenuItemforImportRecordType
-remove suffix icon if app type is not win
-add method if app type is web
-use module invoker for Import form excel
-fixed issuse when container pit is empty do not show import option
Reviewer: ArpanG
Status:

Version 3.3
Changed by: Vaibhav Raut
Changed dt: 07-11-2020
Project: NextGen v15
Change log:
- PR-308276 - Import From Word - Location is not selected when import from word wz is opened from Web - Refer desc is fixed
Reviewer: RoshanJ
Status:

Version 3.3
Changed by: SourabhR
Change Dt: 16-10-2020
Project: V15 OneView Wizards
Change log:
- Invoke OneView Wizard in web instead of redirecting to win
Reviewer: ArpanG
Status:

Version 3.4
Changed by: SourabhR
Change Dt: 27-11-2020
Project: V15 OneView
Change log:
- Added methods
1. to detect if record belong to oneview or not
2. Get OneView Id for a record
Reviewer: ArpanG
Status:

Version 3.5
Changed by: RoshanJ
Project: NG
Change log:
- Added method tsGetETPsToBeIgnoredAsStartFromInDocumentView() which will return all recordTypeIds to be ignored for Document View
Reviewer:
Status:

Version 4.0
Changed by: SourabhR
Change Dt: 05-02-2021
Project: V15 Project Dashboard
Change log:
- Added method tsGetWikiHomepageRecordId() which will be used by project dashboard to get wiki home page record id
# Changed logic to get the result from SRU Project Setting.
Reviewer: ArpanG
Status: Arpan

Version 3.6
Changed by: AmitS on 17 Feb 2021
Project: Next Gen
Change log:
- Used constant for ExecutionAction
Reviewer: Rajjat
Approval Status: Approved

Version 3.5
Changed by: Vaibhav Rahangdale
Project: NG
Change log:
- Added method new tsGetRegularExpressionForSearch() to get RE expression for searched text
Reviewer: SourabhR
Status: Approved

Version 4.1
Changed by:
Change Dt: 22-04-2021
Project: Wiki Feedback
Change log:
- In tsGetWikiHomepageRecordId Changed logic to get the result from search request
- Implement code review feedback
- add condition to Handle if wiki record id is not found for any project
- Update Rest command to search wiki home page record id
- Update Rest command to search wiki home page record id param const
Reviewer: SourabhR
Status: Approved

Version 4.2
Changed by: SourabhR
Change Dt: 10-05-2021
Project: V15 Wiki
Change log:
- In tsGetWikiHomepageRecordId, use GetWikiHomePageRecordId() of Project Tree to return Wiki Home Page Record Id
Reviewer: ArpanG
Status:Approved

Version 4.3
Changed by: SumitC on 16 Mar 2021
Project:  V15 OneView Document
Change log:
added validation in tsCanShowActionForCreateRecFromTemplate() for check ignore list of templaten i;e p_boolCanCheckIgnoreList
Reviewer:RasikaI
Status: Approved

Version 4.4
Changed by: SumitC on 17Apr21
Project:  V15 OneView Document
Change log:
-Implemented CR-331837 Oneview Using templates - User is not able to create the oneview using templates in Record Templates Project however in Win it is possible.
Reviewer:RasikaI
Status: Approved

Version 4.5
Changed by: Vaibhav Raut
Change Dt: 21-04-2021
Project: OTP based Auth in online reviews
Change log:
- Arpan Sir's Feedback Implemented - In IsEmailSettingConfigured method, remove 'Please' from text of 'Please contact your TopTeam Aministrator.'
Reviewer: RoshanJ
Status: Approved

Version 3.6
Changed by: Vaibhav Raut
Project: NG - v15.70 bugfixes
Change log:
- Fixed - [ER-329155] [Web] ReqIf Import - Need import from ReqIf action for OneView Document Node in Repository explorer - Refer Justification
Reviewer: RoshanJ
Status: Approved

Version 3.7
Changed by: Vaibhav Raut
Project: NG - v15.70 bugfixes
Change log:
- Implemented [ER-333154] Show ReqIF import action for Project node, Oneview node, Oneview editor, System folder &  package(Multiple record type). Show proper message for single PIT package and System package
#To show action for System folder
Reviewer: RoshanJ
Status: Needs Revision
Todo: Implemented in tsclsDataJsons class
- For System Folder, Under import action, for now only show ReqIf action only
Reviewer: RoshanJ
Status: Approved


Version 3.7
Changed by: SagarHanwat on 04 May 2021
Project: Compare project Merge record
Change log:
- in tsConvertRecordsJsonFromFlatToTree add p_objOptions param in pvtFindRecordInTree method
Reviewer: SourabhR
Approval Status: Approved

Version 4.6
Changed by: DevM
Change Dt: 21-04-2021
Project: Wireframes: capture and document wizard
Change log: Added support to show New record using wizard action for wireframes
Reviewer: PawanT
Status: Approved, 8 July 2021

Version 3.8
Changed by: RoshanJ
Project: Package Actions sync( lock/unlock, check in/out, etc )
Change log:
- Added tsCanShowCheckInOutActionForRecordType() to identify whther checkIn/Out actions can be show for specified recordType.
Reviewer: ArpanG
Status:Approved

Version 4.7
Changed by: Vaibhav Raut on 09 Sept 2021
Project: SyncFusion Ejs1
Change log:
- Added tsLoadRibbonLibrary() method
Reviewer: Vaibhav Raut
Approval Status: Self-Approved

Version 4.7
Changed by: SumitC on 10 Aug 2021
Project: UI Pattern Feedback
Change log:
- Replace added all help code related methods
Reviewer: RasikaI
Approval Status: Approved with TODO
TODO: - Use help code instaed of Module type in tsOpenHelpForCode, tsCanShowHelpLinkForHelpCode and tsGetHelpHintForHelpCode. Also correct the method names in error message.

Version 4.7
Changed by: Vaibhav Raut on 07 Sept 2021
Project: UI Pattern Feedback
Change log:
- Implemented [TODO-340225] Info-screen - Do not show Import from Excel for diagramming etp packages
- Hide import from word and reqif option for diagram and wiki.
Import from ReqIF action should also be NOT visible for single record type packages.
Reviewer: SourabhR
Approval Status: Approved

Version 4.71
Changed by: JayJ on 16-Sep-2021
Project:  UI pattern USO feedbacks
Change log:
- Done changes to save size and position of the window
- Added utility methods that provide relative and absolute size of a window as per the viewport.
- Added another utility method that will change the x/y cord if window is goind out of the viewport
Reviewer: PiyushJ
Status : Approved, 17-Sep-2021

Version 3.7
Changed by: SagarHanwat on 11 Aug 2021
Project: Navigation Pages
Change log:
- add method tsGetNslinkInfoObjectFromString to get nslinkinfor object
- add method tsGetOpenInDesktopIconBase64Src to get open in desktop image base64 src
Reviewer: SourabhR
Approval Status:

Version 4.7
Changed by: PawanT on 13 Aug 2021
Project: Navigation Pages
Change log:
- Added method which will return diagram image and navigation map information
- Added local function which will return unique id as a third promise resolve parameter
**30-Aug-2021**
- Fixed PR-341470 Navigation Page- inserted nav diagram is not getting visible in nav page if it does not have navigate to linking. ref. attached video
Reviewer: PiyushJ
Approval Status: Approved, 01-Sep-2021

Version 4.8
Changed by: SagarHanwat
Change Dt: 13-08-2021
Project: Navigation pages
Change log:
Add method tsCanCloneProject
implement TODO: Current Project Editor's ProjectId needs to be provided to tsCanCloneProject() method, Project Editor does not edit Active Project it can edit any project
Reviewer: SourabhR
Status:Approved

Version 4.91
Changed by: JayJ
Change Dt: 27-Aug-2021
Project: Navigation pages
Change log:
- Added method tsGetReadOnlyMsgForSystemRecord()
- This function will build the message to show for system record
07-Sep-2021
- Implemented todos
Reviewer: ArpanG
Review Status:Approved

Version 4.92
Changed by: JayJ
Change Dt: 08-Sep-2021
Project: Navigation pages
Change log:
- Implemented Text review feedback from Preksha ma'am
Reviewer: JayJ
Review Status: Self-Approved (08-Sep-2021)

Version 4.92
Changed by: PawanT on 08 Sept 2021
Project: Navigation Pages
Change log:
- Implemented USO feedback to do not show display id in hint of record or page is linked
**17-Sept-2021**
- Implemented text change to use etp singular name from cache in info label shwon for process guidance page
Reviewer: PawanT
Approval Status: Self Approved, 17-Sep-2021

Version 4.93
Changed by: Sagar Hanwat
Change Dt: 08-Sep-2021
Project: Navigation pages
Change log:
Change Base64 string of open in desktop icon.
Reviewer: Sagar Hanwat
Approval Status: Self Approved,

Version: 4.94
Changed by: SagarHanwat on 24/09/2021
Project: Navigation Diagrams
Change log:
- Fixed [PR-343312] Use Case Detail - Use Case Flows are not loaded - Refer Steps
Reviewer: SagarHanwat
Review Status: Self Approved, 24/09/2021


Version 3.8
Changed by: SumitC on 25 Aug 2021
Project: Ruleset Grouping
Change log:
- added method tsGetHintTemplateForRulesetGroup to get hint for group
Reviewer: ArpanG
Approval Status: Approved

Version: 3.9
Changed by: SumitC 06Sep21
Project: USO UI pattern FDBK
Change log:
Implemented -TODO-342081  Add a method in cacheUtil -> tsGetRulesetGroupIdsForRecordType (rulesetId, etpId, Direction)
Reviewer: SourabR
Status : Approved with TODO
TODO: Check inline TODO

Version: 4.0
Changed by: SagarH 03 Nov 2021
Project: Wiki Enhancements
Change log:
        Implement TODO : in copy past 
            [TODO-343399]When a diagram record is getting inserted as link system should ask confirmat...
Reviewer: ArpanG
Status : Approved

Version 4.0
Changed by: Vaibhav Raut
Project:v16.2 bugfix
Change log:
- Implemented - Reported by Piyush Sir - Avoid adding record type name in Import action it is looking odd
Status: Self Approved


Version: 4.0
Changed by: SagarHanwat 07Dec21
Project: USO UI pattern FDBK
Change log:
  add tsPrintCurrentPage() for print corrent page action.
Reviewer: SourabhR
Status : Approved

Version: 4.0
Changed by: SagarHanwat 02 Mar 2022
Project: Insert ScreenShot 
Change log:
  add method tsInsertScreenshot to insert image 
  correct path svg icon 
  Implement code review feedback
  Correct alert message 
  Implement textchange
Reviewer: SourabhR
Status : Approved

Version 4.1
Changed by: Vaibhav Rahangdale
Change Dt: 28-01-2021
Project: Component And Assembly
Change log:
- Changed logic to detect a project from Etp Id
Used utility method gtsCacheUtils().tsIsProjectRecordType()
Reviewer: Arpan
Status : Approved

Version 4.2
Changed by: SumitC on 16 Dec 2021
Project: Component and Assembly
Change log:
- TODO-348365 WEB - Do not show clone action for Catalog Project
Reviewer: SumitC
Approval Status: Self Approved

Version 4.3
Changed by: Sourabh Raut
Change Dt: 27-01-2022
Project: Component And Assembly bugfixes
Change log:
- Fixed [PR-350507] Components and assemblies - showing wrong message (i.e. privilege message) when going to create traced record for a published component project. Need to show the correct reason.
  # return false from tsCanCreateRecordInContainer() if owner is published
Reviewer: Arpan
Status: Approved

Version 4.3
Changed by: SourabhR
Change Dt: 10 Jan 2022
Project: Component and Assembly - Sprint 2
Change log:
- Implemented [TODO-349357] Web - New drop-down class - If Component is PIT in owner and its canCreate is true, add actions for "Create Component" in a separate group index
- Implemented [TODO-349358] Web - New drop-down class - If Component is PIT in owner and its canReuse is true, add actions for "Include Component" in a separate group index
Reviewer: SourabhR
Status: Self Approved

Version 4.4
Changed by: SourabhR
Change Dt: 01 Feb 2022
Project: Component and Assembly - Sprint 2
Change log:
  - In tsGetMenuItemJsonForEtp() added support to generate Include Component action with sub menus
  - Feedback: Use Component icon for Create Component and Reuse icon for Reuse Component
Reviewer: ArpanG
Status: Approved

Version 4.5
Changed by: SourabhR
Change Dt: 16 Feb 2022
Project: Component and Assembly - Sprint 2
Change log:
  - Implemented feedback of [RPG-234032] Component & Assemby regarding changes in DocView and Tree Editor
  - Implemented USO Feedback on Captions of Component actions
  - Corrected icon of Reuse Component
Reviewer: SourabhR
Status: Self Approved

Version 3.44
Changed by: SumitC
Change Dt: 14-Feb-2022
Project: V16 Component and Assembly (sprint 2)
Change log:
- Added Utility Method's for the project code
    tsGenerateProjectCodeForProjectName
    tsIsProjectCodeValid
    tsValidateUniqueProjectCode
Reviewer: RasikaI
Status: Approved

Version: 8.8
Changed by: Vaibhav Raut
Changed Dt: 18 Feb 22
Project: C&A
Change log:      
- Implemented [CR-349146] Document View should allow to open OneView Documents
  Added support for info screen module as per discussion with Sourabh Sir (18thFeb22)
Reviewer: Vaibhav Raut
Review Status: Self Approved

Version: 8.9
Changed by: ArpanG
Changed Dt: 21Feb22
Project: C&A
Change log: Implemented CR-351493     
Reviewer: ArpanG
Review Status: Self Approved 

Version: 9.0
Changed by: RasikaI
Changed Dt: 23Feb22
Project: C&A
Change log: Added new method tsGetRecordLinks, to fetch the records links from the server.    
Reviewer: ArpanG
Review Status: Approved

Version 9.1
Changed By: SourabhR
Change Dt: 28-02-2022
Project C&A
Change Log:
- Removed ESLint warnings and errors
Reviewer: SourabhR
Status: Self Approved

Version 4.4
Changed by: Sagar Hanwat
Change Dt: 22-03-2022
Project:Insert screenshot
Change log:
  Fixed issue: PR-352055 Rich Text Editor: Display information message while inserting Screenshot is not in proper manner.
  PR-352508 Insert Screen shot - Shows Error after insert Screen shot in rich text using mozilla browser - Refer Attached Video
  [PR-352508] Insert Screen shot - Shows Error after insert Screen shot in rich text using mozilla browser - Refer Attached Video
  [PR-352504] Insert Screen shot - Showing Black screens for TopTeam Applications - Refer Steps
  Fixed issue : info dialog is shown when user cancle dialog 
  [PR-352504] Insert Screen shot - Showing Black screens for TopTeam Applications - Refer Steps
  fixed issue Remove ImageCapture API code and it show error in new chrome version to fix [PR-352504] Insert Screen shot - Showing Black screens for TopTeam Applications - Refer Steps
  TODO: JS Stack should ignore errors from such external files, we have coded it. Why it's failing? 
  its failing because error raise form InjectedScript 
  Implemented that TODO in tsclsJSerrorHandler
Reviewer: SourabhR
Status: Approved

Version: 3.5
Changed by: SagarHanwat, 
Project: Insert Screenshot
Change log:
      - Implement Text review feedback.
Reviewer: SagarHanwat
Review Status: self Approved

Version: 2.0
Changed by: SourabhR
Changed Dt: 07-04-2022
Project: Insert Screenshot
Change log:
- Moved tsInsertScreenshot and tsEditBase64Image methods to MediaUtils
Reviewer: SourabhR
Review Status : Self Approved


Version: 4.42
Project: Diagram - Capture Screen
Changed by: Piyush Jain
Change log:
  07-Apr-2022:
    - Fixed [PR-353659] Web Diagram - Capture Screen & Edit Image -   Screens captured in BPMN are not loaded in Review, Browse Mode, Review Mode, Document view,online reviews etc
      - Edit image was returning image in PNG format while we were requesting JPEG
Reviewer: PiyushJ
Review Dt: 07-Apr-2022
Review Status: Self Approved

Version 4.4
Changed by: JayJ
Change Dt: 11-Feb-22 
Project: 16.3 bug fixes
Change log:
  - Fxied [PR-350337] Baseline - Import From Word/Excel actions are available in Baseline Mode for Component Package and allows to import records as well
Reviewer: PiyushJ
Status: Approved, 23-Mar-2022

version 9.2
Changed By: Vaibhav Raut
Change Dt: 13-05-2022
Project: Reused package - restrict adding records
Change log: 
- Do not show Import actions if selected package is reused as destination
Reviewer: SourabhR
Status: Approved

Version 9.2
Changed By: SourabhR
Change Dt: 25/04/2022
Project: Contextual commenting bugs
Change log: 
- Fixed [PR-354371] Contextual Comment - Document View - When user is adding a comment from left click context menu then check to add comment as public is unchecked. Please refer to the Clip
Reviewer: SourabhR
Status: Self Approved

Version 4.4
Changed by: Sagar Hanwat
Change Dt: 21-03-2022
Project: Comment stream all project context 
Change log:
- Add Method tsGetProjectPath to get preject path
    Update Method tsGetProjectPath to return correct path
  Implement feedback on project path display
  Implement code review feedback on project path  
Reviewer: Sourabh Raut
Status: Approved

Version 4.5
Changed by: Sagar Hanwat
Change Dt: 08-04-2022
Project: Comment stream all project context 
Change log:
- Implement USO review feedback change in tsGetProjectPath
- [PR-353909] Comment & Activity Stream - Rendering "&#" symbols in project name. Refer added screenshot
Reviewer: Sourabh Raut
Status: Approved

Version: 4.4
Changed by: TrineshL on 04/01/2022
Project: Import From Word
Change log:
  - Set action availability of Import from Word action
  12 Mar 2022
  - Created tsGetXMLObjectFromXMLString method which will return the parser from XML
Reviewer: JayJ
Review Status: Approved, 04-Apr-22 

Version: 4.5
Changed by: TrineshL
Changed Date: 05 April 2022
Project: Import From Word
Change log: 
  - Passing DBRecord in method tsExecuteImportActionByCode, as there is a need of DB record in module invoker function of "Import From Word" Wizard
Reviewer: JayJ
Status: Approved, 04/12/22 

Version: 4.6
Changed by: TrineshL
Project: Import from Word
Change log:
- Declare variables at the top in method tsGetXMLObjectFromXMLString
Reviewer: TrineshL
Review Status: Self Approved

Version: 4.4
Changed by: Vaibhav Rahangdale
Change Dt:  14 Feb 2022
Project: UI Patterns sprint 6
Change Log: Added a method tsGetProcessHomepageRecordId return HomeProcesspage for project
Reviewer: SourabhR
Status: Approved

Version 5.0
Changed by: SourabhR
Change Dt: 15-March-21
Project: Associate Process Guidance to Project
Change log:
  - Support Process Guidance package ETP
    # Add Process Guidance package in same group index as of Package and Folders
Reviewer: Arpan
Status: Approved

Version 5.1
Changed by: SumitC
Change Dt: 31-March-21
Project: Associate Process Guidance to Project
Change log:
    tsUpdateSRE - Created lib Method to created delete and Update SRE record,
    Added support to hide loading mask
Reviewer: SumitC
Status: Self Approved 

Version 5.2
Changed by: SumitC
Change Dt: 22-March-21
Project: Associate Process Guidance to Project
Change log:
    Updated tsGetProcessPageForProject 
Reviewer: SourabhR
Status: Approved

Version 5.3
Changed by: SourabhR
Change Dt: 06-April-22
Project: Associate Process Guidance to Project
Change log:
    Added callback and async support in tsSearchRecordsByName
    Fixed [PR-353563] Process Guidance Page - Error is detected when user tried to navigate to the other process guidance page via Wiki map.
    Added tsCanCreatePackage() to allow registration of new Package ETP
    Added tsIsCloneActionAvailableForPackage() to do action availability of Clone Package action
Reviewer: ArpanG
Status: Approved

Version: 4.4
Changed by: Vaibhav Raut
Change Dt: 09-06-2022
Project: V17 Release 
Change log: 
- Moved tsRearrangeToolsSequence() in common utils as it is reusable (removed from module invoker class)
Reviewer: RasikaI
Review Status: Approved

Version 5.3
Changed by: SourabhR
Change Dt: 08-June-22
Project: V17 Release
Change log:
    Fixed [PR-353621] Add As Dialog - User should not be able to create Component and Catalog Item using Add As
Reviewer: ArpanG
Status: Approved

Version 5.3
Changed by: Sagar Hanwat
Change Dt: 21-June-22
Project: V17 Release
Change log:
    Fixed [PR-355737] How Do I - Raises Error "Invalid regular expression: /[/: Unterminated character class " when Search action using [ - Refer Steps
    Add Method GetProjectTooltip() to get tooltip for project
    Implement feedback on project tooltip 
    Implement dode review feedback : remove method GetProjectTooltip()
Reviewer: SourabhR
Status: Approved

Version 5.31
Changed by: JayJ
Change Dt: 12-June-22
Project: V17 Release
Change log:
    Fixed [PR-356427] Detail Editor  - Inconsistency in visibility of import icon || Import icon is hidden for the main component by-default where as for other component added under it, it is visible.
Reviewer: PiyushJ
Status: Approved, 20-Jun-2022

Version: 5.3
Changed by: Vaibhav Raut
Change Dt: 23-06-2022
Project: V17 Release 
Change log: 
  - Fixed PR-357016 Oneview View Baseline - Throwing error when tried to download file in Baseline mode - refer to the error log
    Added tsDownloadFile method
Reviewer: RasikaI
Review Status: Approved


Version: 6.0
Changed by: SourabhR
Changed Dt: 04 August 2022
Project: V17 USO Feedback - Scope Selection
Change log:
  - Added tsGetSourcePackageOfReusedRefPackage() utility method to get source package info (If record is identified as destination reuse reference package)
Reviewer: SourabhR
Status: Self Approved

Version 5.4
Changed by: SagarHanwat
Change Dt: 12-jun-22
Project: Fix gap in gap report 
Change log:  
  remove max height and overflow as tooltip is not scrollable 
Reviewer: SourabhR
Status: Approved

  Version 5.4
  Changed by: SumitC 
  Change dt: 04 Aug 2022
  Project: V17 DesktopURI Constant
  Change log: 
    - Remove Desktop URI Prefix as we are using constant GConstant.CONST_BASE_DESKTOP_URL
  Reviewer: SumitC
  Status: Self Approved 


Version: 5.4
Changed by: Trinesh
Change Dt: 09-08-2022
Project: Layout Set
Change log: 
    Added tsLoadPackage method
Reviewer: PiyushJ
Review Status: Approved, 10-Aug-2022

Version: 5.5
Changed by: Trinesh
Change Dt: 09-08-2022
Project: Layout Set
Change log: 
    tsLoadPackage method
      - Removed Package.isLoaded check, as Package.load, loads the files only once (So no need of that check)
Reviewer: Trinesh
Review Status: Self Approved

Version: 5.6
Changed by: Trinesh
Change Dt: 14 Sep 2022
Project: Layout Set
Change log: 
    Added method tsIsValidFileName which will check the file name is valid or not
Reviewer: Piyush
Review Status: Approved, 14-Sep-2022

Version 5.5
Changed by: Vaibhav Raut
Change Dt: 07-10-2022
Project: V17 Follow Unfollow
Change log:
- Added tsCanIndicateFollowedRecords, tsGetFollowModelField, tsGetFollowUnfollowHtml method
  TODO: Can be a single line return Ext.isEmpty(LFollowService) === false && LFollowService.getIsAvailable()....
- No need to show unfollow icon, if it is not clickable
- Fixed PR-359652 Follow/Unfollow - Issue List - System is throwing error when user Clone a record which is already followed. Refer to the screenshot and clip.
- Fixed PR-359659 - Follow/Unfollow - The Follow/Unfollow icons vanishes if user increase or decrease the resolution of the browser. 
- Fixed PR-361581 Follow-Un-follow - Baseline Mode -  Follow or bell icon goes missing in detail editor only for those records whose current version is incremented - refer to the screenshot
Reviewer: SourabhR
Review Status: Approved

Version: 5.5
Changed by: VaibhavR
Project: Doc Generate in oneview
Change log:
  - HideSeparatorsFromMenu Moved to tsclsCommonUtils class from tsframReposInfoPanel_Editing class
  - Added ExportOneViewDocument method, which is common 
  - Export document using index.html (same as Document Generate)
Reviewer: RasikaI
Review Status: Approved


Version 6.0
Changed by: RasikaI
Change Dt:28 oct 2022
Project: Multilevel trace report for packages
Change log: Modified tsGetProjectPathTemplate. Added param to override the projet path div style.
Reviewer: ArpanG
Review Status: Approved

Version 5.6
Changed by: Samuel jehoshaphat
Change Dt: 01-11-2022
Change log:
- Added validation method for Email Address
Reviewer: SourabhR
Review Status: Approved

Version 5.70
Changed by: JayJ 
Change dt: 21-Oct-2022
Project: USO Feedback
Change log: 
  - Provided action for Save as Template.
- Added utility method that will check that can we show Save as Template action for 
the record type or not
- Show only for Diagram ETP
Reviewer: PiyushJ
Status: Approved, 04-Nov-2022

Version 5.71
Changed by: JayJ 
Change dt: 08-Nov-2022
Project: USO Feedback
Change log: 
  - FIXED: [PR-363432] USO FBK - Save as Template - Not able to save process guidance diagram as a template, throwing script error.
Reviewer: JayJ
Status: Self Approved, 08-Nov-2022


Version: 5.7
Changed by: Trinesh
Change Dt: 03 Nov 2022
Project: Bugfixes - Dec 2022
Change log: 
    CR-359999 Detail Editor - History - Version History - Change the text displayed when an older version 
      Added method tsGetFormatterVersionNo which will return the formatted version no - Check method for more details
Reviewer: PiyushJ
Review Status: Approved, 11-Nov-2022

Version: 5.8
Changed by: SourabhR
Change Dt: 11 Nov 2022
Project: Bugfixes - Dec 2022
Change log: 
  Implemented [TODO-340225] Info-screen - Do not show Import from Excel for diagramming etp packages
Reviewer: ArpanG
Review Status: Approved
Review Status:

Version: 5.8
Changed by: TrineshL
Change Dt: 11 Nov 2022
Project: Bugfixes - Dec 2022
Change log: 
    - Changed method name from tsGetFormatterVersionNo -> tsGetFormattedVersionNo 
    - tsGetFormatterVersionNo: ALways returns the formatted number in string
Reviewer: TrineshL
Review Status: Self Approved

Version: 5.9
Changed by: SourabhR
Change Dt: 21 Nov 2022
Project: Bugfixes - Dec 2022
Change log: 
    - Corrected logic of tsRearrangeToolsSequence(), DO NOT Consider that all mentioned tools are always available
Reviewer: ArpanG
Review Status: Approved

Version: 5.91
Changed by: SagarHanwat
Change Dt: 28 Nov 2022
Project: Bugfixes - Dec 2022
Change log: 
    - Fixed issue : [PR-363750] Copy-Paste - Throwing error as soon as you select the records from repository and paste it to the HTML fields(Description) .Refer to the Clip and Screenshot.
Reviewer: SourabhR
Review Status: Approved

Version: 6.0
Changed by: SourabhR
Change Dt: 08 Dec 2022
Project: V18.10 Bugfixes
Change log: 
    - Fixed issue : Custom File Record Types are available to be created via Add As (Create record dialog and Bulk Add dialog) 
    - Added check in Import -> If the single etp package whose etp is not available in build, then do not allow import in such package
      # This check was there in How Do I action executor but this needs to be available in main function which generates Import dropdown 
Reviewer: ArpanG
Review Status: Approved

Version: 6.1
Changed by: RasikaI
Changed Dt: 28-Jan-23
Project: Bug Fixes - Jan Release
Change log: Corrected link type id constant
Reviewer: ArpanG
Status: Approved

Version: 6.1
Changed by: SumitC
Changed Dt: 05 Sep 2022
Project: test management
Change log:
  - Added  Enable edit package for gtsGenConsts().GETP_ID.ETP_ID_QA_FOLDER and  gtsGenConsts().GETP_ID.ETP_ID_QA_PACKAGE
Reviewer: SourabhR
Status: Approved

Version 6.2
Changed by: SumitC
Change Dt: 04-10-2022
Project: Test management
Change log:
  Added method FindChildPackageById
Reviewer: ArpanG
Status: Approved

Version: 6.3
Project: Test Management
Changed by: Trinesh
Changed Dt: 23/11/2022
Change log: 
    Passed EtpId in dom utils "tsOpenRecInPopUpWindow" method
Reviewer: JayJ
Status: Approved, 03/01/23 

Version: 6.31
Changed by: JayJ
Change Dt: 17-Jan-2023
Project: Test Management
Change log:
  - Removed hardcoding of Test Case ETP
Reviewer: ArpanG
Status: Approved

Version: 6.32
Changed by: ArpanG
Change Dt: 06-Feb-2023
Project: Test Management
Change log: FindChildPackageById method was not fetching packages correctly.
Reviewer: ArpanG
Status: Self approved

Version: 6.33
Changed by: SourabhR
Change Dt: 08-Feb-2023
Project: Test Management
Change log: 
    - Fixed issue: Bulk Add is not working for Test Set
      # Question: Shall we not allow user to create TEst Set records from Add As, Bulk Add, etc? What's the rational?
    - Do not sync Test Run records in Explorer
      # Added tsCanShowRecordInExplorer() method
    - Do not allow clone for QA Packages
Reviewer: ArpanG
Status: Approved

Version: 6.34
Changed by: SaimaheshV
Change Dt: 23-Feb-2023
Project: Test Management
Change log: 
    Added method - GetCalculatedTestResult()
Reviewer: RasikaI
Status: Approved

Version: 6.34
Changed by: SourabhR
Change Dt: 02-March-2023
Project: Test Management
Change log: 
  Fixed [PR-367168] Test Runs - Document View and Tree List View tabs should be hidden for Test Runs - Refer Steps
Reviewer: ArpanG
Status: Approved

Version: 6.35
Changed by: ArpanG
Change Dt: 03-March-2023
Project: Test Management
Change log: Renamed ETP_IND_TEST_SET_EXECUTION to ETP_IND_TEST_RUN 		  
            Renamed ETP_IND_TEST_CASE_EXECUTION to ETP_IND_TEST_CASE_RESULT 		  
            Renamed ETP_ID_TEST_SET_EXECUTION to ETP_ID_TEST_RUN
            Renamed ETP_ID_TEST_CASE_EXECUTION to ETP_ID_TEST_CASE_RESULT
Reviewer: ArpanG
Status: Self Approved            

Version: 2.9
Changed by: TrineshL
Project: Test Management
Change log: 
  - Implemented CR-367172 Test Management - Instead of "Run Now" action Open "Test Run Explorer" action  should be provided - Refer Justification
Reviewer: Jay
Review Status: Approved, 03/13/23 

Version: 2.10
Changed by: SourabhR
Project: Test Management
Change log: 
  - Added method tsIsValidXML()
  - Corrections in FindChildPackageById()
Reviewer: ArpanG
Review Status: Approved

Version: 2.11
Changed by: TrineshL
Project: Test Management
Change log: 
  - Implemented CR-367542 Test Run - Actions such as Import from Excel, Check in/out should be hidden for Test Runs package - Refer Justification
  15 March 2023
  - Changed icons for "Run now" buttons - As per suggested by Pratik SIr
Reviewer: Jay
Review Status: Approved
Review Date: 03/16/23

      Version: 3.9
      Changed by: Vaibhav Rahangdale
      Change Date : 15 Dec 2021
      Project: Macro -Charts
      Change log:
      Added new Method tsIsFieldApplicableToChart for displaying charts 
      Reviewer: SourabR
      Status: Approved

Version: 3.0
Changed by: SourabhR
Project: AGTeam May2023 Bugfixes
Change log: 
  - Implemented [FBK-370154] New drop-down menu - Move Text, Group inside More sub-menu
Reviewer: ArpanG
Review Status: Approved 

Version : 3.1
Changed by: Samuel  
Project: Bugfixes - May2023
Change Log:
1)Fixed Bug - Kanban Board - Incorrect glyph is displayed for Test Cases, Test Suites package - Refer Desc
Implementation: added QA Package and QA Folder ETPs and  in Ignore List of record load
Reviewer: SourabhR
Status: Approved

Version: 1.6
Changed by: Sagar Hanwat
Project: V19.04 May Release Bug Fixes
Change log: 
    Added defensive check in "tsGetRulesetGroupIdsForRecordType" and "tsGetHintTemplateForRulesetGroup" if Schema object is not found.
Reviewer: Sagar Hanwat
Review Status:self approved.

Version: 1.7
Changed by: SourabhR
Project: V19.04 May Release Bug Fixes
Change log: 
      - USO Feedback: Need "Package" record type in "More" submenu
Reviewer: ArpanG
Review Status: Approved

Version: 2.11
Changed by: Sagar Hanwat 
Project: V19 Create trace link Via copy paste record form editor 
Change log: 
  - Added Method tsGetXYCoordinatesFromEventObject to get cordinate of event
Reviewer: Sourabh 
Review Status: Approved


Version: 2.12
Changed by: Sagar Hanwat
Project: Test Management
Change log: 
    Change in method tsGetTextForEmbedLink to ignore record length global setting.
    - Implemented code review feed back.
Reviewer: SourabhR
Review Status: Approved

Version: 2.12
Changed by: Sagar Hanwat
Project: Test Management
Change log: 
    Add method tsIsRichTextEmpty to check if rich text data is empty.
Reviewer: SourabhR
Review Status: Approved

Version 2.12
Change by: SamuelJ
Change Dt: 12-04-2023
Project: UI Pattern - USO Feedback - 2022
Change Log: Added methods for getting Global settings for reuse 
Reviewer: SourabhR
Status: Approved

Version:2.2
Changed by: Samuel
Changed Dt: 9/05/2023
Project: Record Location Widget Integration
Change log:
- Added method to return html for record Location Widget
Reviewer: SourabhR
Review Status: Approved

Version:2.3
Changed by: Samuel
Changed Dt: 31/05/2023
Project: Record Location Widget Integration
Change log:
- Added method - tsIsTrackingItemSystemPackage - to return wether given record is a tracking item and System Package
Reviewer: SourabhR
Review Status: Approved

Version 2.4
Change By: Samuel
Change Dt: 13-06-2023
Project: Record location Widget implementation
Change Log:
- Added Behaviour in 'show record location widget' to show translucently at first and opaquely when hovered or Selected
Reviewer: SamuelJ
Review Status: Self Approved

Version: 2.5
Project: Record location widget integration
Changed by: Samuel
Changed Dt: 13 June 2023
Change log: 
    Added a period at the end of hint based on preksha ma'am's feedback
Reviewer: SamuelJ
Status: Self Approved

Version: 6.1
Changed by: TrineshL
Change Dt: 16 Feb 2023
Project: Generate Records
Change log: 
    - Added method tsGetFormattedEtpName - This method will return the ETP name in format: ICON ETPNAME [PREFIX]
    07 April 23
    - Added grey icon support in etpImage
Reviewer: PiyushJ
Review Status: Approved with TODO, 10-Apr-2023

Version: 6.2
Changed By: RakeshV
Changed Dt: 05-04-2023
Project: Component Types
Change logs:
      - Applied patch provided by Arpan Sir to ignore create permission check for create adhoc component and Reuse component from client side
        (Implemented - PR-368416 - Checking for 'Create Record ' permissions on primary component even when creating child component of different type)
Reviewer: SourabhR
Review Status: Approved

Change logs:
      - added method tsValidatePITCanCreatePermission() to validate can create permission for PIT
Reviewer: RasikaI
Review Status: 

Version: 6.2
Changed by: TrineshL
Change Dt: 28 April 2023
Project: Generate Records
Change log: 
    - Added support in method tsGetFormattedEtpName to specify - which name should be return - singular or plural name
Reviewer: TrineshL
Review Status: Self Approved

Version: 6.3
Changed By: SourabhR
Changed Dt: 05-05-2023
Project: Copy Paste Component
Change logs:
  - Enabled Clone Action for Components
Reviewer: ArpanG
Review Status: Approved

Version:2.12
Changed by: VinayM
Project: Reorganize Project Hierarchy
Change log:
    Added -  
        tsGetProjectsWithUserRightsOn Method - fetch the project which had rights on by the user
    Implemented: TODO - RasikaI - Method intent just describing the code not the purpose of adding this method
    Implemented: TODO - RasikaI - We can raise assert in this case instead of info message
Reviewer: RasikaI
Review Status: Approved

Version:2.13
Changed by: Sagar Hanwat
Project: June Release 2023
Change log:
    Added -  
        tsConvertNsLinkInfoObjectToString Method to convert nslinkinfo object to base64 string     
Reviewer: SourabhR
Review Status: Approved

Version: 2.13
Changed by: SourabhR
Changed Dt: 26-06-2023
Project: V19.21 Release 
Change log: 
  - Hidden Clone action for Components as it was not tested by QA in Copy-Paste Components branch
Reviewer: SourabhR
Status: Self-Approved

Version: 2.14
Changed by: ArpanG
Changed Dt: 28June2023
Project: v19.50 prod rls
Change log: - Removed hard coding on etp_id_components in tsGetIgnoredRecordTypesForRecordCreation method
            - [PR-372839] Mind Map - Components record types are available for selection when user trying to generate record from mind map. Refer to Screenshot.
Reviewer: ArpanG
Status: Self-Approved

Version: 2.15
Changed by: RasikaI
Changed Dt: 11 July 2023
Project: v19.50 July bug fixes
Change log: Added new parameter to hide extra menu separator form menu
          - Fixed - PR-373447 - Online Reviews - Double clicking the component in package explorer raises error as 'P is undefined' - refer to the error log & screenshot
                - Added new method tsGetDiagramTypeFromEtpId to get diagram type for record types. Need - Getting empty diagram type in case of component etp.
          - Fixed - [PR-373878] Online Reviews - Raises Error "gtsWebDiagramsUtils is not defined" when double click component record  - Refer Steps
                - Moved tsGetDiagramTypeFromEtpId method from digram utils to common utils class.
Reviewer: ArpanG
Status: Approved

Version: 2.15
Changed by: Sagar hanwat
Project: Contextual Help
Change log: 
      - Add method tsGetHelpJSONForHelpCode 
      - In tsOpenHelpForCode use method "gtsTopTeamHelp.OpenHelpForCode" to open help code 
      - Add button object in param of tsOpenHelpForCode method
      - Added open in new window in method tsRearrangePopupDialogToolsSequence 
      - Implemented code review feedback
      - Implemented code review feedback
Reviewer: SourabhR
Review Status: Approved


Version: 2.20
Changed by: JayJ
Changed Dt: 21 July 2023
Project: July bug fixes
Change log: Added utility method to get QtipHint "tsGetQTipHintForHint"
Reviewer: JayJ
Status: Self-Approved

Version 2.21
Change By: SourabhR
Change Dt: 27-Jul-2023
Project: Release July 2023
Change Log: 
  - Fixed [PR-374329] Print Preview Action - HTML tags are seen is in the hint of Print Preview - refer to the screenshot.Reviewer: JayJ
Reviewer: ArpanG
Status: Approved

Version: 2.16
Changed by: SourabhR
Project: Traceability Derivation
Change log: 
      # Added method to perform some client side check when creating new links such as Permission and Ruleset
      - method tsValidateLinksCreation()
Reviewer: ArpanG
Review Status: Approved

Version: 2.17
Changed by: SagarHanwat 
Project: Traceability Derivation
Change log:
      Added method tsGetWindowHeightWidthRelativeToScreen to get window height and width relative to screen
Reviewer: SourabhR
Review Status: Approved

Version 2.3
Changed by: TrineshL
Change Dt: 11 Aug 2023
Project: Aug 2023 - Bugfixes
Change log:
  - Implemented CR-369800 Demo Build - Test Runs - Action to view Test Run in Explorer is missing - Refer Just
Reviewer: JayJ
Review Status: Approved
Review Date: 22-Aug-2023

Version: 2.3
Changed by: TrineshL
Change Dt: 02 May 2023
Project: Generate Records
Change log: 
    - Edited method tsCanShowActionForCreateRecFromTemplate - Rasing an assert for projectId only if when needed
Reviewer: PiyushJ
Review Status: Approved, 18-Jul-2023

Version: 2.15
Changed by: RoshankumarB
Changed Dt: 07 Aug 2023
Project: Relational Fields
Change log: Added method ExtractDispIdFromString
Reviewer: JayJ
Status: Approved

Version: 2.4
Changed by: SAgar hanwat
Change Dt: 02 May 2023
Project: web app performance
Change log: 
    - change loading method of ribbon libary to load on demand
Reviewer: Sourabh 
Review Status: Approved

Version 4.4
Changed by: SourabhR
Change Dt: 11-10-23
Project: Web cache loading performance
Change log:    
  - Added async ability to tsGetHomepageRecordId() method
Reviewer: ArpanG
Review Status:Approved

Version: 2.16
Changed by: ArpanG
Changed Dt: 10 Oct 2023
Project: Oct bug fixes
Change log: Added support to work with multiple projects in different browser tab.
Reviewer: ArpanG
Status: Self Approved

Version: 2.17
Changed by: SamuelJ
Changed Dt: 23 Nov 2023
Project: Enable Folders in projects and Components
Change log: Display sequence of 'Folder' and 'SRS(OneView Doc)' interchanged.
Reviewer: SourabhR
Status: Approved

Version: 2.18
Changed by: SourabhR
Changed Dt: 07 Dec 2023
Project: Enable Folders in projects and Components
Change log: 
- Fixed [PR-380702] Folder ETP - System not allowing to create Folder in supporting location from Collection Editor and displaying the warning message, refer imgs.
Reviewer: ArpanG
Status: Approved

Version: 2.19
Changed by: RasikaI
Changed Dt: 11 Dec 2023
Project: Enable Folders in projects and Components
Change log: Fixed - PR-380697 - Folder ETP - Clone Folder - Configure Package action button is available on Clone Folder window, which throws error when performed, refer desc.
                  - Repository Explorer / Artifacts Tree - Open CloneOneView dialg for folder etp if Clone action performed
Reviewer: ArpanG
Status: Approved

Version: 4.4
Changed by: Sagar Hanwat
Changed Dt: 19 12 2023
Project: Oct 2023 bugfixes
Change log:  
    Save selection of drop position when record is drop in rich text editor 
Reviewer:Sagar Hanwat
Status: self Approved

Version: 2.31
Changed by: HritikB
Changed Dt: 11 Jan 2024
Project: Key Based Authentication
Change log: Added GetStyledExpiryDateForKeyBasedAuth method 
        -Added 3rd Parameter to tsLoadPackage method -> p_strLoadingMsg
Reviewer: TrineshL
Status: Approved, 16 Jan 2024
*/

Ext.define('TS.view.lib.tsclsCommonUtils', {
  extend: 'TS.view.classes.app.tsclsBase',
  privates: {
    /**
   * This method determines if the import from excel action can be shown on the current selected node or not
   * @method pvtCanShowImportFromExcelAction
   * @param {Number} p_intContainerEtpId  - Container EtpId of the currently selected packages
   * @param {Boolean} p_boolIsDiagramEtpPackage - Is currently selected package a Diagram Package?
   * @returns {Boolean} Can Show Import from Excel or not?
   */
    pvtCanShowImportFromExcelAction: function (p_intContainerEtpId, p_boolIsDiagramEtpPackage, p_intForEtpId) {

      //Not showing "Check-In/Out" Button for Test Run
      //CR-367542 Test Run - Actions such as Import from Excel, Check in/out should be hidden for Test Runs package - Refer Justification
      if (gtsCacheUtils().IsETPFromTestRunFamily(p_intForEtpId))
        return false;

      const LEtpIndConsts = gtsGenConsts().GETP_INDICATOR,
        LNotSupportedPackageEtpInds = [LEtpIndConsts.ETP_IND_SRS_DOCUMENT];
      if (p_boolIsDiagramEtpPackage) {
        return false;
      }

      //If the current node is not supported for Import from Excel action then do not show the action.
      return Ext.Array.contains(LNotSupportedPackageEtpInds, gtsCacheUtils().tsGetETPIndicatorFromId(p_intContainerEtpId)) === false;
    },

    pvtCanShowImportFromWordAction: function (p_intEtpId, p_strEtpIndicator, p_boolIsDiagramPackage) {

      if (p_boolIsDiagramPackage === true) {

        return false;
      }//if..

      //DONE - Remove hard coding on Test Case ETP ID by indicator - JayJ
      switch (p_intEtpId) {

        case gtsGenConsts().GETP_ID.ETP_ID_TEST_SET:
        case gtsGenConsts().GETP_ID.ETP_ID_TEST_CASE_RESULT:
        case gtsGenConsts().GETP_ID.ETP_ID_TEST_CONFIGURATION:
        case gtsGenConsts().GETP_ID.ETP_ID_DATA_DEFINITION:
        case gtsGenConsts().GETP_ID.ETP_ID_TEST_RUN:

          return false;
      }

      switch (p_strEtpIndicator) {

        case gtsGenConsts().GETP_INDICATOR.ETP_IND_WIKI_PAGE:
        case gtsGenConsts().GETP_INDICATOR.ETP_IND_COLLECTIONS:
        case gtsGenConsts().GETP_INDICATOR.ETP_IND_TEST_CASES:

          return false;
      }

      return true;
    },

    pvtCanImportInPackage: function (p_intContainerId) {
      /*
        * @method pvtCanImportInPackage
        * This method will check whether we can import in package or not
        *
        * @private
        * @param {null}
        * @return {null}
        */
      Assert(Ext.isNumber(p_intContainerId) === false || p_intContainerId <= 0, "Unable to check whether we can import in package or not for the container id: " + p_intContainerId + " in pvtCanImportInPackage() method of tsCommonUtils class.");

      return (gtsCacheUtils().tsIsContainerReusedDestination(p_intContainerId) === false);
    },

    /**
     * Splits the data string into smaller strings based on the provided regular expression.
     * This function is intended for internal use and not for direct external usage.
     *
     * @param {string[]} p_arrData An array of data strings to split.
     * @param {RegExp} p_regTag The regular expression for matching the splitting criteria.
     * @returns {string[]} An array of split data strings.
     * @private
     */
    pvtSplitDataByTag: function (p_arrdata, p_regTag) { 
      // Check if p_arrdata and p_regTag are provided and are of the correct type
      if (!Array.isArray(p_arrdata) || typeof p_regTag !== 'object' || !(p_regTag instanceof RegExp)) {
        TS.App.Feedback.ShowErrMsg("Invalid input parameters for splitting data by tag.");
        return [];
      }
      return p_arrdata.flatMap((p_strDataItems) => {
        const LRegexMatchedText = p_strDataItems.matchAll(p_regTag);
        const LFinalResult = [];
        let LStartIndex = 0;

        for (const LMatchedItem of LRegexMatchedText) {
          const LMatchedText = LMatchedItem[0];
          const LMatchIndex = LMatchedItem.index;

          // Add the substring before the match (if any)
          if (LStartIndex < LMatchIndex) {
            LFinalResult.push(p_strDataItems.substring(LStartIndex, LMatchIndex));
          }

          LFinalResult.push(LMatchedText);
          LStartIndex = LMatchIndex + LMatchedText.length;
        }

        // Add the remaining substring after the last match (if any)
        if (LStartIndex < p_strDataItems.length) {
          LFinalResult.push(p_strDataItems.substring(LStartIndex));
        }

        return LFinalResult;
      });
    },

    /**
     * Removes HTML tags from the input string using the provided regular expression.
     * This function is intended for internal use and not for direct external usage.
     *
     * @param {string[]} p_arrData An array of data strings to remove tags from.
     * @param {RegExp} p_regexTag The regular expression for matching tags.
     * @returns {string[]} An array of strings with the tags removed.
     * @private
     */
    pvtRemoveSelectedTag: function (p_arrData, p_regexTag) {
      // Check if p_arrData is an array and p_regTag is a valid regular expression
      if (!Array.isArray(p_arrData) || !p_regexTag || !(p_regexTag instanceof RegExp)) {
        TS.App.Feedback.ShowErrMsg('Invalid input parameters.');
        return [];
      }

      // Perform the operation if p_arrData is not empty
      if (p_arrData.length > 0) {
        return p_arrData.flatMap(str => {
          // Check if str is a string
          if (typeof str !== 'string') { 
            return [];
          }

          // Split the string using the regular expression
          return str.split(p_regexTag).map(str => str.trim()).filter(Boolean);
        });
      } else { 
        return [];
      }
      // return p_arrData.flatMap(str => str.split(p_regTag).filter(Boolean));
    },

   /**
   * @private
   * Checks if the provided data likely originates from a spreadsheet based on patterns.
   *
   * @param {string[]} p_arrData - Array of strings containing clipboard data.
   * @returns {boolean} True if the data suggests it's from a spreadsheet, false otherwise.
   */
    pvtIsCopiedDataFromSpreadSheet: function (p_arrData) {
      if (!p_arrData || !p_arrData[0] || !p_arrData[0].length)
        return false;

      const LMe = this;
      // Define patterns to match typical spreadsheet data characteristics
      const LTagsToIgnoreBeforeParsing = [
        /<google-sheets-html-origin\b[^>]*>|<\/google-sheets-html-origin>/gi
      ];

      // Check if any pattern matches the data
      for (const LTagRegex of LTagsToIgnoreBeforeParsing) {
        p_arrData = LMe.pvtRemoveSelectedTag(p_arrData, LTagRegex);
        if (!p_arrData || !p_arrData.length)
          return false;
      }

      Assert(!p_arrData && p_arrData.length !== 1 && typeof p_arrData[0] !== 'string' , "Error while Parsing table data" );

      const LTrimmedData = p_arrData[0].trim();
      return LTrimmedData.startsWith('<table') && LTrimmedData.endsWith('</table>');
    },

    /**
     * @private
     * Extracts data from the first HTML table within the provided array of strings.
     * Performs basic error handling for parsing, table structure, and headers.
     * Categorizes each cell as "name" or "desc" based on header text.
     *
     * @param {string[]} p_arrData - Array of strings containing HTML data.
     * @returns {object[]} Array of objects containing extracted data in the format:
     *   { fieldType: 'name' | 'desc', extractedData: string }
     * @throws {Error} If HTML parsing fails.
     */
    pvtExtractTableData(p_arrData) {
      if (!p_arrData || p_arrData.length === 0) {
        TS.App.Feedback.ShowErrMsg("No data to extract");
        return [];
      }
      let LHtmlFromCopiedTable;

      try {
        LHtmlFromCopiedTable = new DOMParser().parseFromString(p_arrData[0], "text/html");
      } catch (error) {
        TS.App.Feedback.ShowErrMsg("Error parsing HTML:", error);
        return [];
      }

      // Get table rows with null check
      let LRowsDataInTable = LHtmlFromCopiedTable.getElementsByTagName("tr");
      if (!LRowsDataInTable || !LRowsDataInTable.length) {
        TS.App.Feedback.ShowErrMsg("No table rows found");
        return [];
      }

      // Extract headers
      let LHeadersOfTableArr = LRowsDataInTable[0].getElementsByTagName("td");
      if (!LHeadersOfTableArr || !LHeadersOfTableArr.length) {
        return []; // Early exit if no headers
      }

      let LTotalNumberOfColumns = LHeadersOfTableArr.length; 

      let LDataInCells = [];

      // Extract data  
      for (let LRow of LRowsDataInTable) {
        let LCellsInRowArr = LRow.getElementsByTagName("td");

        if (!LCellsInRowArr || LCellsInRowArr.length === 0) continue;

        for (let LCell of LCellsInRowArr) {
          LDataInCells.push(LCell.innerHTML);
        }
      }

 
      let LIsHeaderADescriptionArr = [];
      for (let LIndex = 0; LIndex < LHeadersOfTableArr.length; LIndex++) {
        let LHeaders = LHeadersOfTableArr[LIndex];

        // Check if current element exists and has innerText property
        if (!LHeaders || !LHeaders.innerText) {
          LIsHeaderADescriptionArr.push(false); // Push false for missing headers
          continue; // Skip to next iteration
        }

        if (LHeaders.innerText.toLowerCase().includes("description")) {
          LIsHeaderADescriptionArr.push(true);
        } else {
          LIsHeaderADescriptionArr.push(false);
        }
      } 

      let LFormattedObjectForStore = []; 

      for (let LIndex = 0; LIndex < LDataInCells.length; LIndex++) {
        LFormattedObjectForStore.push({
          fieldType: LIsHeaderADescriptionArr[LIndex % LTotalNumberOfColumns] ? 'desc' : 'name',
          extractedData: LDataInCells[LIndex]
        });
      } 

      return LFormattedObjectForStore;
    },
  },

  constructor: function(p_Config, p_Owner) {
    /*
    * Desc: Invalidate this collection forcefully
    *
    * Access: Private
    *
    * @param{String}: Table Name for this collection
    *
    * @return{Void}: No return value.
    *
    */

    var LMe = this;

    LMe.callParent(arguments);

    //Save reference for the owner - webapputils
    LMe.FWebAppUtils = p_Owner;

    LMe.FWikiHomeRecordCollection = new Ext.util.HashMap();
    
    //For Print preview
    LMe.FAfterPrintEventhandled = false;
    LMe.FPageTitle = "";
    
    
  },

  destroy: function() {
    /*
    * Desc: Invalidate this collection forcefully
    *
    * Access: Private
    *
    * @param{String}: Table Name for this collection
    *
    * @return{Void}: No return value.
    *
    */

    var LMe = this;

    //Destroy task runner which we started for load syncfusion ejs1
    if( Ext.isEmpty( LMe.FTaskRunner ) === false ){
      LMe.FTaskRunner.stopAll(true);
      Ext.destroy( LMe.FTaskRunner );
      LMe.FTaskRunner = null;
    }

    //Destroy ETp Action of Update sre
    if (Ext.isEmpty(LMe.FEtpActionsUpdateSRE) === false) {
        Ext.destroy(LMe.FEtpActionsUpdateSRE);
        LMe.FEtpActionsUpdateSRE = null ;
    }

    LMe.callParent( arguments );
  },

  tsGetOpenRecHtmlElement: function(p_intRecId, p_intEtpId, p_strBaselineId, p_boolReadOnly, p_boolReviewMode, p_boolCanOpenRecByUqId, p_intUqId, p_strAttributeForHtmlEle, p_strContenToBeWrappedByHtmlElement, p_boolOneViewMode) {
    /**
    * @method GetOpenRecHtmlElement
    * Desciption: This function will return anchor tag based on genConts to open record details in  pop-up dialog or new window.
    *
    * PUBLIC
    *
    * format - @param{dataType of param = defalut value, mandatory/optional}
    *
    * @param{int = -1,mandatory} p_intRecId: Record Id which needs to be opened.
    *
    * @param{int = -1,mandatory} p_intEtpId: record type Id of record.
    *
    * @param{string = '',mandatory} p_strBaselineId: baseLine Id of record.
    *
    * @param{bool = false} p_boolReadOnly: flag is record needs to be opened in Read-only mode.
    *
    * @param{bool = false} p_boolReviewMode: flag for opening record in review mode.
    *
    * @param{bool = false} p_boolCanOpenRecByUqId: flag for opening record using its unique Id.
    *
    * @param{int = -1} p_intUqId: Unique Id of record.
    *
    * @param{str = ''} p_strAttributeForHtmlEle: Any attributes which need to be added in link/anchor tag should be added here.eg: 'data-attribute= abc'
    *
    * @param{str = ''} p_strContenToBeWrappedByHtmlElement: Any text which needs to be shown inside the link/anchor tag needs to be added here.
    *                  eg: '<a><span>Click Here!</span></a>';
    *
    * @param{bool = true} p_boolDisplayAsPopUp: flag to show link as pop-up or in new window.
    *
    * @param{bool = false} p_OneViewMode: flag to set OneView Mode.
    *
    * @return{str} Link to show record in pop-up window or new window.
    */

    var LResult = '',
        LLink = '',
        LCanOpenRecInModalWindow = false,
        LDisplayAsPopUp = true,
        LHtml = [];

    LCanOpenRecInModalWindow = gtsCommonUtils().tsCanOpenLinkedRecordInModalWindow();

    p_strBaselineId = Ext.isEmpty(p_strBaselineId)? '1' : p_strBaselineId;

    p_boolReadOnly = Ext.isBoolean(p_boolReadOnly)? p_boolReadOnly :false ;

    p_boolOneViewMode = Ext.isBoolean(p_boolOneViewMode)?  p_boolOneViewMode :false;

    p_boolReviewMode = Ext.isBoolean(p_boolReviewMode)?  p_boolReviewMode : false;

    p_boolCanOpenRecByUqId = Ext.isBoolean(p_boolCanOpenRecByUqId) ?  p_boolCanOpenRecByUqId : false;


    if(p_boolCanOpenRecByUqId === true){
      Assert(Ext.isEmpty(p_intUqId),'Unable to open record details, since unique id of record was found invalid.');
    }
    else{
      Assert(Ext.isEmpty(p_intRecId),'Unable to open record details, since record id was found invalid.');
      p_intUqId = -1;
    }

    Assert(Ext.isEmpty(p_intEtpId),'Unable to open record details, since record type id was found invalid.');

    if(LCanOpenRecInModalWindow === false ){

      LLink = gtsGenUtils().GetPermaLinkToShowDetailEditor(p_intRecId, p_intEtpId, p_strBaselineId);

      LHtml = ['<a target="_blank" href= "',
               LLink,
               '" ',
               p_strAttributeForHtmlEle,
               ' >',
               p_strContenToBeWrappedByHtmlElement,
               '</a>'];
      LResult = LHtml.join('');
    }
    else{

      LDisplayAsPopUp = LCanOpenRecInModalWindow;

    //Changed Logic to check for Project Changed By :Vaibhav Rahangdale
      if(gtsCacheUtils().tsIsProjectRecordType(p_intEtpId)){

        let LCacheProject = TS.App.Cache.Projects().ById(p_intRecId);
        Assert(Ext.isEmpty(LCacheProject) === true, "Invalid container cache found in pvtCheckCanAddRemoveRecordTypePermission method of tsclsMinutesofMeetingWizard class.");
        if(LCacheProject.IsLoggedInUserTeamMember()){
      LHtml = ['<a ',p_strAttributeForHtmlEle,' href="javascript:void(0)"',
                   ' onclick="TS.App.Invoker.DisplayProjectEditor(',p_intRecId,')"',
                   ' >',p_strContenToBeWrappedByHtmlElement,'</a>'];
        }else{
          LHtml = ['<a ',p_strAttributeForHtmlEle,' href="javascript:void(0)"',
                   ' onclick="TS.App.Feedback.ShowInfoMsg(\'The record could not be opened for one of the following reasons:\',\'<br>- The record does not exist.<br>- You do not have team member privileges in this project.\');"',
                   ' >',p_strContenToBeWrappedByHtmlElement,'</a>'];
        }
      }else{

        LHtml = ['<a ',p_strAttributeForHtmlEle,' href="javascript:void(0)"',
               ' onclick="gtsDOMUtils().tsOpenRecInPopUpWindow(',
               'event,',p_intRecId ,
               ', \'',p_intEtpId,'\', ',
               '\'',p_strBaselineId,'\', ',
               p_boolReadOnly,', ',
               p_boolReviewMode,', ',
               LDisplayAsPopUp,', ',
               p_intUqId,', ',
               p_boolCanOpenRecByUqId,', ',
               p_boolOneViewMode,', ',
               ')"',
               ' >',p_strContenToBeWrappedByHtmlElement,'</a>'];
      }
      LResult = LHtml.join('');
    }

    return LResult;
  },

  tsGetOpenRecByVersionHtmlElement: function(p_intRecId, p_intEtpId, p_strVersion, p_boolReviewMode, p_strAttributeForHtmlEle, p_strContentToBeWrappedByHtmlElement) {
    /**
    * @method tsGetOpenRecByVersionHtmlElement
    * This method will return a html element which will open record by version based on the provided params
    *
    * @param {Number} Record Id
    * @param {Number} Record Type Id
    * @param {String} Version number
    * @param {Boolean} p_ReviewMode To Show Detail Editor in Package mode. [Optional: default false]
    * @param {String} Attributes of html element [Optional]
    * @param {String}Contents to be wrapped in element
    */

    //validate mandatory params
    Assert(Ext.isNumber(p_intRecId) === false || p_intRecId <= 0 ,'Unable to open record details for record id: '+ p_intRecId);
    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0,'Unable to open record details for record type id: '+ p_intEtpId);
    Assert(Ext.isString(p_strVersion) === false || Ext.isEmpty(p_strVersion),'Unable to open record details for version: '+ p_strVersion);

    //default params
    p_boolReviewMode = Ext.isBoolean(p_boolReviewMode)?  p_boolReviewMode : false;

    let LResult = '',
        LHtml = [];

    //Open project editor if etp id is of project
    //Changed Logic to check for Project Changed By :Vaibhav Rahangdale
    if(gtsCacheUtils().tsIsProjectRecordType(p_intEtpId)){
      let LCacheProject = TS.App.Cache.Projects().ById(p_intRecId);
      if(Ext.isEmpty(LCacheProject) === false && LCacheProject.IsLoggedInUserTeamMember()){
        LHtml = ['<a ',p_strAttributeForHtmlEle,' href="javascript:void(0)"',
                 ' onclick="TS.App.Invoker.DisplayProjectEditor(',p_intRecId,')"',
                 ' >',p_strContentToBeWrappedByHtmlElement,'</a>'];
      }else{
        LHtml = ['<a ',p_strAttributeForHtmlEle,' href="javascript:void(0)"',
                 ' onclick="TS.App.Feedback.ShowInfoMsg(\'The record could not be opened for one of the following reasons:\',\'<br>- The record does not exist.<br>- You do not have team member privileges in this project.\');"',
                 ' >',p_strContentToBeWrappedByHtmlElement,'</a>'];
      }
    }else{

      LHtml = ['<a ',p_strAttributeForHtmlEle,' href="javascript:void(0)"',
               ' onclick="gtsDOMUtils().tsOpenRecByVersion(',
               'event,',p_intRecId ,
               ', \'',p_intEtpId,'\', ',
               '\'',p_strVersion,'\', ',
               p_boolReviewMode,', ',
               true,', ',
               ')"',
               ' >',p_strContentToBeWrappedByHtmlElement,'</a>'];
    }

    LResult = LHtml.join('');

    return LResult;
  },

  tsCanOpenLinkedRecordInModalWindow: function() {
    /**
    * @method tsCanOpenLinkedRecordInModalWindow
    * Returns flag to open record in new window or pop-up dialog.
    * default is true to open it in pop-up
    *
    * @param {None}
    * @return {bool} flag to open record in pop-up or new window.
    */

    var LResult = true;

    //todo: in future it may come from global settings.currently we are setting default as true.

    return LResult;
  },

  tsCanShowQuickRecordView: function() {
    /**
    * @method tsCanShowQuickRecordView
    * Returns flag to show quick record view on hover over links
    * default is false
    *
    * @param {None}
    * @return {bool} flag to show quick record view on hover over links
    */

    var LResult = false;


    return LResult;
  },

  tsCanAddRemoveInBaseline: function(p_intProjectId) {
    /**
    * @method tsCanAddRemoveInBaseline
    * Returns flag to add remove from baseline
    * default is false
    *
    * @param {None}
    * @return {bool} p_intProjectId: flag to add remove from baseline
    */

    var LResult = false,
        LPermissions,
        LParam = 'projects/' + p_intProjectId + '/' + "PITS/BSL/permissions",
        LURL = gtsGenUtils().tsGetURLInProjectContext(LParam);


    Ext.Ajax.request({
      url: LURL,
      async: false,
      method: "GET",
      success: function( p_response ){
        LPermissions = gtsGenUtils().tsJsonDecode( p_response.responseText );
        if (Ext.isEmpty(LPermissions) === false) {
          LResult = LPermissions.canAddRecordsToBaseline;
        }

      },

      failure: function( response ){
        //Handled at app level
      }
    });

    return LResult;
  },

  tsGetBaselinePermissions: function(p_intProjectId) {
    /**
    * @method tsCanAddRemoveInBaseline
    * Returns flag to add remove from baseline
    * default is false
    *
    * @param {None}
    * @return {bool} p_intProjectId: flag to add remove from baseline
    */

    var LPermissions = null,
        LParam = 'projects/' + p_intProjectId + '/' + "PITS/BSL/permissions",
        LURL = gtsGenUtils().tsGetURLInProjectContext(LParam);


    Ext.Ajax.request({
      url: LURL,
      async: false,
      method: "GET",
      success: function( p_response ){
        LPermissions = gtsGenUtils().tsJsonDecode( p_response.responseText );
      },

      failure: function( response ){
        //Handled at app level
      }
    });

    return LPermissions;
  },

  tsGetWebURLForRecord: function(p_intEtpId, p_intRecordId, p_intBaselineId, p_boolIsCurrentVersion, p_intUqId) {
    /*
    * @method tsGetWebURLForRecord
    * Create WebURL based on the parameters passed.
    *
    * @param {p_intEtpId, p_intRecordId, p_intBaselineId, p_boolIsCurrentVersion, p_intUqId}
    * 1. ETP ID
    * 2. RecordID
    * 3. BaselineID (optional)
    * 4. IsCurrentVersion
    * 5. UQ ID (Only pass when IsCurrentVersion flag is false)
    * @return {string} WebURL
    */

    //Validate Params
    Assert(Ext.isEmpty(p_intEtpId),"Unable to generate WebURL. Incorrect ETP ID provided in tsGetWebURLForRecord() of tsclsCommonUtils class.");
    Assert(Ext.isEmpty(p_intRecordId),"Unable to generate WebURL. Incorrect Record ID provided in tsGetWebURLForRecord() of tsclsCommonUtils class.");
    //if not current version then uq id is mandatory
    if(p_boolIsCurrentVersion === false){
      Assert(Ext.isEmpty(p_intUqId), "Unable to generate WebURL. Incorrect UQ ID provided in tsGetWebURLForRecord() of tsclsCommonUtils class.");
    }
    if(Ext.isEmpty(p_intBaselineId) === true){
      p_intBaselineId = gtsGenConsts().GMetaConst.CURRENT_BASELINE_ID;
    }

    var LBaseURL = GConstant.BASE_URL,
        LWebURL;

    //Get RecordArea "repositoryobjects"/ "trackingitems"

    if (LBaseURL.search(GConstant.HISTORY_COMMAND_URL_SEPERATOR) > -1 && LBaseURL.search(GConstant.HISTORY_COMMAND_URL_SEPERATOR) === LBaseURL.length - 1) {
      LBaseURL = LBaseURL.replace('#', '');
    }

    if(p_boolIsCurrentVersion){
      //Loaded Record is either current version or the record is baselined

      //Get Permalink in baseline mode
      //USO Feedback: When generating Permalink of Wiki, the permalink needs to be always of Wiki Editor instead of detail editor
      LWebURL = gtsGenUtils().GetPermaLinkToShowDetailEditor(
        p_intRecordId,
        p_intEtpId,
        p_intBaselineId);
    }
    else {
      //Record is versioned
      //Get permalink with UQ id
      LWebURL = gtsGenUtils().GetPermaLinkForVersionToShowDetailEditorByUQId(
        p_intUqId,
        p_intEtpId,
        p_intRecordId);
    }

    LWebURL = LBaseURL + LWebURL;

    return LWebURL;
  },

  tsGetWinURLForRecord: function(p_intEtpId, p_intRecordId, p_boolIsCurrentVersion, p_intUqId, p_intBaselineId) {
    /*
    * @method tsGetWinURLForRecord
    * Create WinURL based on the parameters passed.
    *
    * @param {p_intEtpId, p_intRecordId, p_boolIsCurrentVersion, p_intUqId}
    * 1. ETP ID
    * 2. RecordID
    * 3. IsCurrentVersion
    * 4. UQ ID (Only pass when IsCurrentVersion flag is false)
    * @return {string} WinURL
    */

    //Validate Params
    Assert(Ext.isEmpty(p_intEtpId),"Unable to generate WinURL. Incorrect ETP ID provided in tsGetWinURLForRecord() of tsclsCommonUtils class.");
    Assert(Ext.isEmpty(p_intRecordId),"Unable to generate WinURL. Incorrect Record ID provided in tsGetWinURLForRecord() of tsclsCommonUtils class.");

    //if not current version then uq id is mandatory
    if(p_boolIsCurrentVersion === false){
      Assert(Ext.isEmpty(p_intUqId), "Unable to generate WinURL. Incorrect UQ ID provided in tsGetWinURLForRecord() of tsclsCommonUtils class.");
    }

    var LRecordArea = "",
        LBaseURL = "OpenRecord/",
        LParams = "",
        LURL = "",
        LIsTrackingItem;

    LIsTrackingItem = gtsCacheUtils().tsIsETPTrackingItem(p_intEtpId);

    //"RepositoryObject" or "TrackingItem"
    LRecordArea = LIsTrackingItem ? gtsGenConsts().GNET_CLIENT_PERMALINK_CONST.CMD_REC_AREA_TRACK : gtsGenConsts().GNET_CLIENT_PERMALINK_CONST.CMD_REC_AREA_REPOS;

    LParams = "?" + "UID="+ p_intRecordId;

    if(p_boolIsCurrentVersion === false){
      LParams += "&" + "ABSID=" + p_intUqId;
    }

    if(Ext.isEmpty(p_intBaselineId) === false){
      LParams += "&" + "BSLID=" + p_intBaselineId;
    }

    //Create complete URI for Win.
    LURL = LBaseURL + LRecordArea + LParams;

    return LURL;
  },

  tsGetWinURLForEditor: function(p_intEtpId, p_intRecordId) {
    /*
    * @method tsGetWinURLForEditor
    * Create WinURL based on the parameters passed.
    *
    * @param {p_intEtpId, p_intRecordId}
    * 1. ETP ID
    * 2. RecordID
    * @return {string} WinURL
    */

    //Validate Params
    Assert(Ext.isEmpty(p_intEtpId),"Unable to generate WinURL. Incorrect ETP ID provided in tsGetWinURLForEditor() of tsclsCommonUtils class.");
    Assert(Ext.isEmpty(p_intRecordId),"Unable to generate WinURL. Incorrect Record ID provided in tsGetWinURLForEditor() of tsclsCommonUtils class.");

    let LRecordTypeName = "",
        LBaseURL = "OpenEditor/",
        LParams = "",
        LURL = "";

    if( p_intEtpId === 950 ){
      LRecordTypeName = 'TestCaseExecution';
    }
    else{
      LRecordTypeName = gtsCacheUtils().tsGetETPNameFromId( p_intEtpId );
    }

    LParams = "?" + LRecordTypeName + "ID="+ p_intRecordId;

    //Create complete URI for Win.
    LURL = LBaseURL + LRecordTypeName + LParams;

    return LURL;
  },

  GetDescriptionFieldForETPId: function(p_intETPId) {
    /*
    * @method GetDescriptionFieldForETPId
    * This method will return the description field for the provided etp id
    *
    * @param{Number}: ETP Id
    * @return{String}: Respective Descrition field
    */

    var LDescField = '';

    //return if etp Id id not valid
    if( Ext.isEmpty( p_intETPId ) === true ){

      return LDescField;
    }//if..

    const LECLIdPrefix = gtsCacheUtils().tsGetECLIdPrefixForETPId( p_intETPId );
    //Todos: Need to check if "ITM_DESCR" field is there in DB or not
    if( ( LECLIdPrefix === gtsGenConsts().GTABLE_INDICATORS.ETP_TBL_IND_ITM ) ){

      LDescField = LECLIdPrefix+'_DESCR';
    }//if..
    else{
      LDescField = gtsMetadataConsts().DBFieldNames().DB_COL_NAME_ELM_RICH_DESCR ;
    }//if..

    return LDescField;
  },

  tsGetOneViewRecordUniqueId: function(p_intRecordId, p_intSectionId) {
    var LRecordUniqueId ;

    Assert( Ext.isEmpty( p_intRecordId ) || Ext.isEmpty( p_intSectionId ), "Cannot create record's unique for oneView. Invalid parameters found in tsGetOneViewRecordUniqueId() of CommonUtils class" );

    LRecordUniqueId = p_intRecordId.toString() + p_intSectionId.toString();

    return LRecordUniqueId;
  },

  /**
  * This method validates whether the given email address is valid or not
  * @method tsValidateEmailAddress
  * 
  *
  * @param {String} p_strEmailAddress - Email Address to be validated
  * 
  * @return {Boolean} true if valid email
  */
  tsValidateEmailAddress:function(p_strEmailAddress){ 
    /**
     * @todo SourabhR - Implemented - Validate the parameter. If empty, then return false, do not execute below code 
     */

     if(Ext.isString(p_strEmailAddress) === false || Ext.isEmpty(p_strEmailAddress) === true){
      return false;
    }

    //Trim leading and trailing spaces of the email address (if any)
    p_strEmailAddress = p_strEmailAddress.trim();

    var LRegEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return LRegEx.test( p_strEmailAddress);
  },

  tsCanCreateRecordInContainer: function(p_intNewRecordEtpId, p_intReferenceEtpId, p_intContainerRecordId) {
    /*
    * @method tsCanCreateRecordInContainer
    * This method will return whether the new record type record can be created inside reference recordtype or not
    *
    * @param: p_intNewRecordEtpId {Number}
    *					p_intReferenceEtpId {Number}
    *					p_intContainerRecordId {Number}
    * @return{Object} Result and ErrorCode( if result is false)
    */

    /*
    _____________________________________________________________________________________________________________________

    E.g - Creating Actor{p_intNewRecordEtpId} record as a child of UserStory of given package

     Package_record -   ------>{p_intSectionId}
      |
       - User_Story_record    ------> {p_intReferenceEtpId}
          |_ Actor_Record_1          As per package structure we can create actor as a child of User Story record only
      |_ Use_Case_Record


    Output =>
     Package_record
      |
       - User_Story_record
          |_ Actor_Record_1
          |_ Actor_Record_2 ---- Newly created record
      |_ Use_Case_Record

    ______________________________________________________________________________________________________________________

    LIMITATIONS:

    We can create new record as child of reference recordtype only, limitations when creating sibling of reference record is as follows

      Package1
        |_ Business_Process
           |_ User_Story    --------- {p_intReferenceEtpId}
             |_ Actor
        |_ User_Story      ---------- {p_intReferenceEtpId}
           |_ Actor

      In Above package Structure, if reference etpId is 1060 i.e UserStory and user wants to create sibling of UserStory record,
        - As per first UserStory record, allowed sibling is NONE
        - As per second userstory record, allowed sibling is Business Process
    */

    let LResult = {
          errorCode: "",
          result: true
        },
        LContainerCacheObj,
        LPkgPitIds = [],
        LCanCreateRecordTypeIds = [],
        LRSSId;


    Assert( Ext.isEmpty( p_intNewRecordEtpId ) || Ext.isNumber( p_intNewRecordEtpId ) === false, "Cannot create record inside package. Invalid p_intNewRecordEtpId parameter found in tsCanCreateRecordInContainer() of CommonUtils class" );
    Assert( Ext.isEmpty( p_intReferenceEtpId ) || Ext.isNumber( p_intReferenceEtpId ) === false, "Cannot create record inside package. Invalid p_intReferenceEtpId parameter found in tsCanCreateRecordInContainer() of CommonUtils class" );
    Assert( Ext.isEmpty( p_intContainerRecordId ) || Ext.isNumber( p_intContainerRecordId) === false , "Cannot create record inside package. Invalid p_intContainerRecordId parameter found in tsCanCreateRecordInContainer() of CommonUtils class" );

    //Package cache is required for further operations
    LContainerCacheObj = TS.App.Cache.Containers().ById(p_intContainerRecordId);

    if(Ext.isEmpty(LContainerCacheObj)){
      TS.App.Feedback.ShowInfoMsg("Unable to find section information in cache for id: "+p_intContainerRecordId );
      return;
    }

    //Fixed [PR-350507] Components and assemblies - showing wrong message (i.e. privilege message) when going to create traced record for a published component project. Need to show the correct reason.
    //Cannot create record under a published component
    if(LContainerCacheObj.IsPublishedComponent() === true){
      LResult.errorCode = gtsGenConsts().CreateRecordErrorCodes().PUBLISHED_COMPONENT;
      LResult.result = false;
      return LResult;
    }

    //Preliminary hardcoded check for text recordtype in package
    //Only text records can be created inside a text record
    if(p_intReferenceEtpId === gtsGenConsts().GETP_ID.ETP_ID_TEXT){

      if( p_intNewRecordEtpId === gtsGenConsts().GETP_ID.ETP_ID_TEXT){
        return LResult;
      }else{
        LResult.errorCode = gtsGenConsts().CreateRecordErrorCodes().PACKAGE_MODE_NO_FOLLOW_RSS;
        LResult.result = false;
        return LResult;
      }
    }

    //Step1: Check whether the newly created recordtype is included in package or not
    LPkgPitIds = gtsCacheUtils().tsGetContainerPITIds(p_intContainerRecordId);

    if(Ext.Array.contains(LPkgPitIds,p_intNewRecordEtpId) === false){

      LResult.errorCode = gtsGenConsts().CreateRecordErrorCodes().PACKAGE_MODE_NO_PIT;
      LResult.result = false;
      return LResult;
    }
    //Fixed [PR-324275] OneView Document Editor - Does not load Toolbar, Right Click actions for Text Record at root in OneView Document - Refer Steps
    //Fixed [PR-324274] OneView Document Editor - Raises Error in Console "Unable to get area for the ETP. Passed ETP" when Selected Text Section in OneView Document editor - Refer Steps
    //Temporary disabling Group and Text ETP Creation at root level of OneView until OneView As Package branch is not merged to main branch
    if( p_intReferenceEtpId === gtsGenConsts().GETP_ID.ETP_ID_SRS_DOCUMENT &&
       (p_intNewRecordEtpId === gtsGenConsts().GETP_ID.ETP_ID_COLLECTION_FOLDER ||
        p_intNewRecordEtpId === gtsGenConsts().GETP_ID.ETP_ID_TEXT) ){
      LResult.errorCode = gtsGenConsts().CreateRecordErrorCodes().PACKAGE_MODE_NO_PIT;
      LResult.result = false;
      return LResult;
    }

    //Step 2: Check whether the newly created recordtype is having canCreate permission inside package
    LCanCreateRecordTypeIds = LContainerCacheObj.GetCanCreateRecordTypeIds();
    if(Ext.Array.contains(LCanCreateRecordTypeIds,p_intNewRecordEtpId) === false){
      LResult.errorCode = gtsGenConsts().CreateRecordErrorCodes().PACKAGE_MODE_NO_CREATE_ACCESS;
      LResult.result = false;
      return LResult;
    }

    //Fixed [PR-298931] Repository Explorer - System raises error when a section is cloned and destination section under which the section is being cloned has package structure applied. - refer steps & Screenshot
    if(p_intNewRecordEtpId === gtsGenConsts().GETP_ID.ETP_ID_PACKAGE ||
       p_intNewRecordEtpId === gtsGenConsts().GETP_ID.ETP_ID_COLLECTION_FOLDER ||
       p_intNewRecordEtpId === gtsGenConsts().GETP_ID.ETP_ID_TEXT ||
       p_intNewRecordEtpId === gtsGenConsts().GETP_ID.ETP_ID_FOLDER_PACKAGE ||
       p_intNewRecordEtpId === gtsGenConsts().GETP_ID.ETP_ID_ONEVIEW_TEXT_SECTION){
      return LResult;
    }

    //Step 3: If the destination package is having a package structure, make sure that the new record follows defined package structure or not
    LRSSId = LContainerCacheObj.PackageStructureId();


    //NG BIZ RULE: If current record is not hierarchical, Do not show same recordtype in new child dropdown
    if(LRSSId === 0 &&
       p_intReferenceEtpId === p_intNewRecordEtpId &&
       gtsCacheUtils().tsIsHierarchical(p_intNewRecordEtpId) === false){

      //Fixed [PR-312591] Add as (Business Process diagram rec. type) - Not able to save the record using 'add as' in a scenario. ref. desc and steps. Ref. video for complete scenario
      LResult.errorCode = gtsGenConsts().CreateRecordErrorCodes().PACKAGE_MODE_HIERARCHICAL;
      LResult.result = false;
      return LResult;
    }

    if(LRSSId !== 0){
      var LPackageStructureCacheObj = TS.App.Cache.RSSList().ById(LRSSId);

      var LRSSFlatSchemaJson = LPackageStructureCacheObj.SchemaFlatJSON();
      var LCanCreateRecordAsPerRSS = false;

      Ext.Array.each( LRSSFlatSchemaJson, function(p_Item,p_intIndex){

        //Close loop when the condition is satisfied
        if(LCanCreateRecordAsPerRSS){
          return false;
        }

        //If Creating record as child of Package, we need to check inside
        if(gtsCacheUtils().tsIsRecordTypeOwnedContainer(p_intReferenceEtpId)){
          if( p_Item.isRoot === true && p_intNewRecordEtpId === p_Item.recordId){
            LCanCreateRecordAsPerRSS = true;
          }
        }else{
          //When Creating record inside a package record, we need to check reference etpId's allowed child recordTypes
          if(p_intReferenceEtpId === p_Item.recordId){
            let LRSSChildRecordTypes = p_Item.childElementTypes;
            Ext.Array.each(LRSSChildRecordTypes,function(p_objRecordType,p_intIndex){
              //Close loop when the condition is satisfied
              if(LCanCreateRecordAsPerRSS){
                return false;
              }

              if(p_intNewRecordEtpId === p_objRecordType.recordId){
                LCanCreateRecordAsPerRSS = true;
              }
            });

          }
        }
      });

      if(LCanCreateRecordAsPerRSS === false){
        LResult.errorCode = gtsGenConsts().CreateRecordErrorCodes().PACKAGE_MODE_NO_FOLLOW_RSS;
        LResult.result = false;
        return LResult;
      }

    }

    return LResult;
  },

  tsCanShowActionForCreateRecFromTemplate: function(p_intEtpId, p_intProjectId, p_boolCanCheckIgnoreList, p_boolCanSkipTemplateProject) {
    /*
    * @method tsCanShowActionForCreateRecFromTemplate
    * This method will decide and return whether we can show the create record from template or not
    *
    * @param {Number} record type id
    * @param {Number} Project Id
    *
    * @return{Boolean}: Flag indicating whether to show action or not
    *
    */

    //Arpan Sir's feedback - Do not show "using Template" action for Collab Login
    if(TS.App.IsUserEditionTypeCollab())
      return false;

    let LTemplateProjectId = gtsGenConsts().NEW_REC_USING_TEMPLATE().TEMPLATE_PROJECT_ID;

    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0 ,"Unable to check whether the record can be created using template for record type id: " +p_intEtpId );

    p_boolCanCheckIgnoreList = Ext.isBoolean(p_boolCanCheckIgnoreList)? p_boolCanCheckIgnoreList: true;
    p_boolCanSkipTemplateProject = Ext.isBoolean(p_boolCanSkipTemplateProject)? p_boolCanSkipTemplateProject: false;

    //Implemented CR-331837 Oneview Using templates - User is not able to create the oneview using templates in Record Templates Project however in Win it is possible.
    if(p_boolCanSkipTemplateProject === false ){

      Assert(Ext.isNumber(p_intProjectId) === false || p_intProjectId <= 0 ,"Unable to check whether the record can be created using template for Project id: " +p_intProjectId );
      
      //do not show if opened project is template project
      if( p_intProjectId === LTemplateProjectId ){

        return false;
      }//if..
    }

    if(gtsCacheUtils().tsIsETPTrackingItem(p_intEtpId)){
      return false;
    }

    if(p_boolCanCheckIgnoreList === true){
      //do not show for the ignored record types
      var LETPIndIgnoreList = gtsGenConsts().NEW_REC_USING_TEMPLATE().ETP_IND_IGNORE_LIST;
      var LETPIndicator = gtsCacheUtils().tsGetETPIndicatorFromId(p_intEtpId);
      if( Ext.Array.contains( LETPIndIgnoreList, LETPIndicator ) ){

        return false;
      }//if..
    }

    //do not show link if record type is not included in template project
    var LIsEtpIncludedInProject = gtsCacheUtils().IsEtpIncludedInProject( LTemplateProjectId, p_intEtpId );
    if( LIsEtpIncludedInProject !== true ){

      return false;
    }//if..

    //if diagram field is not editable then do not allow to create record using template
    if( gtsCacheUtils().tsIsDiagramETP(p_intEtpId) === true && gtsFeatureTypeUtils().tsIsDiagramFieldEditable(p_intEtpId) === false){
      return false;
    }//if..

    //USO Feedback - Show New Record Using Template action only when there are records included for the respective recordtype
    let LDataProvider = TS.App.Cache.DataProvider();
    Assert(Ext.isEmpty(LDataProvider),"Unable to check whether the records are available in Template Project for Recordtype id: "+p_intEtpId+".<br><br>Data Provider instance not found.");

    let LTemplateProjectTree = LDataProvider.GetProjectTree(LTemplateProjectId);
    Assert(Ext.isEmpty(LTemplateProjectTree),"Unable to get project tree from cache for project id: "+LTemplateProjectId);

    if(LTemplateProjectTree.RecordExistForRecordType(p_intEtpId) === false){
      return false;
    }

    return true;
  },

  tsCanShowCreateWizardActionForEtp: function(p_intEtpId) {
    /*
    * @method tsCanShowCreateWizardActionForEtp
    * This method will decide and return whether we can show wizard to create new record of the provided recordtype using wizard
    *
    * @param {Etpid} record type Id
    * @return{Boolean}
    *
    */

    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <=0 ,"Unable to call tsCanShowCreateWizardActionForEtp() method in Common Utils class for record type id:"+p_intEtpId);

    let LEtpInd = gtsCacheUtils().tsGetETPIndicatorFromId(p_intEtpId),
        LResult = false,
        LEtpIndConsts = gtsGenConsts().GETP_INDICATOR;

    switch(LEtpInd){
        //Add cases of EtpIndicator for which the "New using wizard" is available
      case LEtpIndConsts.ETP_IND_MINS_OF_MEETING:
      case LEtpIndConsts.ETP_IND_BUSINESS_PROCESS_DIAGRAM:
        //Shinu Sir's feedback: Do not show "OneView using Wizard" as different action
      //case LEtpIndConsts.ETP_IND_SRS_DOCUMENT:
        LResult = true;
        break;
      case LEtpIndConsts.ETP_IND_GENERIC_DIAGRAMS:

        if(p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_WIREFRAMES){

          LResult = true;
        }//if..
        break;
      default:
        break;
    }

    return LResult;
  },

  tsGetModifiedDataFromTemplateRec: function(p_intEtpId, p_objRecordData, p_objTemplateRecordData) {
    /*
    * @method tsGetModifiedDataFromTemplateRec
    * This function will modufy the record data with the template data
    * Will add all fields which were not available in the record data
    *
    * @param{Number}: ETP ID
    * @param{Object}: Updated Record Data
    * @param{Object}: Template raw record data
    *
    * @return{Object}: Modified data
    */

    var LEtpRecord,
        LFields,
        LIgnoreListOfFields = gtsGenConsts().NEW_REC_USING_TEMPLATE().FIELD_IGNORE_LIST,
        LCounter;

    Assert( Ext.isEmpty( p_intEtpId ), "Unable to calculate field data. Record type id found empty." );

    LEtpRecord = TS.App.Cache.ETPs().ById(p_intEtpId);

    Assert( Ext.isEmpty( p_intEtpId ), "Unable to calculate field data. Cache object not found for record type id: " + p_intEtpId );

    LFields = LEtpRecord.Fields();
    var LTotalFields = LFields.Count();

    //if record type is MOM then do not copy attendees
    if( p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_MINS_OF_MEETING ){

      LIgnoreListOfFields.push( gtsMetadataConsts().DBFieldNames().DB_COL_NAME_MOM_ATTENDEES );
    }//if..

    var LField,
        LFieldName,
        LIsSysHidden,
        LIsReadOnly,
        LIsInIgnoreList;

    //traverse record type fields and create record json data
    for( LCounter=0; LCounter < LTotalFields; LCounter++ ){

      LField = LFields.ByIndex( LCounter );
      LFieldName = LField.Name();

      //if field exist in the record data then do not override it with template data
      if( Object.prototype.hasOwnProperty.call(p_objRecordData,LFieldName) === false ){

        //here means, field is not edited by the user. Add field value from template.
        LIsSysHidden = LField.IsSysHidden();
        LIsReadOnly = LField.IsReadOnly();

        //check if field exist in the ignore list
        LIsInIgnoreList = Ext.Array.contains( LIgnoreListOfFields, LFieldName );

        //do not add field value if it is system hidden or read only or in the ignore list
        if( !LIsSysHidden && !LIsReadOnly && !LIsInIgnoreList ){

          if( Ext.isEmpty( p_objTemplateRecordData[LFieldName]) === false ){

            p_objRecordData[LFieldName] = p_objTemplateRecordData[LFieldName];
          }//if..
        }//if..
      }//if..
    }//for..

    return p_objRecordData;
  },

  tsGetIgnoredRecordTypesForRecordCreation: function() {
    /*
    * @method tsGetIgnoredRecordTypesForRecordCreation
    * This function will return the array of recordtypes which cannot be created.
    *
    * @param{Null}
    *
    * @return{Array} RecordType list
    */

    var LETPIdConstants = gtsGenConsts().GETP_ID;

    let LResult = [
      //Ignored Tracking Items
      LETPIdConstants.ETP_ID_REQUEST_FOR_APPROVALS,
      LETPIdConstants.ETP_ID_FOR_YOUR_INFORMATION,
      LETPIdConstants.ETP_ID_REVIEW_REQUEST,
      LETPIdConstants.ETP_ID_CR_IMPACTS,
      LETPIdConstants.ETP_ID_ELM_TODO,
      //Ignored Repos Objects
      LETPIdConstants.ETP_ID_ONEVIEW_OWNED_COLLECTION,
      LETPIdConstants.ETP_ID_ONEVIEW_QUERIED_COLLECTION,
      LETPIdConstants.ETP_ID_ONEVIEW_ASSOCIATIVE_COLLECTION,
      LETPIdConstants.ETP_ID_ONEVIEW_TEXT_SECTION,
      LETPIdConstants.ETP_ID_SPRINT,
      LETPIdConstants.ETP_ID_TEST_RUN,
      LETPIdConstants.ETP_ID_TEXT,
      LETPIdConstants.ETP_ID_RELEASE,
      LETPIdConstants.ETP_ID_DOCUMENTS,
      LETPIdConstants.ETP_ID_REPORT_TEMPLATE,
      LETPIdConstants.ETP_ID_REVIEW_PACKAGE,
      LETPIdConstants.ETP_ID_USE_CASE_SCENARIOS,
      LETPIdConstants.ETP_ID_SYSTEM_PACKAGE,
      LETPIdConstants.ETP_ID_CATALOG_PACKAGE,
      //LETPIdConstants.ETP_ID_COMPONENT,
      LETPIdConstants.ETP_ID_ASSEMBLY,
      LETPIdConstants.ETP_ID_ASSEMBLY_CATELOG_ITEM,
      LETPIdConstants.ETP_ID_COMPONENT_CATELOG_ITEM,
      LETPIdConstants.ETP_ID_SRS_DOCUMENT,
      LETPIdConstants.ETP_ID_FOLDER_PACKAGE
    ];

    //do not show component record type for record creation via quick add, bulk add, add as, etc.
    let LComponentEtps = gtsCacheUtils().tsGetComponentRecordTypes();
    LResult = Ext.Array.merge(LComponentEtps, LResult);

    //File Family recordTypes are special recordtypes they cannot be created using conventional New drodown, Bulk Add, Add As, etc
    LResult = Ext.Array.merge(LResult, gtsCacheUtils().tsGetETPIdsForEtpInd(gtsGenConsts().GETP_INDICATOR.ETP_IND_DOCUMENTS));

    return LResult;
  },

  tsResetMenuOwnerComponents: function(p_objParentContainer) {
    /*
    * @method tsResetMenuOwnerComponents
    * This function is used to fix [PR-285882] Tree editor (views and Filters)  - Once if I go to full screen mode views and filters change is not working. ref. attached video
    * This method will get all menu's from parent container and reset it's owner component again
    *
    * @param{Object} p_objParentContainer - Ext.component
    * @return{null}
    */

    var LMe = this,
        LAllMenus = [];

    Assert(Ext.Object.isEmpty(p_objParentContainer) === true,"Unable to execute tsResetMenuOwnerComponents() function of tsclsCommonUtils class. Invalid parent container provided.");

    //Get All Ext Menus from the parent container first
    LAllMenus =  Ext.ComponentQuery.query('menu',p_objParentContainer);

    //Now, we need to loop through each menu and reregister with it's owner
    Ext.Array.each(LAllMenus,function(p_objMenu,p_intIndex){
      var LMenuOwner = p_objMenu.ownerCmp;

      //set Menu Owner again
      if(Ext.Object.isEmpty(LMenuOwner) === false){
        p_objMenu.setOwnerCmp(LMenuOwner);
      }

    },LMe);

  },

  tsGetImageIndexOfRecord: function(p_intRecordEtpId, p_intRecordImageIndex, p_intRecordForEtpId) {
    /*
    *
    * @method tsGetImageIndexOfRecord
    * returns ImageIndex of the record
    *
    * @param {Number} - Recordtype id
    * @param {Number} - record image index [Optional] (Default -1)
    * @param {Number} - ForEtpId of the record [Optional] (Default -1)
    *
    * @return {Number} - Ids of recordtypes
    */

    var LResultImageIndex = 0,
        LEtpId;

    Assert(Ext.isNumber(p_intRecordEtpId) === false,"Unable to get ImageIndex for id: " + p_intRecordEtpId);

    if(Ext.isNumber(p_intRecordImageIndex) === false){
      p_intRecordImageIndex = -1;
    }

    if(Ext.isNumber(p_intRecordForEtpId) === false){
      p_intRecordForEtpId = -1;
    }

    //If image index is already available, return the same
    if(p_intRecordImageIndex >= 0){
      return p_intRecordImageIndex;
    }

    //If ForEtpId is available and EtpId of provided recordtype is a package or system package, then use forEtpId to get imageindex
    LEtpId = p_intRecordForEtpId > 0 && (p_intRecordEtpId === gtsGenConsts().GETP_ID.ETP_ID_PACKAGE || p_intRecordEtpId === gtsGenConsts().GETP_ID.ETP_ID_SYSTEM_PACKAGE) ? p_intRecordForEtpId : p_intRecordEtpId;

    LResultImageIndex = gtsCacheUtils().tsGetImageIndexForETP(LEtpId);

    return LResultImageIndex;
  },

  tsGetImgIconClsForRecordType: function(p_intEtpId, p_intForEtpId, p_boolIconClsWithHtml, p_boolisGrayScale) {
    /*
    *
    * @method tsGetImgIconClsForRecordType
    * returns Image Icon cls  of the record
    *
    * @param {Number} - Recordtype id
    * @param {Number} - ForEtpId of the record [Optional] (Default -1)
    * @param {Boolean} - Return icon cls with HTML on the basis of flag value
    *
    * @return {String} - Icon Cls Name
    */

    var LResultImageIndex = 0,
        LResultCls = '';


    //If ETP Id is undefined it will raise an error if ETP Id is passed but less than or equal to 0 then it raise error.
    Assert(Ext.isEmpty(p_intEtpId) === true || p_intEtpId <= 0 ,"Cannot get Icon cls for record type. Invalid record type id found in tsGetImgIconClsForRecordType() method, of class tsclsCommonUtils.");

    p_boolisGrayScale = Ext.isBoolean( p_boolisGrayScale ) ? p_boolisGrayScale : false;

    if(gtsCacheUtils().tsIsRecordTypeContainer(p_intEtpId) === true &&
    //Implemented [TODO-346950] Show correct Icon for Component Package is incorrect. We need to show component icon (one without package overlay).
    //Temporary fix: need to discuss with Arpan Sir on how to calculate if we need to get overlay icon for forEtpId. 
    //As per Bhavesh Sir feedback: SYS_VAL_ID1 is generic field by diff records and is not directly related to single etp package
    //assumption at client is going wrong
    (gtsCacheUtils().tsIsComponentEtp(p_intEtpId) === false) &&
    p_intEtpId !== gtsGenConsts().GETP_ID.ETP_ID_ASSEMBLY && 
    Ext.isEmpty(p_intForEtpId)  === false){
      LResultImageIndex = gtsCacheUtils().tsGetImageIndexForETP(p_intForEtpId);
      if(LResultImageIndex >= 0){
        if (p_boolisGrayScale !== true) {
          LResultCls = gtsGenUtils().tsGetClsForETPPackageOverlayImg16(LResultImageIndex);
        }
        else {
          LResultCls = gtsGenUtils().tsGetClsForETPPackageOverlayImg16_GrayScale(LResultImageIndex);
        }
      }
    }


    if(Ext.isEmpty(LResultCls)  === true){
      LResultImageIndex = gtsCacheUtils().tsGetImageIndexForETP(p_intEtpId);
      if(LResultImageIndex >= 0){
        if (p_boolisGrayScale !== true) {
          LResultCls = gtsGenUtils().tsGetClsForEtpImg16(LResultImageIndex);
        }
        else {
          LResultCls = gtsGenUtils().tsGetClsForEtpImg16_GrayScale(LResultImageIndex);
        }
      }
    }

    //Return html from this method on the basis of p_boolIconClsWithHtml flag - FDBK given by Arpan sir on 16 July 2020
    if( (Ext.isEmpty(LResultCls) === false) && (p_boolIconClsWithHtml === true) ) {
      LResultCls = '<span class= "'+ LResultCls + '" style="vertical-align:top;width:16px;height:16px;display:inline-block;margin-right:2px;">&nbsp;</span>';
    }

    return LResultCls;
  },

  tsGetGroupIndexForDynamicNewMenu: function(p_intRecordType, p_strActionCode) {
    /*
    *
    * @method tsGetGroupIndexForDynamicNewMenu
    * provides group index for the provided recordtype
    *
    * @param {Number} - Record Type
    * @param {String} - Action Code [Optional] - to detect whether the action is Using Wizard/Template, etc
    *
    * @return {Number} Group Seq number
    */

    var LEtpIdConst = gtsGenConsts().GETP_ID,
        //All defaulr primary recordtypes at first level
        LGroupSequence = 0;

    p_intRecordType = p_intRecordType || 0;

    p_strActionCode = p_strActionCode || "";

    Assert(Ext.isNumber(p_intRecordType) === false, "Unable to execute tsGetGroupIndexForDynamicNewMenu() function for Record Type: "+ p_intRecordType);

    //New Using Template at 2nd level below primary recordtypes
    if(p_strActionCode === gtsGenConsts().G_ETP_ACTION_CODE.NEW_REC_USING_TEMPLATE){
      LGroupSequence = 1;
    }
    //New Using Wizard at 3rd level, below Wizard recordtypes
    if(p_strActionCode === gtsGenConsts().G_ETP_ACTION_CODE.NEW_USING_WIZARD){
      LGroupSequence = 2;
    }

    switch(p_intRecordType){
      case LEtpIdConst.ETP_ID_GROUP:
      case LEtpIdConst.ETP_ID_PROCESS_GUIDANCE_PACKAGE:
      case LEtpIdConst.ETP_ID_FOLDER_PACKAGE:
      case LEtpIdConst.ETP_ID_ONEVIEW_TEXT_SECTION:
      case LEtpIdConst.ETP_ID_PACKAGE:
      case LEtpIdConst.ETP_ID_SRS_DOCUMENT:
      case LEtpIdConst.ETP_ID_TEXT:
      case LEtpIdConst.ETP_ID_ONEVIEW_ASSOCIATIVE_COLLECTION:
      case LEtpIdConst.ETP_ID_ONEVIEW_QUERIED_COLLECTION:
        //Fixed bug: Add Records using Bulk action is available under OneView document.
      // We show Bulk action if there are more than one Primary recordTypes (GroupIndex 0),
      // As of New Queried and Associative sections are not shown in Dropdown,
      // but they are returned from Action Dropdown class for Associative and Queries section etp with group index = 0
      //Hence the action is visible which is not correct
        LGroupSequence = 3;
        break;
      //Implemented [TODO-349357] Web - New drop-down class - If Component is PIT in owner and its canCreate is true, add actions for "Create Component" in a separate group index
    //Implemented [TODO-349358] Web - New drop-down class - If Component is PIT in owner and its canReuse is true, add actions for "Include Component" in a separate group index
      default:        
        if (gtsCacheUtils().tsIsComponentEtp(p_intRecordType))
        {
        LGroupSequence = 4;
        break;
        }        
    }

    //Shinu Sir's feedback: Do not show OneView using Wizard
    //Arpan Sir's feedback: OneView Wizard option need to be below Secondary recordtypes
    // if(p_intRecordType === LEtpIdConst.ETP_ID_SRS_DOCUMENT &&
    //   p_strActionCode === gtsGenConsts().G_ETP_ACTION_CODE.NEW_USING_WIZARD){
    //   LGroupSequence = 4;
    // }

    return LGroupSequence;
  },

  /*
  * Provides Subgroup index for Dynamic New Dropdown Menu for indentification of option belong to which group
  * @method tsGetSubGroupIndexForDynamicNewMenu
  * @public
  * @param {Number} - Record Type Id
  * @return {Number}
  */
  tsGetSubGroupIndexForDynamicNewMenu: function(p_intRecordType) {

    const LEtpIdConst = gtsGenConsts().GETP_ID;
    let LSubGroupSequence = 0;
    
    //[FBK-370154] New drop-down menu - Move Text, Group inside More sub-menu
    //Need the property in JSON to identify that some options in New / New Child dropdown belong to special cases, such as Text an Group under more
    //Hence adding SubGroup Index for the identification, 1 represent that the options belong to "More" submenu
    switch(p_intRecordType){
      case LEtpIdConst.ETP_ID_PACKAGE:
      case LEtpIdConst.ETP_ID_GROUP:
      case LEtpIdConst.ETP_ID_TEXT:
      case LEtpIdConst.ETP_ID_FOLDER_PACKAGE:
        LSubGroupSequence = 1;
        break;
    }

    return LSubGroupSequence;
  },
  tsGetDispSeqForDynamicNewMenu: function(p_intRecordType) {
    /*
    *
    * @method tsGetDispSeqForDynamicNewMenu
    * provides Display Sequence for the provided recordtype
    *
    * @param {Number} - Record Type
    * @return {Number} Group Seq number
    */

    if(p_intRecordType === undefined){
      p_intRecordType = 0;
    }//if

    var LEtpIdConst = gtsGenConsts().GETP_ID,
        LDisplaySequence = 0;

    Assert(Ext.isNumber(p_intRecordType) === false, "Unable to execute tsGetGroupIndexForDynamicNewMenu() function for Record Type: "+ p_intRecordType);

    switch(p_intRecordType){
      case LEtpIdConst.ETP_ID_PACKAGE:
        LDisplaySequence = 1000;
        break;
      case LEtpIdConst.ETP_ID_TEXT:
        LDisplaySequence = 2000;
        break;
      case LEtpIdConst.ETP_ID_COLLECTION_FOLDER:
        LDisplaySequence = 3000;
        break;
        //For Project node, 1. Package 2. OneView 3. Folder 
      case LEtpIdConst.ETP_ID_SRS_DOCUMENT:
        LDisplaySequence = 4000;
        break;
      case LEtpIdConst.ETP_ID_FOLDER_PACKAGE:
        LDisplaySequence = 5000;
        break;
        //Text Section does not come in dropdown, still adding it as last item
      case LEtpIdConst.ETP_ID_ONEVIEW_TEXT_SECTION:
        LDisplaySequence = 6000;
        break;
    }

    return LDisplaySequence;
  },

  tsGetMenuItemJsonForEtp: function(p_intEtpId, p_intProjectId, p_canIncludeOtherNewOptions, p_strActionCode) {
    /**
    * @method tsGetMenuItemJsonForEtp
    * This method will return the record type array of objects which will help to create new child drop down menu.
    *
    * @param {Number} p_intEtpId - Record Type Id
    * @param {Number} p_intProjectId - Project Id [Mandatory if p_canIncludeOtherNewOptions = true]
    * @param {Boolean} p_canIncludeOtherNewOptions - Record Type Id [Optional : default false]
    * @param {String} p_strActionCode - Record Type Id [Optional : default false]
    *
    * @return {Array/Object} JS object or array of Objects containing record type information
    */

    if(p_intProjectId === undefined){
      p_intProjectId = 0;
    }//if
    if(p_intProjectId === undefined){
      p_intProjectId = 0;
    }//if
    if(p_canIncludeOtherNewOptions === undefined){
      p_canIncludeOtherNewOptions = false;
    }//if

    const LMe = this;
    var LResult = {},//Returns array in case of p_canIncludeOtherNewOptions is true,
        LWinIcon = " <span title='Open in Desktop App' style='position:relative; top:1px; margin:0px 0px 0px 5px; width:16px; height:16px; display:inline-block;' class='tsGenImgCls73116'></span>";

    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0,"Unable to get menu object for recordtype id: "+ p_intEtpId);

    var LEtpCacheObject = TS.App.Cache.ETPs().ById(p_intEtpId);
    Assert(Ext.isEmpty(LEtpCacheObject),"Record type object not found for recordtype id: "+ p_intEtpId);

    LResult[gtsJSONConsts().GCACHE_ETP.ID] = LEtpCacheObject.Id();
    LResult[gtsJSONConsts().GCACHE_ETP.ETP_IND] = LEtpCacheObject.ETPIndicator();
    LResult[gtsJSONConsts().GCACHE_ETP.NAME] = LEtpCacheObject.Name();
    var LSingularName = LEtpCacheObject.SingularName();

    //OneView Wizard : Invoke OneView Wizard in web instead of redirecting to win
    // //Implemented [TODO-316776] Launch URI when "New OneView Document" is choosen from Explorer
    // if(p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_SRS_DOCUMENT && GConstant.tsIsFullAuthoringEnabledInOV !== true){
    //   LSingularName += " <span title='Open in Desktop App' style='position:relative; top:1px; margin:0px 0px 0px 5px; width:16px; height:16px; display:inline-block;' class='tsGenImgCls73116'></span>";
    // }

    LResult[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] = LSingularName;
    LResult[gtsJSONConsts().GCACHE_ETP.IMAGE_INDEX] = LEtpCacheObject.ImageIndex();
    LResult["imgType"] = "ETP";

    LResult["groupIndex"] = gtsCommonUtils().tsGetGroupIndexForDynamicNewMenu(LEtpCacheObject.Id());
    LResult["displaySequence"] = gtsCommonUtils().tsGetDispSeqForDynamicNewMenu(LEtpCacheObject.Id());
    LResult["subGroupIndex"] = LMe.tsGetSubGroupIndexForDynamicNewMenu(LEtpCacheObject.Id());
    LResult.ignorePITPermissions = false;

    if( gtsCacheUtils().tsIsComponentEtp(p_intEtpId) && 
    p_strActionCode === gtsGenConsts().G_ETP_ACTION_CODE.CREATE_PACKAGE ){
      LResult.name = LResult.singularName = "Create Ad-hoc " + LSingularName;
      //LResult.imgType = "GEN";
      //LResult.imageIndex = gtsGenConsts().GGEN_IMAGE_INDEX.ADD_NEW_RECORD;
      LResult.displaySequence = 1;
      LResult.actionCode = p_strActionCode;
      LResult.ignorePITPermissions = true;
    }

    if( gtsCacheUtils().tsIsComponentEtp(p_intEtpId) && 
    p_strActionCode === gtsGenConsts().G_ETP_ACTION_CODE.INCLUDE_COMPONENT ){
      LResult.name = LResult.singularName = "Reuse " + LSingularName;
      LResult.imgType = "GEN";
      LResult.imageIndex = gtsGenConsts().GGEN_IMAGE_INDEX.REUSE_COMPONENT;      
      LResult.actionCode = p_strActionCode;
      LResult.displaySequence = 2;
      LResult.children = [];

      var LIncludeComponentViaCatalog = Ext.clone(LResult);
      var LIncludeComponentFromSubComponent = Ext.clone(LResult);
      var LIncludeComponentFromProject = Ext.clone(LResult);

      LIncludeComponentViaCatalog.name = LIncludeComponentViaCatalog.singularName = "from Catalog";
      LIncludeComponentViaCatalog.actionCode = p_strActionCode;
      LIncludeComponentViaCatalog.imageIndex = gtsCacheUtils().tsGetImageIndexForETP(gtsGenConsts().GETP_ID.ETP_ID_COMPONENT_CATELOG_ITEM);
      LIncludeComponentViaCatalog.imgType = "ETP";
      LIncludeComponentViaCatalog.subActionCode = gtsGenConsts().G_ETP_ACTION_CODE_IGNORE_LIST.INCLUDE_COMPONENT_FROM_CATALOG;
      LIncludeComponentViaCatalog.displaySequence = 1;
      LIncludeComponentViaCatalog.ignorePITPermissions = true;
      LResult.children.push(LIncludeComponentViaCatalog);

      LIncludeComponentFromProject.name = LIncludeComponentFromProject.singularName = "from Current Project";
      LIncludeComponentFromProject.actionCode = p_strActionCode;
      LIncludeComponentFromProject.imageIndex = gtsCacheUtils().tsGetImageIndexForETP(gtsGenConsts().GETP_ID.ETP_ID_COMPONENT);
      LIncludeComponentFromProject.imgType = "ETP";
      LIncludeComponentFromProject.subActionCode = gtsGenConsts().G_ETP_ACTION_CODE_IGNORE_LIST.INCLUDE_COMPONENT_FROM_SUB_COMPONENT;
      LIncludeComponentFromProject.displaySequence = 2;
      LIncludeComponentFromProject.ignorePITPermissions = true;
      LResult.children.push(LIncludeComponentFromProject);

      LIncludeComponentFromSubComponent.name = LIncludeComponentFromSubComponent.singularName = "from Another Project";
      LIncludeComponentFromSubComponent.actionCode = p_strActionCode;
      LIncludeComponentFromSubComponent.imageIndex = gtsCacheUtils().tsGetImageIndexForETP(gtsGenConsts().GETP_ID.ETP_ID_PROJECT_TYPE_COMPONENT);
      LIncludeComponentFromSubComponent.imgType = "ETP";
      LIncludeComponentFromSubComponent.subActionCode = gtsGenConsts().G_ETP_ACTION_CODE_IGNORE_LIST.INCLUDE_COMPONENT_FROM_PROJECT;
      LIncludeComponentFromSubComponent.displaySequence = 3;
      LIncludeComponentFromSubComponent.ignorePITPermissions = true;
      LResult.children.push(LIncludeComponentFromSubComponent);
    }

    if(p_canIncludeOtherNewOptions === true){
      let LResultArr = [];
      LResultArr.push(LResult);
      //Check whether create record using template option is available or not
      if(LMe.tsCanShowActionForCreateRecFromTemplate(p_intEtpId, p_intProjectId)){
        var LTemplateObject = Ext.clone(LResult);
        LTemplateObject.actionCode = gtsGenConsts().G_ETP_ACTION_CODE.NEW_REC_USING_TEMPLATE;
        LTemplateObject[gtsJSONConsts().GCACHE_ETP.NAME] = LTemplateObject[gtsJSONConsts().GCACHE_ETP.NAME] + " using Template";
        LTemplateObject[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] = LTemplateObject[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] + " Template";
        LTemplateObject["groupIndex"] = gtsCommonUtils().tsGetGroupIndexForDynamicNewMenu(LEtpCacheObject.Id(), gtsGenConsts().G_ETP_ACTION_CODE.NEW_REC_USING_TEMPLATE);
        LTemplateObject["subGroupIndex"] = LMe.tsGetSubGroupIndexForDynamicNewMenu(LEtpCacheObject.Id());

        LResultArr.push(LTemplateObject);
      }

      //Check whether the New using Wizard option is available for RecordType
      if(LMe.tsCanShowCreateWizardActionForEtp(p_intEtpId)){

        //Fixed [PR-305306] Web Diagram - BPMN - Links which will direct to desktop app for Create New Business Process using wizard (Beginner's & expert) is missing with New Drop down
        if(gtsCacheUtils().tsGetETPIndicatorFromId(p_intEtpId) === gtsGenConsts().GETP_INDICATOR.ETP_IND_BUSINESS_PROCESS_DIAGRAM){


          //New BPD using Beginners wizard
          if(gtsURIConsts().Diagram().BPMN_BEGINNER_WZD.IS_VISIBLE){
            var LBeginnerWizardObject = Ext.clone(LResult);
            LBeginnerWizardObject.actionCode = gtsGenConsts().G_ETP_ACTION_CODE.NEW_USING_WIZARD;
            LBeginnerWizardObject.subActionCode = gtsGenConsts().G_ETP_ACTION_CODE_IGNORE_LIST.USING_BEGINNER_WIZARD;

            LBeginnerWizardObject[gtsJSONConsts().GCACHE_ETP.NAME] = LBeginnerWizardObject[gtsJSONConsts().GCACHE_ETP.NAME] + " - Beginner Wizard" + LWinIcon ;
            LBeginnerWizardObject[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] = LBeginnerWizardObject[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] + " - Beginner Wizard" + LWinIcon;
            LBeginnerWizardObject["groupIndex"] = gtsCommonUtils().tsGetGroupIndexForDynamicNewMenu(LEtpCacheObject.Id(), gtsGenConsts().G_ETP_ACTION_CODE.NEW_USING_WIZARD);
            LBeginnerWizardObject["subGroupIndex"] = LMe.tsGetSubGroupIndexForDynamicNewMenu(LEtpCacheObject.Id());

            LResultArr.push(LBeginnerWizardObject);
          }

          //New BPD using Expert wizard
          if(gtsURIConsts().Diagram().BPMN_EXPERT_WZD.IS_VISIBLE){
            var LExpertWizardObject = Ext.clone(LResult);
            LExpertWizardObject.actionCode = gtsGenConsts().G_ETP_ACTION_CODE.NEW_USING_WIZARD;
            LExpertWizardObject.subActionCode = gtsGenConsts().G_ETP_ACTION_CODE_IGNORE_LIST.USING_EXPERT_WIZARD;
            LExpertWizardObject[gtsJSONConsts().GCACHE_ETP.NAME] = LExpertWizardObject[gtsJSONConsts().GCACHE_ETP.NAME] + " - Expert Wizard" + LWinIcon ;
            LExpertWizardObject[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] = LExpertWizardObject[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] + " - Expert Wizard" + LWinIcon ;
            LExpertWizardObject["groupIndex"] = gtsCommonUtils().tsGetGroupIndexForDynamicNewMenu(LEtpCacheObject.Id(), gtsGenConsts().G_ETP_ACTION_CODE.NEW_USING_WIZARD);
            LExpertWizardObject["subGroupIndex"] = LMe.tsGetSubGroupIndexForDynamicNewMenu(LEtpCacheObject.Id());
          
            LResultArr.push(LExpertWizardObject);
          }

        }
          else if((gtsCacheUtils().tsGetETPIndicatorFromId(p_intEtpId) === gtsGenConsts().GETP_INDICATOR.ETP_IND_GENERIC_DIAGRAMS) &&
                  (p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_WIREFRAMES)) {

          var LWizardObject = Ext.clone(LResult);
          LWizardObject.actionCode = gtsGenConsts().G_ETP_ACTION_CODE.NEW_USING_WIZARD;

          LWizardObject[gtsJSONConsts().GCACHE_ETP.NAME] = LWizardObject[gtsJSONConsts().GCACHE_ETP.NAME] + " - Capture Screen and Document Wizard";
          LWizardObject[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] = LWizardObject[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] + " - Capture Screen and Document Wizard";
          LWizardObject["groupIndex"] = gtsCommonUtils().tsGetGroupIndexForDynamicNewMenu(LEtpCacheObject.Id(), gtsGenConsts().G_ETP_ACTION_CODE.NEW_USING_WIZARD);
          LWizardObject["subGroupIndex"] = LMe.tsGetSubGroupIndexForDynamicNewMenu(LEtpCacheObject.Id());
          LResultArr.push(LWizardObject);
        }else{
          LWizardObject = Ext.clone(LResult);
          LWizardObject.actionCode = gtsGenConsts().G_ETP_ACTION_CODE.NEW_USING_WIZARD;
          //USO Feedback: <<RecordType Name>> Wizard
          LWizardObject[gtsJSONConsts().GCACHE_ETP.NAME] = LWizardObject[gtsJSONConsts().GCACHE_ETP.NAME] + " Wizard";
          LWizardObject[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] = LWizardObject[gtsJSONConsts().GCACHE_ETP.SINGULAR_NAME] + " Wizard";
          LWizardObject["groupIndex"] = gtsCommonUtils().tsGetGroupIndexForDynamicNewMenu(LEtpCacheObject.Id(), gtsGenConsts().G_ETP_ACTION_CODE.NEW_USING_WIZARD);
          LWizardObject["subGroupIndex"] = LMe.tsGetSubGroupIndexForDynamicNewMenu(LEtpCacheObject.Id());
          LResultArr.push(LWizardObject);
        }
      }
      return LResultArr;

    }

    return LResult;
  },

  tsCanCreatePackage: function(p_intEtpId){
    /**
    * @method tsCanCreatePackage
    * This method is used by system to allow support of New ETP when added in DataBase
    *
    * @param {Number} p_intEtpId - Record Type Id
    * @return {Boolean}
    */
    var LResult = false;
    
    //Register new package ETPs here when introduced in system
    LResult = p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_PACKAGE ||
              gtsCacheUtils().tsIsComponentEtp(p_intEtpId) ||
              p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_PROCESS_GUIDANCE_PACKAGE ||
              p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_QA_FOLDER ||
              p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_QA_PACKAGE;

    return LResult;
  },
  
  tsIsCloneActionAvailableForPackage: function(p_intEtpId){
    /**
    * @method tsIsCloneActionAvailableForPackage
    * This method Provides whether the clone action is available for the PACKAGE of provided recordtype
    *
    * @param {Number} p_intEtpId - Record Type Id
    * @return {Boolean}
    */

    var LResult = false,
     LEtpInd = "",
    LEtpIndConsts = gtsGenConsts().GETP_INDICATOR;

    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0,"Unable to check whether the clone action is available for the package for record type id: "+ p_intEtpId);

    //disable clone action if etp is not available in the build
    if (gtsFeatureTypeUtils().IsETPAvailableInBuild(p_intEtpId) === false) {
      return LResult;
    }

    LEtpInd = gtsCacheUtils().tsGetETPIndicatorFromId(p_intEtpId);

    //Todo - ArpanG - I think we can allow clone operation for all owned containers except representative package and QA Package. 
    //Secondly, instead of hard coding here, it should come from etp. We need some kind of a rules object in etp that can govern action availabilities like this.
    
    //Can clone a OneView and Package type record but not a representative package
    LResult = ( LEtpIndConsts.ETP_IND_SRS_DOCUMENT === LEtpInd || 
               p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_ONEVIEW_TEXT_SECTION ||
               this.tsCanCreatePackage(p_intEtpId) ||
               p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_FOLDER_PACKAGE
              ) &&
              //Do not allow clone for QA Packages
              (p_intEtpId !== gtsGenConsts().GETP_ID.ETP_ID_QA_PACKAGE) &&
              //Cannot clone Representative Package as of now due to infrastructure limitations
              (gtsCacheUtils().tsIsRepresentativePackage(p_intEtpId) === false);

    return LResult;

  },
  tsIsCloneActionAvailableForEtp: function(p_intEtpId) {
    /**
    * @method tsIsCloneActionAvailableForEtp
    * This method Provides whether the clone action is available for the record of provided recordtype
    *
    * @param {Number} p_intEtpId - Record Type Id
    * @return {Boolean}
    */

    if(p_intEtpId === undefined){
      p_intEtpId = 0;
    }//if

    let LEtpInd,
        LResult = true,
        LEtpIndConsts = gtsGenConsts().GETP_INDICATOR;

    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0,"Unable to check whether the clone action is available for the record. Invalid parameter provided in tsIsCloneActionAvailableForEtp() method");

    //disable clone action if etp is not available in the build
    if (gtsFeatureTypeUtils().IsETPAvailableInBuild(p_intEtpId) === false) {
      return false;
    }

    //If Clone action is available for Package, then it's not available for record otherwise any menu will show two Clone's
    if(this.tsIsCloneActionAvailableForPackage(p_intEtpId) === true){
      return false;
    }

    //Implemented [TODO-326483] Explorer - Hide Copy, Delete, Move To, Clone actions for Representative packages
    if (gtsCacheUtils().tsIsRepresentativePackage(p_intEtpId)) {
      return false;
    }

    LEtpInd = gtsCacheUtils().tsGetETPIndicatorFromId(p_intEtpId);

    switch (LEtpInd) {
      case LEtpIndConsts.ETP_IND_GENERIC_ITEM :
      case LEtpIndConsts.ETP_IND_APPROVAL_REQUESTS :
      case LEtpIndConsts.ETP_IND_DOCUMENTS :
      case LEtpIndConsts.ETP_IND_REVIEW_PACKAGE :
      case LEtpIndConsts.ETP_IND_BACKLOG:
      case LEtpIndConsts.ETP_IND_COLLECTION_FOLDER:
        LResult = false;
        break;
    }

    return LResult;
  },

  tsConvertRecordsJsonFromFlatToTree: function(p_arrRecords, p_objOptions) {
    /**
    * @method tsConvertRecordsJsonFromFlatToTree
    * function to convert the flat list of records into the tree (Hierarchy)
    *
    * @param {Array} array of records
    * @param {Object} Options [Optional]
                        1. idProperty [default: "recordId"]
                        1. parentIdProperty [default: "parentRecordId"]
                        2. childrenProperty [default: "children"]
    *
    * @return {Array} Hierarchy of Records
    */

    //Expect result in following format
    /*
    [{
      ELM_NAME: "record 1",
      ... ELM fields
      children:[{
        ELM_NAME: "record 1.1",
        ... ELM fields
      }]
    },{
      ELM_NAME: "record 2",
      ... ELM fields
      children:[{
        ELM_NAME: "record 2.1",
        ... ELM fields
        children:[]
      }]
    }]
    */

    if(p_objOptions === undefined){
      p_objOptions = {};
    }//if

    const LMe = this;

    let LResultTree = [],
        LDefaultOptions = {
          idProperty: 'recordId',
          parentIdProperty : 'parentRecordId',
          childrenProperty : 'children'
        },
        LParentIdProperty = p_objOptions.parentIdProperty || LDefaultOptions.parentIdProperty,
        LChildrenProperty = p_objOptions.childrenProperty || LDefaultOptions.childrenProperty;

    //loop in all records and add it appropriate position to the tree
    Ext.Array.each(p_arrRecords,function(p_objRecord,p_intIndex){

      //Do not change loaded and expanded flag
      //Impact on Repository Explorer when creating records using quick add
      p_objRecord.leaf = true;
      p_objRecord.loaded = false;
       p_objRecord.expanded = false;
      p_objRecord[LChildrenProperty] = [];
      //check whether the parent exist already in the populated tree
      let LRecord = LMe.pvtFindRecordInTree(LResultTree, p_objRecord[LParentIdProperty],p_objOptions);

      //If parent is not available in tree, that means we need to at them at root level
      if (Ext.isEmpty(LRecord)) {
        LResultTree.push(p_objRecord);
      } else {
        LRecord.leaf = false;
        //If parent record is found in tree, push it in it's children property
        if(Object.prototype.hasOwnProperty.call(LRecord,LChildrenProperty) === false){
          LRecord[LChildrenProperty] = [];
        }
        LRecord[LChildrenProperty].push(p_objRecord);
      }
    });

    return LResultTree;
  },

  pvtFindRecordInTree: function(p_arrTree, p_intRecordId, p_objOptions) {
    /**
    * @method pvtFindRecordInTree
    * Returns the record if found in the records tree
    *
    * @param {Array} Tree
    * @param {Number} Record Id
    * @param {Object} Options [Optional]
                      1. idProperty [default: "recordId"]
                      2. parentIdProperty [default: "parentRecordId"]
                      3. childrenProperty [default: "children"]
    *
    * @return {Record} Null if not found
    */

    if(p_objOptions === undefined){
      p_objOptions = {};
    }//if

    const LMe = this;

    let LRecord = null,
        LDefaultOptions = {
          idProperty: 'recordId',
          parentIdProperty : 'parentRecordId',
          childrenProperty : 'children'
        },
        LIdProperty = p_objOptions.idProperty || LDefaultOptions.idProperty,
        LChildrenProperty = p_objOptions.childrenProperty || LDefaultOptions.childrenProperty;

    //loop in all records and add it appropriate position to the tree
    Ext.Array.each(p_arrTree,function(p_objRecord,p_intIndex){

      //Check whether the existing record matches with the recordId
      if(p_objRecord[LIdProperty] === p_intRecordId){
        LRecord = p_objRecord;
        return false;
      }

      //Check whether the children is having the record
      if(Ext.isEmpty(p_objRecord[LChildrenProperty]) === false){
        let LResultRec = LMe.pvtFindRecordInTree(  p_objRecord[LChildrenProperty], p_intRecordId, p_objOptions);
        if(Ext.isEmpty(LResultRec) === false){
          LRecord = LResultRec;
          return false;
        }
      }
    });

    return LRecord;
  },

  /**
  * @method tsGetCaption
  * Returns the Action caption along with keyboardshortcut
  *
  * @param {String} p_strCaptionName -Action Name
  * @param {String} p_strKeyboardShortcut - Keyboard Shortcut associated with the action
  * @param {Boolean} [p_boolReturnPlainText=false] - Return PlainText / HTML 
  *
  * @return {String} Calculated caption with keyboard shortcut suffixed
  */
  tsGetCaption: function(p_strCaptionName, p_strKeyboardShortcut, p_boolReturnPlainText) {
    
    p_strCaptionName = Ext.isEmpty(p_strCaptionName) === false ? p_strCaptionName : "";
    p_strKeyboardShortcut = Ext.isEmpty(p_strKeyboardShortcut) === false ? p_strKeyboardShortcut : "";
    p_boolReturnPlainText = p_boolReturnPlainText === true;

    //Suffix keyboard shortcut along with Caption (If provided)
    if(Ext.isEmpty(p_strKeyboardShortcut) === false){
      if(p_boolReturnPlainText){
        p_strCaptionName += " ("+p_strKeyboardShortcut+")";
      }else{
        p_strCaptionName += "&nbsp;&nbsp;<span class='tsKeyboardShortcut'>("+p_strKeyboardShortcut+")</span>";
      }
    }

    return p_strCaptionName;
  },

  tsGetJSONforImportRecordType: function(p_intEtpId, p_strModuleType) {
    /**
    * @method tsGetJSONforImportRecordType
    * This method will the json object for import action to craete menu
    *
    * @param {Number} p_intEtpId - Record Type Etp Id [ Mandatory]
    * @param {Number} p_strModuleType - In which module type the required import json needed. empty will check for all module type
    *
    * @return {Array/Object} JS object or array of Objects containing import action information
    */

    let LEtpId,
        LIsModuleType = false,
        LModuleType = '',
        LResult = [];//Returns array in case of p_canIncludeOtherNewOptions is true

    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0,"Unable to import action JSON for recordtype id: "+ p_intEtpId);

    //Storeing etp id in local variable
    LEtpId = p_intEtpId;

    //Storing module type into local varaible
    if(Ext.isEmpty(p_strModuleType) === false){
      //This will excute only if user hase send module type
      LIsModuleType = gtsFeatureTypeUtils().tsIsModuleTypeAvailableInEdition(p_strModuleType);
      //If result is false that means module type is not availble no need to do futher process.
      if(LIsModuleType === false){
        return LResult;//Modeule type is not availble for cureent addition
      }

      LModuleType =  p_strModuleType;
    }


    let LImportActionJson = TS.App.Data.ImportActionJSON;

    Ext.Array.forEach(LImportActionJson,function(p_JsonObj , p_Index){

      let LIsActionAvlForEtpId = false;
      let LIsActionAvlForModule = false;

      if(Ext.isEmpty(p_JsonObj.ModuleType) === false ){
        //This is true then check if user have pass any module type
        //if user passes any moduyle type then compare it in list it in list check for etp id else
        //do not add it the response json
        if( LIsModuleType === true ){
          //it only test if the user passes module type is availbl ein the json module type list
          //if yes then check for etp
          LIsActionAvlForModule =  Ext.Array.contains(p_JsonObj.ModuleType,LModuleType);
        }else{
          Ext.Array.forEach(p_JsonObj.ModuleType,function(p_strActModuleType, p_Index){
            LIsActionAvlForModule = gtsFeatureTypeUtils().tsIsModuleTypeAvailableInEdition(p_strActModuleType);
          });
        }
      }else{
        //this means the action is aval for all module type
        LIsActionAvlForModule = true;
      }


      if(LIsActionAvlForModule === true){
        //Action is aval for module type now check for etp Id

        if( Ext.isEmpty(p_JsonObj.ETPId) === false ){
          //If etp id of object is emmpty check for etp ignore list else
          //check passed etp in etp list.
          LIsActionAvlForEtpId = Ext.Array.contains(p_JsonObj.ETPId,LEtpId);
        }
        else if( Ext.isEmpty(p_JsonObj.IgnoreForEtpId) === false ){
          //Check the etp in ignore list if it is then dont add to response json
          LIsActionAvlForEtpId = !Ext.Array.contains(p_JsonObj.IgnoreForEtpId,LEtpId);
        }
        else{
          LIsActionAvlForEtpId = true;
        }
      }


      if(LIsActionAvlForEtpId === true){
        LResult.push(p_JsonObj);
      }


    });

    return LResult;
  },

  tsGetMenuItemforImportRecordType: function(p_intContainerId, p_strModuleType, p_DBRecord) {
    /**
    * @method tsGetMenuItemforImportRecordType
    * This method will the json object for import action to craete menu
    *
    * @param {Number} p_intEtpId - Record Type Etp Id [ Mandatory]
    * @param {Number} p_strModuleType - In which module type the required import json needed. empty will check for all module type
    *
    * @return {Array/Object} JS object or array of Objects containing import action information
    */

    var LMe = this,
        LIsModuleType = false,
        LModuleType = '',
        LResult = [],
        LContainerCacheObj,
        LContainerPITs = [],
        LForEtpId,
        LContainerEtpId,
        LImportGenConst = gtsGenConsts().GetImportAcionCodeConsts(),
        LETPIndicator,
        LEtpCacheObject,
        LIsDiagramEtpPackage = false,
        LBaselineId = parseInt(TS.App.ActiveBaselineId()),
        LContainerPITsInd = [];//Returns array in case of p_canIncludeOtherNewOptions is true

    var LWindowSuffixIcon = " <span title='Open in Desktop App' style='position:relative; top:1px; margin:0px 0px 0px 5px; width:16px; height:16px; display:inline-block;' class='"+gtsGenUtils().tsGetClsForGenImg16(gtsGenConsts().GGEN_IMAGE_INDEX.DESKTOP_APP)+"'></span>";

    Assert(Ext.isNumber(p_intContainerId) === false || p_intContainerId <= 0,"Unable to import action JSON for container id: "+ p_intContainerId);
    
    //[PR-350337] Baseline - Import From Word/Excel actions are available in Baseline Mode for Component Package and allows to import records as well 
    if (LBaselineId !== gtsGenConsts().GMetaConst.CURRENT_BASELINE_ID){
      return LResult;
    }

    //Do not create menu items if we can't import in package
    if(LMe.pvtCanImportInPackage(p_intContainerId) === false){
      return LResult;
    }

    LContainerCacheObj = TS.App.Cache.Containers().ById( p_intContainerId );
    if(Ext.isEmpty(LContainerCacheObj)){
      return LResult;
    }

    //Changed Logic to check for Project Changed By :Vaibhav Rahangdale
    if (gtsCacheUtils().tsIsProjectRecordType(LContainerCacheObj.EtpId())) {
      LContainerPITs = [gtsGenConsts().GETP_ID.ETP_ID_PROJECT];
    }
    else {
      LContainerPITs = LContainerCacheObj.GetCanCreateRecordTypeIds();
      LContainerPITs = Ext.Array.filter( LContainerPITs, function( p_intPITId ){

        //Implemented [ER-333154] Show ReqIF import action for Project node, Oneview node, Oneview editor, System folder &  package(Multiple record type). Show proper message for single PIT package and System package
        //To show action for System folder

        //If package and text sections are allowed to create under a record/package, then we should
        //allow import from any of the document
        if( gtsGenConsts().GETP_ID.ETP_ID_FOLDER_PACKAGE === p_intPITId ||
            gtsGenConsts().GETP_ID.ETP_ID_ONEVIEW_OWNED_COLLECTION === p_intPITId ||
            gtsGenConsts().GETP_ID.ETP_ID_ONEVIEW_TEXT_SECTION === p_intPITId){
          return true;
        }

        //Fixed - [ER-329155] [Web] ReqIf Import - Need import from ReqIf action for OneView Document Node in Repository explorer - Refer Justification
        if( gtsCacheUtils().tsIsRecordTypeOwnedContainer( p_intPITId ) ||
           ( p_intPITId === gtsGenConsts().GETP_ID.ETP_ID_COLLECTION_FOLDER ) ||
          (p_intPITId === gtsGenConsts().GETP_ID.ETP_ID_TEXT)) {
          return false;
        }
        else {
          return true;
        }

      } );
    }
    Ext.Array.each( LContainerPITs, function( p_intEtpId ){
      LContainerPITsInd.push( gtsCacheUtils().tsGetETPIndicatorFromId(p_intEtpId) );
    } );

    //Storeing etp id in local variable
    //LEtpId = ( LContainerPITs.length === 1 ) ? LContainerPITs[0] : "";
    //LEtpInd = gtsCacheUtils().tsGetETPIndicatorFromId(LEtpId);


    //Storing module type into local varaible
    if(Ext.isEmpty(p_strModuleType) === false){
      //This will excute only if user hase send module type
      LIsModuleType = gtsFeatureTypeUtils().tsIsModuleTypeAvailableInEdition(p_strModuleType);
      //If result is false that means module type is not availble no need to do futher process.
      if(LIsModuleType === false){
        return LResult;//Modeule type is not availble for cureent addition
      }

      LModuleType =  p_strModuleType;
    }

    LForEtpId = LContainerCacheObj.ForEtpId();
    LContainerEtpId = LContainerCacheObj.EtpId();

    if( Ext.isNumber(LForEtpId) && LForEtpId > 0 ){
      //If the single etp package whose etp is not available in build, then do not allow import in such package
      if(gtsFeatureTypeUtils().IsETPAvailableInBuild(LForEtpId) === false){
        return LResult;
      }
      LEtpCacheObject = TS.App.Cache.ETPs().ById(LForEtpId);
      Assert( Ext.isEmpty( LEtpCacheObject ), "Invalid etp cache found for id="+LForEtpId+" in tsGetMenuItemforImportRecordType() of tsclsCommonUtils class." );
      LIsDiagramEtpPackage = LEtpCacheObject.IsDiagram();
      LETPIndicator = LEtpCacheObject.ETPIndicator();
    }

    var LImportActionJson = TS.App.Data.ImportActionJSON;

    Ext.Array.forEach(LImportActionJson,function(p_JsonObj , p_Index){

      //Implemented [TODO-340225] Info-screen - Do not show Import from Excel for diagramming etp packages
      if (p_JsonObj.ActionCode === LImportGenConst.IMPORT_RECORD_FROMEXCEL_SPREADSHEET &&
        LMe.pvtCanShowImportFromExcelAction(LContainerEtpId, LIsDiagramEtpPackage, LForEtpId) === false) {
        return;
      }
      //Hide import from word option for diagram and wiki.
      if (p_JsonObj.ActionCode === LImportGenConst.IMPORT_RECORD_FROM_WORD &&
        (LMe.pvtCanShowImportFromWordAction(LForEtpId, LETPIndicator, LIsDiagramEtpPackage) === false)) {
        return;
      }
      // Import from ReqIF action should be not available for Diagram packages and single etp packages
      if( p_JsonObj.ActionCode === LImportGenConst.IMPORT_RECORD_FROM_REQIF && 
        (LIsDiagramEtpPackage === true || (LForEtpId > 0 && gtsCacheUtils().tsIsRecordTypeOwnedContainer(LContainerEtpId)))) {
        return;
      }


      let LIsActionAvlForEtpId = false;
      let LIsActionAvlForModule = false;

      if(Ext.isEmpty(p_JsonObj.ModuleType) === false ){
        //This is true then check if user have pass any module type
        //if user passes any moduyle type then compare it in list it in list check for etp id else
        //do not add it the response json
        if( LIsModuleType === true ){
          //it only test if the user passes module type is availbl ein the json module type list
          //if yes then check for etp
          LIsActionAvlForModule =  Ext.Array.contains(p_JsonObj.ModuleType,LModuleType);
        }else{
          Ext.Array.forEach(p_JsonObj.ModuleType, function (p_strActModuleType, p_Index) {
            LIsActionAvlForModule = gtsFeatureTypeUtils().tsIsModuleTypeAvailableInEdition(p_strActModuleType);
          });
        }
      } else {
        //this means the action is aval for all module type
        LIsActionAvlForModule = true;
      }

    //fixed issuse when container pit is empty do not show import option
      if (Ext.isEmpty(LContainerPITs) && Ext.isEmpty(LContainerPITsInd)) {
        LIsActionAvlForModule = false;
      }
      if(LIsActionAvlForModule === true){
        if (Ext.isEmpty(p_JsonObj.ETPId) && Ext.isEmpty(p_JsonObj.EtpInd)) {
          LIsActionAvlForEtpId = true;
        }
        else {
          if ((Ext.Array.intersect(p_JsonObj.ETPId, LContainerPITs).length > 0) || (Ext.Array.intersect(p_JsonObj.EtpInd, LContainerPITsInd).length > 0)) {
            LIsActionAvlForEtpId = true;
          }
        }
        if (LIsActionAvlForEtpId === true) {
          //Fixed [PR-348398] Components & Assemblies - Import From Excel action is missing for Component Package (Import From Word & Import From ReqIF is available) - Refer to the screenshot
          if( (Ext.Array.difference(LContainerPITs, p_JsonObj.IgnoreForEtpId).length<=0) ||
            (Ext.Array.difference(LContainerPITsInd, p_JsonObj.IgnoreForEtpInd,).length <= 0)) {
            LIsActionAvlForEtpId = false;
          }
        }
      }


      if(LIsActionAvlForEtpId === true){
        //this create a menu item and push into repsonse array
        var LImgCls = '';
        switch(p_JsonObj.ImgType){
          case gtsJSONConsts().GCSS_SPRITE.GEN_CONST:
            LImgCls = gtsGenUtils().tsGetClsForGenImg16(p_JsonObj.ImgIndex);
            break;
          case gtsJSONConsts().GCSS_SPRITE.LOV_CONST:
            LImgCls = gtsGenUtils().tsGetClsForGenImg16(p_JsonObj.ImgIndex);
            break;
          case gtsJSONConsts().GCSS_SPRITE.ETP_CONST:
            LImgCls = gtsGenUtils().tsGetClsForGenImg16(p_JsonObj.ImgIndex);
            break;
          case gtsJSONConsts().GCSS_SPRITE.ASSOC_CONST:
            LImgCls = gtsGenUtils().tsGetClsForGenImg16(p_JsonObj.ImgIndex);
            break;

        }

        //If web  or win url is empty hide the action
        var IsHidden = true;
        if(p_JsonObj.App === "Win"){
          if(Ext.isEmpty(p_JsonObj.URI) === false){
            IsHidden = false;
          }
        }else{
          //web link
          if(Ext.isEmpty(p_JsonObj.URI) === false){
            IsHidden = false;
          }
        }

        var LCaption  = p_JsonObj.Caption;
        //let lHelpText =
        //if( gtsCacheUtils().tsIsRecordTypeContainer(LEtpId) === false ){
          //Implemented - Reported by Piyush Sir - Avoid adding record type name in Import action it is looking odd
        // if( Ext.isEmpty( LEtpId ) === false && ( LEtpId !== gtsGenConsts().GETP_ID.ETP_ID_PROJECT ) )
        // {
        //   var LPITPluralName = gtsCacheUtils().tsGetETPNameFromId( LEtpId );
        //   LCaption = LPITPluralName + " " + LCaption;
        // }

        // if App type is not win then remove Icon Suffix
        if(p_JsonObj.App === "Win"){
        LCaption = LCaption.replace( "%iconSuffix%", LWindowSuffixIcon );
        }else{
          LCaption = LCaption.replace( "%iconSuffix%", '' );
        }

        var LToolTip = "";
        if(Ext.isEmpty(p_JsonObj.Hint) === false){
          LToolTip = p_JsonObj.Hint;
        }

        var LURI = p_JsonObj.URI;
            LURI = LURI.replace( "%CollectionId%", p_intContainerId );

        LResult.push({
          xtype: 'menuitem',
          text: LCaption,//p_JsonObj.Caption,
          hidden:IsHidden,
          FActionCode: p_JsonObj.ActionCode,
          FURI: LURI,
          FApp: p_JsonObj.App,
          ShortCut:p_JsonObj.ShortCut,
          tooltip: LToolTip,
          tooltipType: 'title',
          iconCls: LImgCls,
          listeners:{
            click: function(){
              if(p_JsonObj.App === "Win"){
                if(Ext.isEmpty(p_JsonObj.URI) === false){
                  gtsGenUtils().tsLaunchDesktopApp(LURI);
                }
              }else{
                //web link

                TS.App.Invoker.tsExecuteImportActionByCode(p_JsonObj.ActionCode, p_intContainerId, null, p_DBRecord);
              }
            }
          }
        });

      }

    });

    return LResult;
  },

  /*

    * @method tsGetIsSystemWikiPage
    * This method will return true if the passed Id is of a system Wiki Page
    *
    * @param {Int} p_intRecordId : Record Id
    * @param {Str} p_strTitle - Title of Wiki Page
    *
    * @return {Boolean} LIsSystemWikiPage
  */
  tsGetIsSystemWikiPage: function(p_intRecordId, p_strTitle) {
    var LIsSystemWikiPage = false;

    Assert(Ext.isEmpty(p_intRecordId),'Record Id of wiki page found empty in tsGetIsSystemWikiPage()');
    Assert(Ext.isEmpty(p_strTitle),'Title of wiki page found empty in tsGetIsSystemWikiPage()');

    if((p_strTitle.toUpperCase() === 'HOME' && p_intRecordId === 71228114 ) ||
      (p_strTitle.toUpperCase() === 'DASHBOARD' && p_intRecordId === 71228119 )){
      LIsSystemWikiPage = true;
    }

    return LIsSystemWikiPage;
  },
 /**
  * This method will return JSON containing text as per global settings for the records to be embedded as link
    * @method tsGetTextForEmbedLink
  * @public
  * @param {array} p_arrRecords array of record 
  * @param {integer} p_intAvailableRecordLength max length of record available
  * @param {integer} p_intForceEmbedLinkLength length to be fetched fetched.
  * @returns {array} array of record with newly fetch record.
  */
  tsGetTextForEmbedLink: function(p_arrRecords, p_intAvailableRecordLength,p_intForceEmbedLinkLength) {
    /*
    Scenarion 1: LUserSettings_EmbedLinkLength > p_intSize : Fetch the records from server and get the title, trim it as per global settings and show
    Scenarion 2: LUserSettings_EmbedLinkLength < p_intSize : Trim the records as per global settings and show
    Scenarion 1: LUserSettings_EmbedLinkLength = p_intSize : Trim the records as per global settings and show
    */

    //TODO: Logic
    //Currently this method returns the embedded link size based on global setting only
    //We want enhancement to allow this method to return the embed link size as per the callee of this method
    
    //TODO: p_intSize name is vague. p_intAvailableRecordLength which is provided by callee to tell this method that max length fetched by the callee

    //TODO: Replace p_boolDoNotCheckGlobalSetting -> by p_intForceEmbedLinkLength which is optional
     
    let LUserSettings_EmbedLinkLength,
        LArrRecordIds = [],
        LResult_Arr = [],
        LSkipRecArr =[];
//If "p_intForceEmbedLinkLength" param is a valid number, then we'll not get the embedlinklength from global setting, continue with this variable
    LUserSettings_EmbedLinkLength = (Ext.isNumber(p_intForceEmbedLinkLength) && p_intForceEmbedLinkLength > 0) ? p_intForceEmbedLinkLength : TS.App.Cache.GlobalSettings().GeneralSettings().EmbedLinkLength();

    let LArrRecordDetails = p_arrRecords;

    if(LUserSettings_EmbedLinkLength > p_intAvailableRecordLength){
      Ext.Array.each(p_arrRecords, function(p_RecordObject, p_RecordIndex){
        //when record is inserted  using  object selection dialog record object name is in text attribure
        //and insertd using quick explorer it's name is in Name attribure
        
        //Fixed issue : [PR-363750] Copy-Paste - Throwing error as soon as you select the records from repository and paste it to the HTML fields(Description) .Refer to the Clip and Screenshot.
        let LText = p_RecordObject[gtsJSONConsts().GREPOS_EXPLORER_TREE.NAME] || 
                    p_RecordObject[gtsJSONConsts().GREPOS_EXPLORER_TREE.TEXT] ||
                    p_RecordObject[gtsJSONConsts().GREPOS_EXPLORER_TREE.ELM_NAME];
                    
        LText = Ext.isEmpty(LText) === false ? gtsGenUtils().tsDecode(LText) : 
                Assert(true,`Unable to embed link into Rich Text field as the Title of record is found empty for record id = ${p_RecordObject[gtsJSONConsts().GREPOS_EXPLORER_TREE.REC_ID]}.`);

        //Using bugger of 10 characters
        if(LText.length > p_intAvailableRecordLength-10){
          LArrRecordIds.push(p_RecordObject[gtsJSONConsts().GREPOS_EXPLORER_TREE.REC_ID]);
        }else{
          LSkipRecArr.push(p_RecordObject);
        }

      });
      if(LArrRecordIds.length > 0){
         let  LObj = {
        "tsDisplayType": "dtListView",
        "recordIds":  LArrRecordIds,
        "projectId": TS.App.ActiveProjectRecId(),
        "etpId": gtsGenConsts().GETP_ID.ETP_ID_REPOS_OBJECT,
      };

        //fixed [PR-318610]Embedded Link text in rich text field - when the link text size set more than 239 characters, the maximum link text in rich text is always 239 characters only
        gtsGenUtils().tsGetRecordsByRecordIds(LObj,true,function(p_arrRecords){
          //TODO: How to identyfy if some records are not fetched(deleted/failed to fetch)?
          LArrRecordDetails = p_arrRecords;
        });

      }
    }
    //merge skip record
    LArrRecordDetails = Ext.Array.merge(LArrRecordDetails,LSkipRecArr);
    Ext.Array.each(LArrRecordDetails, function(p_RecordObject, p_RecordIndex){
      var LName = p_RecordObject['ELM_NAME'] || p_RecordObject[gtsJSONConsts().GREPOS_EXPLORER_TREE.NAME] || p_RecordObject.get('ELM_NAME');
      var LObj = {
        //Add + 3 in LUserSettings_EmbedLinkLength because tsTrimToMaxChar include ... elipes in Max length
        //for Ex. if max length is 10 then it return 7 charecter and ...
        name: gtsGenUtils().tsTrimToMaxChar(gtsGenUtils().tsDecode(LName), LUserSettings_EmbedLinkLength + 3),
        recordId: p_RecordObject[gtsJSONConsts().GREPOS_EXPLORER_TREE.REC_ID] || p_RecordObject.get(gtsJSONConsts().GREPOS_EXPLORER_TREE.REC_ID)
      };
      LResult_Arr.push(LObj);
    });

    return LResult_Arr;
  },

  /*
    * @method tsCovertVersionNumberToStr
    *
    * This method will convert the version number in string format
    *
    * @param{float}:  p_floatVersionNum : Version Number float value
    *
    * @return{String}: Version
  */
  tsCovertVersionNumberToStr: function(p_floatVersionNum) {
    var LVersion;

    Assert(!Ext.isNumber(p_floatVersionNum),'Unable to convert version number. Incorrect value provided in tsCovertVersionNumberToStr() of tsclsCommonUtils class..');

    //Convert the number to decimal point value as per format eg: 1 to 1.00
    LVersion = p_floatVersionNum.toFixed(2);

    return LVersion;
  },

  tsPasteLinksInRichTextEditor: function(p_objFroalaEditor) {
    /*
    *
    * @method tsPasteLinksInRichTextEditor
    * method to Paste Links from clipboard to froala Rich Text Editor
    *
    * @private
    * @param {Froala Editor}
    * @return {Boolean} Pasted from clipboard or not
    */

    Assert(Ext.Object.isEmpty(p_objFroalaEditor),"Unable to Paste Links from clipboard to richtext editor. Richtext editor object is not found in tsPasteLinksInRichTextEditor() method");

    let LClipboardData,
        LRecordsToBePastedAsLink,
        LEmbedLinksObj;

    //Only accept CK_RECORDS format if available in clipboard
    LClipboardData = TS.App.Session().Clipboard().GetData([gtsGenConsts().Clipboard().DATA_FORMAT.CF_RECORDS]);

    //return if there's no data
    if(Ext.isEmpty(LClipboardData) === true){
      return false;
    }

    LRecordsToBePastedAsLink = LClipboardData.GetRecordsToPasteAsLink();

    //return if there are no records in Clipboard data. Above method filters Project, baseline, pseudo nodes
    if(Ext.isEmpty(LRecordsToBePastedAsLink)){
      return false;
    }

    LEmbedLinksObj = Ext.create('TS.view.classes.tsclsFroalaEmbedLinks', {});

    try {

      LEmbedLinksObj.CkEditor = p_objFroalaEditor;

      LEmbedLinksObj.CkEditor.selection.save();

      LEmbedLinksObj.EmbedRecordsInFroala(LRecordsToBePastedAsLink,false,false);

      //Clean Clipboard on Paste records
      //Need to try usability of clearing clipboard
      //Purpose is to allow richtext Paste feature of Froala afterwards
      TS.App.Session().Clipboard().CleanUpClipboard();

    }
    finally {
      //TODO : Need to destroy this on all link added success event 
      //destroy the object once used
      ///Ext.destroy(LEmbedLinksObj);
    }

    return true;
  },

  IsEmailSettingConfigured: function() {
    /*
    *
    * @method IsEmailSettingConfigured
    * method to detect if email settings are configured on rest server or not.
    */

    let LIsMailSettingConfigured = TS.App.SystemInformation().IsEmailSettingConfigured();

    if (LIsMailSettingConfigured === false) {
      //Arpan Sir's Feedback Implemented - remove 'Please' from text of 'Please contact your TopTeam Aministrator.'
      TS.App.Feedback.ShowInfoMsg("Unable to send email.<br>"+
                                  "TopTeam email settings have not been configured.<br><br>"+
                                  "Contact your TopTeam Administrator.");

      return false;
    }

    return true;

  },

  tsGetRecordTypesToBeIgnoredForRecordData: function() {
    /**
    * @method tsGetRecordTypesToBeIgnoredForRecordData
    * This method will provide array of recordType Ids for which display record can be skipped
    *
    * @return {Array} Array of recordType Ids
    */

    let LGenConst = gtsGenConsts();

    return [
      LGenConst.GETP_ID.ETP_ID_TEXT,
      LGenConst.GETP_ID.ETP_ID_COLLECTION_FOLDER,
      LGenConst.GETP_ID.ETP_ID_FOLDER_PACKAGE,
      LGenConst.GETP_ID.ETP_ID_SYSTEM_PACKAGE,
      LGenConst.GETP_ID.ETP_ID_PACKAGE,
      LGenConst.GETP_ID.ETP_ID_ONEVIEW_TEXT_SECTION,
      LGenConst.GETP_ID.ETP_ID_ONEVIEW_ASSOCIATIVE_COLLECTION,
      LGenConst.GETP_ID.ETP_ID_ONEVIEW_QUERIED_COLLECTION,
      LGenConst.GETP_ID.ETP_ID_QA_FOLDER,
      LGenConst.GETP_ID.ETP_ID_QA_PACKAGE
    ];
  },

  tsGetPreviousVersion: function(p_intEtpId, p_intRecordId, p_floatCurrVersion) {
    /**
    * @method  tsGetPreviousVersion
    * Desc:
    * get previous version of record
    * @private
    *
    * @param {int}  p_intEtpId : ETP Id of Record
    * @param {int}  p_intRecordId Record Id of record
    * @param {float} p_floatCurrVersion version id of record whose prevous id is to be fetched
    *
    * @return{object}:  record object of previous version
    *
    */

    let LUrl = gtsCacheUtils().tsGetRecordAreaForETPId(p_intEtpId) + "/ByID/" + p_intRecordId + "/versions",
      LResponseString = "";

    Ext.Ajax.request({
      url: gtsGenUtils().tsGetURLInProjectContext(LUrl),
      method: 'GET',
      disableCaching: true,
      //THE AJAX REQUEST SENT IS SYNCHRONOUS REQUEST, BEHAVIOUR OF CACHE DEPENDS ON THIS
      //REQUEST PARAMETER DO NOT CHANGE IT
      async: false,
      success: function (response, options) {
        //Request was successful
        LResponseString = response.responseText;
        
      }


    });

    LResponseString = gtsGenUtils().tsJsonDecode(LResponseString);
    //sort record
    Ext.Array.sort(LResponseString, function (p_obj1, p_obj2) {
      return p_obj1.versionNo < p_obj2.versionNo ? -1 : p_obj1.versionNo === p_obj2.versionNo ? 0 : 1;
    });

    //if there is only one recod (no previous version record)
    if (LResponseString.versions.length === 1) {
      return LResponseString.versions[0];
    }

    //Get previous Version record according to p_floatCurrVersion
    let LPreviousRecord = Ext.Array.findBy(LResponseString.versions, function (name, index, countriesItSelf) {

      return name.versionNo < p_floatCurrVersion;
    });

    return LPreviousRecord;
  },

  tsGetApprovalStatusIndicatorHTML: function(p_objApprovalStatus) {
    /**
    * @method tsGetApprovalStatusIndicatorHTML
    * This method returns HTML to show Approval Status
    *
    * @return {String} HTML
    */

    Assert(Ext.Object.isEmpty(p_objApprovalStatus),"Unable to execute tsGetApprovalStatusIndicatorHTML() method of common util library. Approval Status Object is not found.");

    let LRejectedCount = 0,
        LPendingCount = 0,
        LApprovedCount = 0,
        LAbstainCount = 0,
        LTotalCount = 0,
        LPendingHtml = "",
        LApprovedHtml = "",
        LAbstainHtml = "",
        LRejectedHtml = "";


    LRejectedCount =  parseInt( p_objApprovalStatus[ gtsJSONConsts().GTRC_REVIEW_PKG.RECORDS_TREE.APPROVAL_PROGRESS_REJECTED] );
    LRejectedCount = Ext.isNumber(LRejectedCount) === false || LRejectedCount <= 0 ? 0 : LRejectedCount;

    LPendingCount =  parseInt( p_objApprovalStatus[ gtsJSONConsts().GTRC_REVIEW_PKG.RECORDS_TREE.APPROVAL_PROGRESS_PENDING ]);
    LPendingCount = Ext.isNumber(LPendingCount) === false || LPendingCount <= 0 ? 0 : LPendingCount;

    LApprovedCount = parseInt( p_objApprovalStatus[ gtsJSONConsts().GTRC_REVIEW_PKG.RECORDS_TREE.APPROVAL_PROGRESS_APPROVED ]);
    LApprovedCount = Ext.isNumber(LApprovedCount) === false || LApprovedCount <= 0 ? 0 : LApprovedCount;

    LAbstainCount = parseInt( p_objApprovalStatus[ gtsJSONConsts().GTRC_REVIEW_PKG.RECORDS_TREE.APPROVAL_PROGRESS_ABSTAIN ]);
    LAbstainCount = Ext.isNumber(LAbstainCount) === false || LAbstainCount <= 0 ? 0 : LAbstainCount;

    LTotalCount = LRejectedCount + LPendingCount + LApprovedCount + LAbstainCount;
    //Generating approval progress html
    if( LRejectedCount === 0 &&
       LPendingCount === 0 &&
       LApprovedCount === 0 &&
      LAbstainCount === 0) {
      return "";
    }

    //HTML for pending status
    if (LPendingCount > 0) {

      let LPenColor = "#FFFFFF";//Color taken from Review Package class
      let LPRatio = ( LPendingCount / LTotalCount ) * 100;
      let LAbsHint = ( LPendingCount <= 1 ) ? " reviewer" : " reviewers";//Implemented - USO feedback - TODO-313404, P0 - Update hint text. It should be "Approved by Reviewer" instead of "Approved by User".
      let LPHint = "Waiting for approval from " + LPendingCount + LAbsHint;

      //Fixed - PR-314216 - Review Package - Does not show hand icon when the mouse is hovered on "Review Progress" - Refer Desc
      let LStyleForPenStatus =  "cursor:pointer; background-color: " + LPenColor + ";width:" + LPRatio + "%";
      LPendingHtml = "<td title = '" + LPHint + "' style='" + LStyleForPenStatus + "' align='center' class='tsAppPrgTdCls' >" + LPendingCount + "</td>";
    }
    //HTML for abstained status
    if (LAbstainCount > 0) {
      let LAbsColor = "#B5B5B5";//Color taken from Review Package class
      let LAbstRatio = ( LAbstainCount / LTotalCount ) * 100;
      let LAbstHint =  ( LAbstainCount <= 1 ) ? "Abstained by " + LAbstainCount + " reviewer" : "Abstained by " + LAbstainCount + " reviewers";//Implemented - USO feedback - TODO-313404, P0 - Update hint text. It should be "Approved by Reviewer" instead of "Approved by User".

      //Fixed - PR-314216 - Review Package - Does not show hand icon when the mouse is hovered on "Review Progress" - Refer Desc
      let LStyleForAbstStatus =  "cursor:pointer; background-color: " + LAbsColor + ";width:" + LAbstRatio + "%";
      LAbstainHtml = "<td title = '" + LAbstHint + "'  style='" + LStyleForAbstStatus + "' align='center' class='tsAppPrgTdCls'  >" + LAbstainCount + "</td>";
    }
    //HTML for approved status
    if (LApprovedCount > 0) {
      let LApprColor = "#0CAAAA";
      let LApprRatio = ( LApprovedCount / LTotalCount ) * 100;
      let LApprHint =  ( LApprovedCount<=1 )? "Approved by " + LApprovedCount + " reviewer" : "Approved by " + LApprovedCount + " reviewers";//Implemented - USO feedback - TODO-313404, P0 - Update hint text. It should be "Approved by Reviewer" instead of "Approved by User".

      //Fixed - PR-314216 - Review Package - Does not show hand icon when the mouse is hovered on "Review Progress" - Refer Desc
      let LStyleForApprStatus =  "cursor:pointer; background-color: " + LApprColor + ";width:" + LApprRatio + "%";
      LApprovedHtml = "<td title = '" + LApprHint + "'  style='" + LStyleForApprStatus + "' align='center' class='tsAppPrgTdCls'  >" + LApprovedCount + "</td>";
    }
    //HTML for rejected status
    if (LRejectedCount > 0) {
      let LRejColor = "#EC7777";
      let LRejRatio = ( LRejectedCount / LTotalCount ) * 100;
      let LRejHint = ( LRejectedCount <=1 ) ?  "Needs Revision by " + LRejectedCount + " reviewer" : "Needs Revision by " + LRejectedCount + " reviewers";//Implemented - USO feedback - TODO-313404, P0 - Update hint text. It should be "Approved by Reviewer" instead of "Approved by User".

      //Fixed - PR-314216 - Review Package - Does not show hand icon when the mouse is hovered on "Review Progress" - Refer Desc
      let LStyleForRejStatus =  "cursor:pointer; background-color: " + LRejColor + ";width:" + LRejRatio + "%";
      LRejectedHtml = "<td title = '" + LRejHint + "'  style='" + LStyleForRejStatus + "' align='center' class='tsAppPrgTdCls'  >" + LRejectedCount + "</td>";
    }

    //Creating html for showing progress
    var LDisplayHtml = "<table cellpadding='0' cellspacing='0' border='0' class='tsRvPkgEditorApprovalProgressTblCls tsRvPkgEditorApprovalProgressColWrapperCls'  >";
    LDisplayHtml += "<tr>";
    //Adding Rejected
    LDisplayHtml += LRejectedHtml;
    //Adding Approved
    LDisplayHtml += LApprovedHtml;
    //Adding Abstained
    LDisplayHtml += LAbstainHtml;
    //Adding Pending
    LDisplayHtml += LPendingHtml;
    LDisplayHtml += "</tr>";
    LDisplayHtml += "</table>";

    return LDisplayHtml;
  },

  tsIsCurrentRecordChildOfOneViewDocument: function(p_intRecordId, p_intProjectId, p_intBaselineId) {
    /**
    * @method tsIsCurrentRecordChildOfOneViewDocument
    * This method return if current record belong to OneView Document or not
    *
    * @return {Number} Record Id
    * @return {Number} Project Id
    * @return {Number} Baseline Id
    *
    * @return {Boolean}
    */

    //LIMITATION: The method cannot work for records of associative and queried section

    Assert(Ext.isNumber(p_intRecordId) === false || p_intRecordId <= 0,"Unable to execute tsIsCurrentRecordChildOfOneViewDocument() method of common util for record id: "+ p_intRecordId);
    Assert(Ext.isNumber(p_intProjectId) === false || p_intProjectId <= 0,"Unable to execute tsIsCurrentRecordChildOfOneViewDocument() method of common util for project id: "+ p_intProjectId);
    Assert(Ext.isNumber(p_intBaselineId) === false || p_intBaselineId <= 0,"Unable to execute tsIsCurrentRecordChildOfOneViewDocument() method of common util for baseline id: "+ p_intBaselineId);

    let LEtpIdsInRecordPath = [];

    //First check if the project tree is loaded in data provider or not
    if(TS.App.Cache.DataProvider().Exists(p_intProjectId,p_intBaselineId)){
      let LProjectTree = TS.App.Cache.DataProvider().GetProjectTree(p_intProjectId,p_intBaselineId);
      let LRecordPathByEtpId = LProjectTree.GetPathByProperty(p_intRecordId,gtsJSONConsts().GREPOS_EXPLORER_TREE.ETP_ID);
      LEtpIdsInRecordPath = LRecordPathByEtpId.split("/");
    }

    //If record path is not available in Data Provider, we need to get it from Server
    if(Ext.isEmpty(LEtpIdsInRecordPath)){
      LEtpIdsInRecordPath = [];
      let LRecordPathJSON = gtsGenUtils().GetRecordPathJSON( p_intRecordId,  null, p_intProjectId, p_intBaselineId, false );
      Ext.Array.each(LRecordPathJSON,function(p_objRecordJson){
        LEtpIdsInRecordPath.push(p_objRecordJson.etpId);
      });
    }

    //if the etpId exist in the path, it means the record is child of oneview document
    return Ext.Array.contains(LEtpIdsInRecordPath,gtsGenConsts().GETP_ID.ETP_ID_SRS_DOCUMENT.toString());
  },

  tsGetOwnerOneViewId: function(p_intContainerId) {
    /**
    * @method tsGetOwnerOneViewId
    * This method returns OneView Id for the provider container id
    * Provided that the container belongs to oneview (use tsIsCurrentRecordChildOfOneViewDocument() method for verification)
    *
    * @return {Number} Container Id
    *
    * @return {Number} Owner OneView Id
    */

    //LIMITATION 1: The method cannot work for records of associative and queried section
    //LIMITATION 2: The method won't work for Baselined OneViews

    Assert(Ext.isNumber(p_intContainerId) === false || p_intContainerId <= 0,"Unable to execute tsGetOwnerOneViewId() method of common util for container id: "+ p_intContainerId);

    const LMe = this;

    let LContainerObject = TS.App.Cache.Containers().ById(p_intContainerId);
    Assert(Ext.isEmpty(LContainerObject),"Unable to get container for id:"+ p_intContainerId);

    if(LContainerObject.EtpId() === gtsGenConsts().GETP_ID.ETP_ID_SRS_DOCUMENT){
      return p_intContainerId;
    }else{
      return LMe.tsGetOwnerOneViewId(LContainerObject.OwnerId());
    }
  },

  tsGetETPsToBeIgnoredAsStartFromInDocumentView: function(p_boolForInfoScreen) {
    /**
    * @method tsGetETPsToBeIgnoredAsStartFromInDocumentEditor
    * This method returns array of recordTypes which should not be available as startFrom selection in Document View
    *
    * @return {Array} RecordType Ids
    */
    p_boolForInfoScreen = Ext.isBoolean(p_boolForInfoScreen)? p_boolForInfoScreen: false;

    //Ignore User Defined collections
    let LAllUserDefinedCollectionETPs = gtsCacheUtils().tsGetETPIdsForEtpInd( gtsGenConsts().GETP_INDICATOR.ETP_IND_COLLECTIONS ),
        LWikiEtps = gtsCacheUtils().tsGetETPIdsForEtpInd( gtsGenConsts().GETP_INDICATOR.ETP_IND_WIKI_PAGE ),
        //Fixed [PR-367168] Test Runs - Document View and Tree List View tabs should be hidden for Test Runs - Refer Steps
        //Do not show Document Tab for Test Run System Packages
        LTestRunEtps = gtsCacheUtils().tsGetETPIdsForEtpInd( gtsGenConsts().GETP_INDICATOR.ETP_IND_TEST_RUN ),
        //Ignore following recordTypes
        LArrayETPsToBeIgnored = [
          gtsGenConsts().GETP_ID.ETP_ID_REVIEW_PACKAGE
        ];

    //Implemented - [CR-349146] Document View should allow to open OneView Documents
        //Added support for info screen module as per discussion with Sourabh Sir (18thFeb22)
    if(p_boolForInfoScreen === true){
      LArrayETPsToBeIgnored.push(gtsGenConsts().GETP_ID.ETP_ID_SRS_DOCUMENT);
    }

    LArrayETPsToBeIgnored = Ext.Array.merge( LArrayETPsToBeIgnored,
                                            LAllUserDefinedCollectionETPs,
                                            LWikiEtps,
                                            LTestRunEtps);

    return LArrayETPsToBeIgnored;
  },

  tsGetMsgForFeatureNotSupportedinIE: function(p_strModuleName) {
    /**
    * @method tsGetMsgForFeatureNotSupportedinIE
    * This method returns generic msg if feature is not supported in IE
    *
    * @return {String}
    */

    //Validate if current browser is IE
    Assert(gtsGenUtils().tsIsIE() === false,"Cannot show unsupported browser message. Current browser is not Internet Explorer.");
    //Validate param
    Assert(Ext.isEmpty(p_strModuleName) || Ext.isString(p_strModuleName) === false,"Unable to return msg for browser not supported for module: "+ p_strModuleName);

    return p_strModuleName + " is not supported on this browser - You must use Edge, Chrome, Safari or Firefox.";
  },

  tsGetRegularExpressionForSearch: function(p_strSearchText) {
    /**
    * @method tsGetRegularExpressionForSearch
    * This method returns Regular Expression for provided search text
    *
    * @param{String} p_strSearchText : Search Text
    *
    * @return {Regular Expression}
    */

    if(Ext.isEmpty(p_strSearchText) || Ext.isString(p_strSearchText) === false ){
      return;
    }

    var LSearchText = '',
        LFinalRegEx = null;

    // E.g. consider user provided : '   create     MindMap  '
    // Removes Unnecessay space
    // So that 'create    MindMap'
    LSearchText = p_strSearchText.trim();

    // Removes unnecessary space in between words
    // so that the text becomes 'create MindMap'
    LSearchText = LSearchText.replace(/[ ]+/g," ");
    //[PR-355737] How Do I - Raises Error "Invalid regular expression: /[/: Unterminated character class " when Search action using [ - Refer Steps
    LSearchText = LSearchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create expression
    // join . --> Any Charecter
    // Join * --> 0-n no. of repeatations
    LSearchText = LSearchText.split(" ").join(".*[ ].*");

    // Final RE
    // i for case insensitive
    // g for global
    // RE : /create.*[ ].*MindMap/gi
    LFinalRegEx = new RegExp(LSearchText, "ig");

    return LFinalRegEx;
  },

  tsGetWikiHomepageRecordId: function(p_intProjectId, p_intEtpId, p_intBaselineId, p_boolIsAsync) {
    /**
    * @method tsGetWikiHomepageRecordId
    * This method returns generic msg if feature is not supported in IE
    *
    * @param {Number} ProjectId
    *
    * @return {Number} Wiki HomePage RecordId
    */

    /**
    searchByName Response Json:

    {
      "resultContentType": "json",
      "success": true,
      "response": {
        "children": [
          {
            "name": "03. Advanced BPMN 2.0 Elements",
            "recordId": 376529611
          }
        ]
      }
    }
    */

    p_boolIsAsync = p_boolIsAsync === true;

    //Set default values and validate params
    Assert(Ext.isNumber(p_intProjectId) === false || p_intProjectId <= 0,"Unable to find Wiki Page Home record for project id = " + p_intProjectId);

    p_intEtpId = Ext.isEmpty(p_intEtpId) ? gtsGenConsts().GETP_ID.ETP_ID_WIKI_PAGE : p_intEtpId;
    p_intBaselineId = Ext.isEmpty(p_intBaselineId) ? 1 : p_intBaselineId;

    var LMe = this,
        LKey = p_intProjectId+"_"+p_intEtpId+"_"+p_intBaselineId,//Creting key with combination of project id + etpid + baselineid
        LRecordId,
        LSearchText = "";

        //Fixed [PR-353563] Process Guidance Page - Error is detected when user tried to navigate to the other process guidance page via Wiki map.
        //Home page for Process Guidance Pages is SYS%_Home and for shipping Wiki pages it's "Home"
        LSearchText =  p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_PROCESS_GUIDANCE_PACKAGE ? gtsMetadataConsts().NavigationPage().SYS_PREFIX + "Home" : "Home";

    // get record in hashmap collection
    LRecordId = LMe.FWikiHomeRecordCollection.get(LKey);

    if(Ext.isEmpty(LRecordId) === false){

      if(p_boolIsAsync){
        return Promise.resolve(LRecordId);
      }else{
        return LRecordId;
      }
      
    }

    //Check for wiki home record in data provider
    if(TS.App.Cache.DataProvider().Exists(p_intProjectId,p_intBaselineId)){
      var LProjectTree = TS.App.Cache.DataProvider().GetProjectTree(p_intProjectId,p_intBaselineId),
          LHomeRecordId = LProjectTree.GetWikiHomePageRecordId(p_intEtpId);
      if(Ext.isNumber(LHomeRecordId) === true && LHomeRecordId > 0){
        LMe.FWikiHomeRecordCollection.add(LKey,LHomeRecordId);
        if(p_boolIsAsync){
          return Promise.resolve(LHomeRecordId);
        }else{
          return LHomeRecordId;
        }
      }
    }

        //if wiki record is not found in data provider then get record id using search command
        let LFnGetSearcedRecord = function(p_RecordArr){
          Ext.Array.each(p_RecordArr,function(p_objRecord){
            var LRecName = p_objRecord.name;
            LRecName =  gtsGenUtils().tsDecode(LRecName);
            LRecName =LRecName.toUpperCase();
            if(LRecName === LSearchText.toUpperCase()){
              LRecordId = p_objRecord.recordId;
              LMe.FWikiHomeRecordCollection.add(LKey,LRecordId);
            }
          });
    
          if(Ext.isEmpty(LRecordId)){
                LRecordId = -1;
                LMe.FWikiHomeRecordCollection.add(LKey,LRecordId);
          }
    
          return LRecordId;
        };
    if(p_boolIsAsync){
      return new Promise((resolve)=>{
        LMe.tsSearchRecordsByName(p_intProjectId, p_intEtpId, p_intBaselineId, LSearchText, false, true, function(p_RecordArr){
          resolve(LFnGetSearcedRecord(p_RecordArr));
        });
      });
    }else{
      let LSearchedResult = LMe.tsSearchRecordsByName(p_intProjectId, p_intEtpId, p_intBaselineId,LSearchText);
      return LFnGetSearcedRecord(LSearchedResult);
    }
  },

  tsGetProcessPageForProject: function (p_intProjectId) {
    /**
    * @method tsGetProcessPageForProject
    * This method returns generic msg if feature is not supported in IE
    *
    * @param {Number} ProjectId
    *
    * @return {Number} Wiki HomePage RecordId
    */

    var LPrimaryProcessId = null,
      LProjectCacheObject = null;

    //Set default values and validate params
    Assert(Ext.isNumber(p_intProjectId) === false || p_intProjectId <= 0, "Unable to find Process Page record for project id = " + p_intProjectId);

    //Implemented - ArpanG - We should first check and raise error if project is not found in cache for p_intProjectId
    LProjectCacheObject = TS.App.Cache.Projects().ById(p_intProjectId);
    Assert(Ext.isEmpty(LProjectCacheObject), "Project Cache Object is found empty for Project Id = " + p_intProjectId);

    //Get primary process id for project
    LPrimaryProcessId = LProjectCacheObject.PrimaryProcessId();

    //Va;idation of process id
    LPrimaryProcessId = (Ext.isNumber(LPrimaryProcessId) === false || LPrimaryProcessId <= 0) ? null : LPrimaryProcessId;

    return LPrimaryProcessId;
  },

  tsSearchRecordsByName: function(p_intProjectId, p_intEtpId, p_intBaselineId, p_strSearchText, p_boolIsPartialSearch,p_boolIsAsync,p_funCallback) {
    /**
    * @method pvtGetWikiId
    * This method returns Wiki Record Id
    *
    * @param {Number} ProjectId
    *
    * @return {Number} Wiki HomePage RecordId
    */

     p_boolIsAsync = Ext.isBoolean(p_boolIsAsync) ? p_boolIsAsync : false;

    Assert(Ext.isNumber(p_intProjectId) === false || p_intProjectId <= 0,"Unable to find Wiki Page record for project id = " + p_intProjectId);
    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0,"Unable to find Wiki Page record type = " + p_intEtpId);
    Assert(Ext.isNumber(parseInt(p_intBaselineId)) === false || parseInt(p_intBaselineId) <= 0,"Unable to find Wiki Page record for baselineId = " + p_intBaselineId);
    Assert(Ext.isString(p_strSearchText) === false,"Unable to find Wiki Page record type for Name = " + p_strSearchText);

    var LIsPartialSearch = Ext.isEmpty(p_boolIsPartialSearch) ? false : p_boolIsPartialSearch,
      LParamsObj = {
        "projectId": p_intProjectId,
                      "recordtype": p_intEtpId,
                      "tsSearchText":p_strSearchText,
                      "baselineId" : p_intBaselineId,
        "isPartialSearch": LIsPartialSearch
      },
        LUrl = gtsGenUtils().tsGetURLInProjectContext('searchByName'),
        LRecordArray = [];

    Ext.Ajax.request({
      url:LUrl ,
      params : LParamsObj,
      method: "GET",
      async: p_boolIsAsync,
      success: function (response) {
        //Request was successful
        var LResponseString = response.responseText,
            LResponseJson = gtsGenUtils().tsJsonDecode(LResponseString);

        LRecordArray= LResponseJson.children;
        if(Ext.isFunction(p_funCallback)){
          p_funCallback(LRecordArray);
        }
        
      },
      failure: function(){
        if(Ext.isFunction(p_funCallback)){
          p_funCallback([]);
        }
      }
    });

    return LRecordArray;
  },

  tsExecutionActionInNewWindow: function(p_objRequestJson, p_strAction) {
    /*
    INTENT - This function will create local storage for unique id and set received request json as value
           - This will generate url on the basis of action and execute url in new window
    */

    var LLocalStorageId,
        LAction = p_strAction || '',
        LExecutionActionConst = gtsGenConsts().ExecutionAction(),
        LUrl = '';

    //this will generate the local storage id
    LLocalStorageId = 'tsExecuteAction_'+LAction+gtsGenUtils().tsGetUniqueId();

    //this will set the local storage with unique key
    if(Ext.isEmpty(p_objRequestJson) === false){
      localStorage.setItem(LLocalStorageId,p_objRequestJson);
    }

    switch(LAction){
      case LExecutionActionConst.DOC_GENERATE:
      case LExecutionActionConst.EXPORT_ONEVIEW_DOCUMENT:

        LUrl = 'tsResources/run/index.html?data='+LLocalStorageId+'&action='+LAction;

        break;
    }

    gtsGenUtils().tsOpenURLInNewWindow(LUrl);
  },

  tsLoadRibbonLibrary: function() {
    /*
    *
    * @method tsLoadRibbonLibrary
    * This method will load ribbon library
    *
    * @param {null}
    * @return {null}
    */

    //Promise created to make flow sequential
    return new Ext.Promise(function (p_fnResolve, p_fnReject){

      TS.App.ResourceLoader.Load('SyncFusionEjs1',function(){
        p_fnResolve();
      }); 
        });
  },

  tsCanShowCheckInOutActionForRecordType: function(p_intRecordType) {
    /*
    * @method tsCanShowCheckInOutActionForRecordType
    * This method will check whether checkIn/Out action can be shown for specified recordType
    *
    * @param {Number} p_intRecordType recordTypeId
    *
    * @return {Booleam} true if action can be shown, else false
    */

    var LResult = true,
        LETPIdConst = gtsGenConsts().GETP_ID,
        LETPIndConst = gtsGenConsts().GETP_INDICATOR,
        LETPIndicator;

    Assert( Ext.isEmpty( p_intRecordType ), "Cannot check actionAvaility for Check In/Out action. Invalid recordType id found in tsCanShowCheckInOutActionForRecordType() of CommonUtils class." );

    //get etp indicator
    LETPIndicator = gtsCacheUtils().tsGetETPIndicatorFromId( p_intRecordType );

    //show action for folders
    LResult = LResult || ( LETPIndicator === LETPIndConst.ETP_IND_COLLECTION_FOLDER ||
                          LETPIndicator === LETPIndConst.ETP_IND_FOLDER );

    //do not show check out action for following record types
    LResult = LResult && !( LETPIndicator === LETPIndConst.ETP_IND_SRS_DOCUMENT ||
                           p_intRecordType === gtsGenConsts().GETP_ID.ETP_ID_SYSTEM_PACKAGE ||
                           p_intRecordType === LETPIdConst.ETP_ID_QUERIED_COLLECTION ||
                           p_intRecordType === LETPIdConst.ETP_ID_ONEVIEW_QUERIED_COLLECTION ||
                           p_intRecordType === LETPIdConst.ETP_ID_ASSOCIATIVE_COLLECTION ||
                           p_intRecordType === LETPIdConst.ETP_ID_ONEVIEW_ASSOCIATIVE_COLLECTION ||
                           p_intRecordType === LETPIdConst.ETP_ID_UNCONFIGURED_PACKAGE ||
                           p_intRecordType === LETPIdConst.ETP_ID_TEST_SET ||
                           p_intRecordType === LETPIdConst.ETP_ID_REVIEW_PACKAGE );

    return LResult;
  },

  //Implemented TODO: Need to remove Help Code Related functions to singleton class
  tsCanShowHelpLinkForHelpCode: function(p_strHelpCode) {
    /*
    * Intent: The function will returns the visibility of the help button for module
    *
    * Access: Public
    *
    * @param{String}: p_strHelpCode - Module type
    *
    * @return{Boolean}: true if module type and link are valid
    *
    */
    return gtsTopTeamHelp.tsCanShowHelpLinkForHelpCode(p_strHelpCode);
  },
  tsGetHelpLinkForHelpCode: function(p_strHelpCode) {
    /*
    * Intent: The function will return the link for the module according to the module type
    *
    * Access: Public
    *
    * @param{String}: p_strHelpCode - Help COde
    *
    * @return{String}: Documentation link of the module if found
    *
    */
    return gtsTopTeamHelp.tsGetHelpLinkForHelpCode(p_strHelpCode);
  },

  tsGetHelpHintForHelpCode: function(p_strHelpCode) {
    /*
    * Intent: The function will return the hint for the module according to the module type
    *
    * Access: Public
    *
    * @param{String}: p_strHelpCode - Module type
    *
    * @return{String}: Documentation hint of the module if found
    *
    */
    return gtsTopTeamHelp.tsGetHelpHintForHelpCode(p_strHelpCode);
  },
  /**
   * this function will execute help link using Help code.
   * @method tsOpenHelpForCode
   * @public
    *
   * @param {string} p_strHelpCode help code to execute help
   * @param {object} p_ObjButton Help button object use to find if it's placed in modal window or not.
    */
  tsOpenHelpForCode: function(p_strHelpCode,p_ObjButton) {

    gtsTopTeamHelp.OpenHelpForCode(p_strHelpCode,p_ObjButton);
  },

  tsGetRelativeWindowSizeAsPerViewport: function(p_objWindow) {
    //This function will return the size of window in percentage as the view port
    //Here percentage are not the actual percentage but the normal value which will act as percentage of main view port

    //IMP - If you are using this function to get size then use tsGetAbsoluteWindowSizeAsPerViewport to retrive original size

    var LViewportHeight,
        LViewportWidth,
        LWindowHeight,
        LWindowWidth,
        LSizeObj= {};

    if (Ext.isEmpty(p_objWindow)){
      return LSizeObj;
    }

    //Get viewport height and width
    LViewportHeight= Ext.getViewportHeight();
    LViewportWidth= Ext.getViewportWidth();

    //Get windows height and width
    LWindowHeight= p_objWindow.getHeight();
    LWindowWidth= p_objWindow.getWidth();

    //Return relative height and width
    LSizeObj.height = LWindowHeight/LViewportHeight;
    LSizeObj.width = LWindowWidth/LViewportWidth;

    return LSizeObj;
  },

  tsGetRelativeWindowPositionAsPerViewport: function(p_objWindow) {
    //This function will return the size of window in percentage as the view port
    //Here percentage are not the actual percentage but the normal value which will act as percentage of main view port

    //IMP - If you are using this function to get size then use tsGetAbsoluteWindowSizeAsPerViewport to retrive original size

    var LViewportHeight,
        LViewportWidth,
        LWindowPosX,
        LWindowPosY,
        LPosObj= {};

    if (Ext.isEmpty(p_objWindow)){
      return LPosObj;
    }

    //Get viewport height and width
    LViewportHeight= Ext.getViewportHeight();
    LViewportWidth= Ext.getViewportWidth();

    //Get windows height and width
    LWindowPosX= p_objWindow.x;
    LWindowPosY= p_objWindow.y;

    //Return relative height and width
    LPosObj.x = LWindowPosX/LViewportWidth;
    LPosObj.y = LWindowPosY/LViewportHeight;

    return LPosObj;
  },

  tsGetAbsoluteWindowSizeAsPerViewport: function(p_objRelativeSize) {
    //This function will return the absolute size of window as per the view modal based on relative size.
    //Note: Call this function if you have get relative size from the tsGetRelativeWindowSizeAsPerViewport.

    var LViewportHeight,
        LViewportWidth,
        LWindowHeight,
        LWindowWidth,
        LSizeObj={};

    //If any of the object is empty then return
    if (Ext.isEmpty(p_objRelativeSize)) {
          return;
    }

    //Get viewport height and width
    LViewportHeight= Ext.getViewportHeight();
    LViewportWidth= Ext.getViewportWidth();

    //Calculate the windows height and width
    LWindowHeight= LViewportHeight * p_objRelativeSize.height;
    LWindowWidth= LViewportWidth * p_objRelativeSize.width;

    LSizeObj.height = LWindowHeight;
    LSizeObj.width = LWindowWidth;

    return LSizeObj;
  },

  tsGetAbsoluteWindowPositionAsPerViewport: function(p_objRelativePos) {
    //This function will return the absolute size of window as per the view modal based on relative size.
    //Note: Call this function if you have get relative size from the tsGetRelativeWindowSizeAsPerViewport.

    var LViewportHeight,
        LViewportWidth,
        LWindowPosX,
        LWindowPosY,
        LPosObj={};

    //If any of the object is empty then return
    if (Ext.isEmpty(p_objRelativePos)) {
      return;
    }

    //Get viewport height and width
    LViewportHeight= Ext.getViewportHeight();
    LViewportWidth= Ext.getViewportWidth();

    //Calculate the windows height and width
    LWindowPosX= LViewportWidth * p_objRelativePos.x;
    LWindowPosY= LViewportHeight * p_objRelativePos.y;

    LPosObj.x = LWindowPosX;
    LPosObj.y = LWindowPosY;

    return LPosObj;
  },

  tsAdjustWindowSizeAsPerViewPort: function(p_objSizeAndPos) {
    //This function will adjust the position of window as per the view port

    var LSettingObj= p_objSizeAndPos,
        LViewportHeight,
        LViewportWidth,
        LWindowHeight,
        LWindowWidth,
        LPosX,
        LPosY;

    if (Ext.isEmpty(p_objSizeAndPos) === true){
      return;
    }

    //Get viewport height and width
    LViewportHeight= Ext.getViewportHeight();
    LViewportWidth= Ext.getViewportWidth();

    LWindowHeight= LSettingObj.height;
    LWindowWidth= LSettingObj.width;
    LPosX= LSettingObj.x;
    LPosY= LSettingObj.y;

    if ((LWindowHeight + LPosY) >= LViewportHeight){
      //here means that the current window position will go out of the viewport from height point of view
      //So we need to move position back by access height

      var LAccessHeight= (LWindowHeight + LPosY) - LViewportHeight;
      LSettingObj.y= LPosY - LAccessHeight;

      if (LSettingObj.y < 0){
        LSettingObj.y = 0;
      }

    }

    if ((LWindowWidth + LPosX) >= LViewportWidth){
      //here means that the current window position will go out of the viewport from width point of view
      //So we need to move position back by access width

      var LAccessWidth= (LWindowWidth + LPosX) - LViewportWidth;
      LSettingObj.x= LPosX - LAccessWidth;

      if (LSettingObj.x < 0){
        LSettingObj.x = 0;
      }
    }

    return LSettingObj;
  },

  /* This function will return HTML Map information of shapes which are linked to primary record for passed diagram record */
  tsGetNavigationDiagram: function(p_intRecordId, p_intUqId, p_strMapName) {

    //This function will return promise and on resolve of this promise it will return image data
    var L_GetDiagramImage = function() {

      var LUrl = '',
          LDeferred = new Ext.Deferred();

      LUrl = 'repositoryobjects/ByID/' + p_intRecordId + '/fields/Diagram/image?tsShowCallout=false';

      LUrl = gtsGenUtils().tsGetURLInProjectContext(LUrl, '', '', "_dc=" + new Date().getTime());

      var LXHR = new XMLHttpRequest();

      LXHR.onload = function () {

        var reader = new FileReader();

        reader.onloadend = function () {

          var LResult = reader.result;

          /** TODO -Pawan - if we add support in image command to return image of requested type then we can avoid error in case of image type mismatch */
          LResult = LResult.replace('text/html', 'image/jpeg');

          LDeferred.resolve(LResult);
        };

        //Reject promise if there is any error during data read operation
        reader.onerror = function() {

          LDeferred.reject();
        };

        reader.readAsDataURL(LXHR.response);
      };

      LXHR.onloadstart = function(ev) {

        LXHR.responseType = "blob";
      };

      //Reject promise if there is any server error
      LXHR.onerror = function() {

        LDeferred.reject();
      };

      LXHR.open('GET', LUrl , true);
      LXHR.send();

      return LDeferred.promise;
    };


    //This function will return promise and on resolvement it will return image map string
    var L_GetDiagramMap = function() {

      var LRecordId = p_intRecordId,
          LRecordUqId = p_intUqId,
          LBaselineId = parseInt(TS.App.ActiveBaselineId()),
          LUrl = '',
          LParams = '',
          LResponseObj = {},
          LNavigationData = {},
          LDeferred = new Ext.Deferred();

      /** TODO -Pawan - Just like here, when fetching diagram image, can we not use baseline, uqid, etc. parameters?? */
      LParams = "tsNameMaxLength=" + gtsGenConsts().GTrimConst.MAX_TITLE_LENGTH_FOR_DISPLAY +
        "&baselineId=" + LBaselineId + "&tsRecordId=" + LRecordId +
        "&tsRecordUqId=" + LRecordUqId + "&tsShowCallout=true";

      LUrl = gtsGenUtils().tsGetURLInProjectContext("repositoryObjects/ById/" + LRecordId + "/navigationMapInfo", '','', LParams);

      //Load data from Json file and store it to AdminJson.
      Ext.Ajax.request({
        url: LUrl,
        method : 'GET',
        async: false,
        defaultHeaders: {
          'Accept': 'application/json'
        },
        success: function(p_objResponse, opts) {

          var LCurrentShape = null,
              LLeft = null,
              LTop = null,
              LImageMap = '',
              LTitle = '',
              LLeftMargin = null,
              LLinkObject = null,
              LRecordInfo = null,
              LLinkedRecordName = null,
              LIndexOfDispId = null,
              LIndexOfSpace = null,
              LTopMargin = null;

          LResponseObj = gtsGenUtils().tsJsonDecode(p_objResponse.responseText);

          if(Ext.isEmpty(LResponseObj)) {

            /** TODO -Pawan - You need to reject the promise and then return. same for other returns*/
            LDeferred.reject();
            return;
          }//if..

          LResponseObj = LResponseObj.diagramProperties;

          if(Ext.isEmpty(LResponseObj)) {

            LDeferred.reject();
            return;
          }//if..

          LNavigationData = LResponseObj.clickableProperty;

          if(Ext.isEmpty(LNavigationData)) {

            //As there can be a diagrams which does not contains any clickable shapes
            LDeferred.resolve();
            return;
          }//if..

          LImageMap = '<map name="' + p_strMapName + '">';

          //Now we need to loop through the shapes and create area tags for map
          for(var LIndex = 0; LIndex < LNavigationData.length; LIndex++) {

            LTitle = '';

            LCurrentShape = LNavigationData[LIndex];

            if(Ext.Object.isEmpty(LCurrentShape)) {

              continue;
            }//if..

            LLinkObject = {

              actionType: LCurrentShape.actionType,
              actionValue: LCurrentShape.actionValue
            };

            switch(LLinkObject.actionType) {

              case gtsJSONConsts().NavigationDiagram().ACTION_TYPE.OPEN_URL:

                //If url title is present then use it as a hint otherwise use URL as a hint
                LTitle = LLinkObject.actionValue.urlTitle || '';

                LTitle = (LTitle === '') ? LLinkObject.actionValue.url : LTitle;

                LTitle = 'Launch URL : ' + LTitle;

                break;

              case gtsJSONConsts().NavigationDiagram().ACTION_TYPE.OPEN_ACTION:

                LTitle = 'Execute: ' + LLinkObject.actionValue.actionTitle;

                break;

              case gtsJSONConsts().NavigationDiagram().ACTION_TYPE.OPEN_RECORD:

                //Logic : Locate where disp id is present.
                //Then find last position of "space". Name will be before that
                LIndexOfDispId = LLinkObject.actionValue.linkedRecordName.indexOf(LLinkObject.actionValue.linkedDispId);

                LLinkedRecordName = LLinkObject.actionValue.linkedRecordName.substr(0, LIndexOfDispId);

                LIndexOfSpace = LLinkedRecordName.lastIndexOf(' ');

                LLinkedRecordName = LLinkObject.actionValue.linkedRecordName.substr(0, LIndexOfSpace);

                LTitle = "Navigate to: " + LLinkedRecordName;

                break;
            }//switch..

            //Converting it into string then we will encode it
            LRecordInfo = JSON.stringify(LLinkObject);

            LRecordInfo = Ext.util.Base64.encode(LRecordInfo);

            LLeft = LCurrentShape.left;
            LTop = LCurrentShape.top;
            /** TODO -Pawan - Variable names should be LRight and LBottom  */
            LLeftMargin = LLeft + LCurrentShape.width;
            LTopMargin = LTop + LCurrentShape.height;

            LImageMap = LImageMap +
              "<area shape='rect' title='" + LTitle + "' coords='" + LLeft + "," + LTop + "," +
              LLeftMargin + "," + LTopMargin +
              "' href='javascript:gtsDOMUtils().tsNavigateToRecord(\"" + LRecordInfo + "\")'>";
          }//for..

          LImageMap = LImageMap + '</map>';

          LDeferred.resolve(LImageMap);
        },
        failure: function(response, opts) {

          LDeferred.reject(response);
        }
      });

      return LDeferred.promise;
    };

    //This was request by Web team that they need UQ Id back in response to resolve issue
    //related to when multiple diagrams are embedded in rich text at same time
    var L_GetUQId = function() {

      var LDeferred = new Ext.Deferred();

      setTimeout(function() {

        LDeferred.resolve(p_intUqId);
      });

      return LDeferred.promise;
    };

    if(Ext.isEmpty(p_intRecordId)) {

      return;
    }//if..

    return Ext.Deferred.parallel([L_GetDiagramImage, L_GetDiagramMap, L_GetUQId]);
  },

  tsGetNslinkInfoObjectFromString: function(p_strNslinkinfo) {
    /**
    * @method tsGetNslinkInfoObjectFromString
    *
    * Desc this method convert nslinkinfo of string to object
    *
    * @param {string} Nslinkinfo sting
    *
    * @return {objet}
    */

    Assert(Ext.isEmpty(p_strNslinkinfo),"Cannot convert object of "+p_strNslinkinfo+" in tsGetNslinkInfoObjectFromString");
    var LLinkInfoDecrypted = gtsGenUtils().tsDecryptBase64(p_strNslinkinfo);


    LLinkInfoDecrypted = LLinkInfoDecrypted.split(',');

    var LLinkInfoDecryptedObject = {};

    Ext.Array.each( LLinkInfoDecrypted, function(item){
      //Removing " double quotes from the attribute name.
      //In case of "Title=This is my title" attribute value pair, the double quotes are added suffix and prefix 
      item = item.replace(/^"|"$/g, '');
      var LItem = item.split('=');
      var LName = LItem[0];
      var LValue = LItem[1];
      LLinkInfoDecryptedObject[LName] = LValue;
    });
    return LLinkInfoDecryptedObject;
  },

  tsGetOpenInDesktopIconBase64Src: function() {
    /*
    @method tsGetOpenInDesktopIconBase64Src

    @param {none}

    @return {string} img src string
    */

    return "data:application/octet-stream;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAARElEQVR42mP8//8/AyWAkVQDVq1a9Z8iA9ANIssAkOawsDBGEE2WF0CaYWyyvQAPg5UrV2KYAHMeNvHhaMBoIA6CQAQANBlr1dZhH7cAAAAASUVORK5CYII=";
  },

  tsCanCloneProject: function(p_intProjectId) {
    /*
    *@method tsCanCloneProject
    *
    *@param{interger} p_intProjectId Project Id
    *
    *
    *return{boolean}
    **/

    var LCanCreateBranch = true,
        LProjectCacheobj = TS.App.Cache.Projects().ById(p_intProjectId);

    Assert(Ext.isEmpty(LProjectCacheobj),"Project Cache Object  is found empty for Project Id: "+ p_intProjectId);
    //if it is system project then do not allow it for clone
    if(LProjectCacheobj.IsSystemProject() === true){
       LCanCreateBranch = false;
    }
     if(LProjectCacheobj.EtpId() === gtsGenConsts().GETP_ID.ETP_ID_PROJECT_TYPE_CATALOG){
       LCanCreateBranch = false;
    }

    return LCanCreateBranch;
  },

  tsGetReadOnlyMsgForSystemRecord: function(p_strRecordName) {
    /**
    * @method tsGetReadOnlyMsgForSystemRecord
    * This method returns generic msg for the system records to show on UI
    *
    * @param {string} p_strRecordName - Name of the record for which message needs to be shown
    *
    * @return {string} Read-only Message to show on UI
    */

    var LRecName= gtsGenUtils().tsDecode(p_strRecordName),
        LNavConst= gtsMetadataConsts().NavigationPage(),
        LMessage= "",
        LEtpName = '',
        LUserTypeStr= "";

    //Set default message
    LMessage= "This record is owned by the system and it cannot be edited by any user. You can make a clone and edit it.";

    //if current record has

    if (LRecName.indexOf(LNavConst.SYS_PREFIX) === 0){
      //here means that the current record is sytem navigation page. So get the page type.

      //Split the string using "_"
      var LStringArray= LRecName.split("_");

      //2nd part will be the home page type name i.e Home Author, Home Viewer etc.
      var LHomePageType= LStringArray[1];

      //DONE - ArpanG - Switch does case sensitive search. On safer side compare with uppercase text.
      switch (LHomePageType.toUpperCase()) {
        case LNavConst.HOME_AUTHOR.toUpperCase():
          LUserTypeStr= 'Author';
          break;

        case LNavConst.HOME_VIEWER.toUpperCase():
          LUserTypeStr= 'Viewer';
          break;

        case LNavConst.HOME_COLLABORATOR.toUpperCase():
          LUserTypeStr= 'Collaborator';
          break;

        //DONE - ArpanG - we should have default case and return default message.
        default:
          return LMessage;

      }

      LEtpName = gtsCacheUtils().tsGetETPSingularNameFromId(gtsGenConsts().GETP_ID.ETP_ID_NAVIGATION_PAGE).toLowerCase();

      //ArpanG - DONE - Use Ext.String.format
      //JayJ - Implemented Text review feedback from Preksha ma'am
      LMessage= "This " + LEtpName + " is owned by the system, and you cannot edit it. " +
                "It is the <b>Home page</b> of {0} Users. " +
                "To customize this page, you need to clone it with the name <i>{1}</i>. " +
                "If you have already created a page with that name, navigate to the corresponding page and edit.";
      LMessage= Ext.String.format(LMessage, LUserTypeStr, LHomePageType);
    }

    return LMessage;
  },

  tsGetHintTemplateForRulesetGroup: function(p_intTraceRulesetId, p_intGroupid, p_boolIsForward,p_boolDisplayAsForwardlink) {
    /**
    * @private
    * @method tsGetHintTemplateForRulesetGroup
    * Return template for hint for the group
    *
    * @param{integer) p_intTraceRulesetId : trace ruleset id
    * @param{integer) p_intGroupid : ruleset group id
    * @param{Boolean) p_boolIsForward : link type direction
    * @return{String} template html
    **/

    Assert((Ext.isNumber(p_intTraceRulesetId) === false), 'Unable to get template for ruleset group. Invalid ruleset found for id = '+p_intTraceRulesetId+'in tsGetHintTemplateForRulesetGroup() of class tsclsCommonUtils');
    Assert((Ext.isNumber(p_intGroupid) === false), 'Unable to get template for ruleset group. Invalid group found for id = '+p_intGroupid+'in tsGetHintTemplateForRulesetGroup() of class tsclsCommonUtils');
    p_boolIsForward = Ext.isBoolean(p_boolIsForward) ? p_boolIsForward : true;
    p_boolDisplayAsForwardlink = Ext.isBoolean(p_boolDisplayAsForwardlink) ? p_boolDisplayAsForwardlink : false;
    var LTraceRulesetId = p_intTraceRulesetId,
        LGroupId = p_intGroupid,
        LIsForwardDirection = p_boolIsForward,
        LDisplayHtml = '',
        LFromEtpName = '',
        LFromRecIconCls,
        LArrRulesHtml = [],
        LArrCompleteHtml = [],
        LRotationOfIcon = '',
        LTopMargin ='',
        LTraceSchemaGroups,
        LCacheObjTraceRule,
        LArrowIconCls = gtsGenUtils().tsGetClsForGenImg16( gtsGenConsts().GGEN_IMAGE_INDEX.TOP_RIGHT_BLACK_ARROW );
    let LlinkDirectionForName,
      LLastName,
      LLastCls,
      LFirstCls,
      LFirstEtpName;
    if (p_boolDisplayAsForwardlink === true) {
      LlinkDirectionForName = false;
    } else {
      LlinkDirectionForName = !LIsForwardDirection;
    }

    //retrive schema rules from TRace Ruleset cache object
    LCacheObjTraceRule = TS.App.Cache.TraceRulesets().ById(LTraceRulesetId);

    //Validate Cache
    Assert(Ext.isEmpty(LCacheObjTraceRule), "Cannot generate template for group. Invalid Traceability RuleSet cache object found for id=" + LTraceRulesetId + " in tsGetHintTemplateForRulesetGroup() of tsclsCommonUtils class.");

    var LTraceSchemaRules = LCacheObjTraceRule.SchemaRules();

    //Validate Cache
    Assert(Ext.isEmpty(LTraceSchemaRules), "Cannot generate template for group. Invalid Traceability RuleSet cache object found for id=" + LTraceRulesetId + " in tsGetHintTemplateForRulesetGroup() of tsclsCommonUtils class.");


    if (LIsForwardDirection){//here means forward direction
      LTraceSchemaGroups = LTraceSchemaRules.DownstreamRules();

      //get direction icon
      LRotationOfIcon = 45;
      LTopMargin= "top:5px;";
  }
    else {//here means reverse direction
      LTraceSchemaGroups = LTraceSchemaRules.UpstreamRules();
      //get direction icon
      LRotationOfIcon = -135;
      LTopMargin = "top:2px;";
    }
    if (p_boolDisplayAsForwardlink === true) {
      LRotationOfIcon = 45;
      LTopMargin = "top:5px;";
    }
    //Here we fetch all grups for the ruleset sent scema as per the direction
    for (var LIndex = 0; LIndex < LTraceSchemaGroups.Count(); LIndex++) {//Loop through all root record type

      var LEtpRule = LTraceSchemaGroups.ByIndex(LIndex),
          LGroups = LEtpRule.Groups(),
          LCount2 = LGroups.Count(),
          LFromEtpId = LEtpRule.EtpId();

      //For all group of etp rule
      for (var LIndex2 = 0; LIndex2 < LCount2; LIndex2++) {//Loop through each root record type child(rulse and groups)

        var LTempGroup = LGroups.ByIndex(LIndex2);
        if( LTempGroup.Id() === LGroupId){//match
          //here we get the parent record id from which we fetch required data
          LFromEtpName =gtsCacheUtils().tsGetETPSingularNameFromId( LFromEtpId );
          LFromRecIconCls = gtsCommonUtils().tsGetImgIconClsForRecordType( LFromEtpId );
          break;
        }
      }

      if(Ext.isEmpty(LFromEtpName) === false){
        break;
      }
    }

    var LGroup = LTraceSchemaGroups.GetGroupById(LGroupId);
    //Validate grup cache
    Assert(Ext.isEmpty(LGroup), "Cannot arrange trace rule hashmap for template. Invalid Group cache object found for id=" + LGroupId + " in tsGetHintTemplateForRulesetGroup() of tsclsCommonUtils class.");

    var LGroupName = LGroup.Name();

    //Created template for the rule
    var LCssFileTemplate = new Ext.XTemplate(
      "<div style='padding:10px 0px 0px 0px;'>",
          //Html for from etp name and icon
          "<span style='position:relative; top:2px; margin:0px 5px 0px 3px; width:16px; height:16px;display:inline-block;' class='{fromEtpIconCls}'></span>",
          "{fromEtpName}" ,
          //Html for link type name and arrow
          "<span style='position:relative; {topMargin} margin:0px 5px 0px 5px; width:16px; height:16px; display:inline-block; transform: rotate( {rotationOfIcon}deg);' class={arrowIconCls}></span>",
          " {linkTypeName}",
          "<span style='position:relative; {topMargin} margin:0px 5px 0px 5px; width:16px; height:16px; display:inline-block; transform: rotate({rotationOfIcon}deg);' class={arrowIconCls}></span>" ,
          //Html for to etp name and icon
          "<span style='position:relative; top:2px; margin:0px 5px 0px 3px; width:16px; height:16px; display:inline-block;' class='{toEtpIconCls}'></span>" ,
          "{toEtpName}" ,
      "</div>"
    );

    //Todo - ArpanG - Use constant instead of hard coding
    if(LGroup.Type() === "group"){//Here means created templates for group

      var LRules = LGroup.Rules(),
          LRuleCount = LRules.Count();

      for (var LCount = 0; LCount < LRuleCount; LCount++) {//Created html for the Each Rules

        var LRule = LRules.ByIndex(LCount),
            LToEtpName =gtsCacheUtils().tsGetETPSingularNameFromId(LRule.EtpId()),
            LToRecIconCls = gtsCommonUtils().tsGetImgIconClsForRecordType( LRule.EtpId() ),
          LLinkTypeName = gtsCacheUtils().tsGetLinkNameById('', LRule.SatId(), LlinkDirectionForName);

        //Here we created copy of xtemplate to maintain original Template
        var LTmpXtemplate = LCssFileTemplate;

         

        if (p_boolDisplayAsForwardlink === true) {
            LLastName = LFromEtpName,
            LLastCls = LFromRecIconCls,
            LFirstCls = LToRecIconCls,
            LFirstEtpName = LToEtpName;
        } else {
          LLastName = LToEtpName,
            LLastCls = LToRecIconCls,
            LFirstCls =  LFromRecIconCls,
            LFirstEtpName = LFromEtpName;
        }
         //Created object for required data to generate HTML for rule
        var LData = {
          fromEtpIconCls: LFirstCls,
          fromEtpName: LFirstEtpName,
          topMargin: LTopMargin,
          rotationOfIcon: LRotationOfIcon,
          arrowIconCls: LArrowIconCls,
          linkTypeName : LLinkTypeName,
          toEtpIconCls: LLastCls,
          toEtpName: LLastName
        };

        //Here we applied required value to Xtemplate
        LArrRulesHtml.push(LTmpXtemplate.apply(LData));

      }

      var LGrpIconCls = gtsGenUtils().tsGetClsForGenImg16(6),
          LGrpIcon = "<span style='position:relative; top:2px; margin:0px 5px 0px 3px; width:16px; height:16px; display:inline-block;' class="+LGrpIconCls+"></span>",
          LFromRecIcon= "<span style='position:relative; top:2px; margin:0px 5px 0px 3px; width:16px; height:16px;display:inline-block;' class='"+LFromRecIconCls+"'></span>",
          LScollStyle ='';

      LArrCompleteHtml = [
        '<div style="padding:10px 10px 10px 10px;">',
          LFromRecIcon +LFromEtpName,
          '<div style="margin:10px 0px 0px 20px">'+ LGrpIcon + LGroupName + '</div>',
            '<div style="margin:0px 0px 0px 40px;'+LScollStyle+'">'+
                LArrRulesHtml.join(''),
            '</div>'+
        '</div>'
      ];
    }
    else{//Here means created template for Rules

      LRule = LGroup;
      LToEtpName = gtsCacheUtils().tsGetETPSingularNameFromId(LRule.EtpId());
      LToRecIconCls = gtsCommonUtils().tsGetImgIconClsForRecordType(LRule.EtpId());
      LLinkTypeName = gtsCacheUtils().tsGetLinkNameById('', LRule.SatId(), LlinkDirectionForName);

      LTmpXtemplate = LCssFileTemplate;
      if (p_boolDisplayAsForwardlink === true) {
        LLastName = LFromEtpName,
          LLastCls = LFromRecIconCls,
          LFirstCls = LToRecIconCls,
          LFirstEtpName = LToEtpName;
      } else {
        LLastName = LToEtpName,
          LLastCls = LToRecIconCls,
          LFirstCls = LFromRecIconCls,
          LFirstEtpName = LFromEtpName ;
      }
      //Created object for required data to generate HTML for rule
      LData = {
        fromEtpIconCls: LFirstCls,
        fromEtpName: LFirstEtpName,
        topMargin: LTopMargin,
        rotationOfIcon: LRotationOfIcon,
        arrowIconCls: LArrowIconCls,
        linkTypeName : LLinkTypeName,
        toEtpIconCls: LLastCls,
        toEtpName: LLastName
      };

     //Here we created copy of xtemplate to maintain original Template
      LArrRulesHtml.push(LTmpXtemplate.apply(LData));
      //Here we applied required value to Xtemplate
      LArrCompleteHtml = [
        '<div style="padding:0px 10px 10px 10px;">',
        LArrRulesHtml.join(''),
        '</div>'
      ];
    }

    LDisplayHtml = LArrCompleteHtml.join('');

    return LDisplayHtml;
  },
  tsGetCommentPublicSettings: function(){
    /* @method tsGetCommentPublicSettings
    * Return isPublic related comment settings
    * @param{null}
    * return {Object}  canShowPublicOption & makePublicComment
    */
    var LCommentSettingResult = {},
    LGlobalCommentPref = {},
    LCanShowPublicOption = false,
    LMakePublicComment = true;

    if( TS.App.Session().UserType() === gtsGenConsts().GUSER_TYPE.INTERNAL){
      LGlobalCommentPref = TS.App.Cache.GlobalSettings().CommentSettings().GetCommentType();
      LMakePublicComment = Ext.isEmpty(LGlobalCommentPref) === false && LGlobalCommentPref.toLowerCase() === gtsGenConsts().GGLOBAL_SETTINGS.PUBLIC_COMMENT;
      LCanShowPublicOption = true;
    }
    LCommentSettingResult.canShowPublicOption = LCanShowPublicOption;
    LCommentSettingResult.makePublicComment = LMakePublicComment;

    return LCommentSettingResult;
  },

  tsGetRulesetGroupIdsForRecordType: function(p_intTraceRulesetId, p_intRecordId, p_boolIsForward) {
    /**
    * @private
    * @method tsGetRulesetGroupIdsForRecordType
    * Return group id's for record type
    *
    * @param{integer) p_intTraceRulesetId : trace ruleset id
    * @param{integer) p_intRecordId : record type id
    * @param{Boolean) p_boolIsForward : link type direction
    * @return{String} template html
    **/

    Assert((Ext.isNumber(p_intTraceRulesetId) === false), 'Unable to get group id\'s for record type. Invalid ruleset found for id = '+p_intTraceRulesetId+'in tsGetHintTemplateForRulesetGroup() of class tsclsCommonUtils');
    //TODO: Rename p_intRecordId to p_intRecordTypeId
    Assert((Ext.isNumber(p_intRecordId) === false), 'Unable to get group id\'s for record type. Invalid record type for id = '+p_intRecordId+'in tsGetHintTemplateForRulesetGroup() of class tsclsCommonUtils');
    p_boolIsForward = Ext.isBoolean(p_boolIsForward) ? p_boolIsForward : true;

    var LTraceRulesetId = p_intTraceRulesetId,
        LRecordTypeId = p_intRecordId,
        LIsForwardDirection = p_boolIsForward,
        LRulesetGroupIds =[],
        LCacheObjTraceRule,
        LTraceSchemaRules,
        LTraceSchemaGroups;

    //retrive schema rules from TRace Ruleset cache object
    LCacheObjTraceRule = TS.App.Cache.TraceRulesets().ById(LTraceRulesetId);

    //Validate Cache
    Assert(Ext.isEmpty(LCacheObjTraceRule), "Unable to fetch group id's for record type. Invalid Traceability RuleSet cache object found for id=" + LTraceRulesetId + " in tsGetHintTemplateForRulesetGroup() of tsclsCommonUtils class.");
    LTraceSchemaRules = LCacheObjTraceRule.SchemaRules();

    //Validate Cache
    Assert(Ext.isEmpty(LTraceSchemaRules), "Unable to fetch group id's for record type. Invalid Traceability RuleSet cache object found for id=" + LTraceRulesetId + " in tsGetHintTemplateForRulesetGroup() of tsclsCommonUtils class.");

    if (LIsForwardDirection){//here means forward direction
      LTraceSchemaGroups = LTraceSchemaRules.DownstreamRules();
    }
    else {//here means reverse direction
      LTraceSchemaGroups = LTraceSchemaRules.UpstreamRules();
    }

    //Here we fetch all grups for the ruleset sent scema as per the direction
    for (var LIndex = 0; LIndex < LTraceSchemaGroups.Count(); LIndex++) {//Loop through all root record type
      var LEtpRule = LTraceSchemaGroups.ByIndex(LIndex),
          LGroups = LEtpRule.Groups(),
          LCount2 = LGroups.Count(),
          LFromEtpId = LEtpRule.EtpId();

      if(LFromEtpId === LRecordTypeId){//if record type id mathch the fetch all group's id
        //For all group of etp rule
        for (var LIndex2 = 0; LIndex2 < LCount2; LIndex2++) {//Loop through each root record type child(rulse and groups)
          var LTempGroup = LGroups.ByIndex(LIndex2);
          LRulesetGroupIds.push(LTempGroup.Id());
        }
      }
    }
    return LRulesetGroupIds;
  },
  tsPrintCurrentPage: function(p_strTitle){
    /**
     * @method tsPrintCurrentPage
     * 
     * this method invoke browser print action 
     * 
     * @param {p_strTitle}
     * @return {none}
     */
    var LMe = this;

    if(LMe.FAfterPrintEventhandled === false)
    {
      LMe.FAfterPrintEventhandled =true;
      window.onafterprint = function(e)
      {
        if(Ext.isString(LMe.FPageTitle) === true && Ext.isEmpty(LMe.FPageTitle) === false)
        {
          document.title =  LMe.FPageTitle;
  }
      };
    }

    LMe.FPageTitle = document.title;
    if(Ext.isString(p_strTitle) === true)
    {
      document.title =  p_strTitle;
    }
    window.print();
  },

  tsGenerateProjectCodeForProjectName: function (p_strProjectName) {
    /** 
      *
      * @method tsGenerateProjectCodeForProjectName
      * This method will generate project code from project name
      *
      * @private
      * @param  {String} p_strProjectName: project name
      * @return {String} project code
     **/

    //Implemented FDBK - RasikaI - Correct method name. It should be tsGenerateProjectCodeForProjectName.
    var LMe = this;

    if (Ext.isString(p_strProjectName) === false || Ext.isEmpty(p_strProjectName)) {
      return '';
    }
 

    var LProjectName = p_strProjectName.trim(),
      LGeneratedProjectCode = "",
      LNamesArr = LProjectName.split(' ');


    //Here means if project name have only 1 word them create project code with first and last letter of project code
    if (LNamesArr.length === 1) {
      
      if (LMe.tsIsProjectCodeValid(LNamesArr[0][0].toString().trim()) === true) {
        LGeneratedProjectCode = LNamesArr[0][0];
      }
     //Implemented - RasikaI - Set this if block as a default and the add conditions for (LLength > 1)
      var LLength = LNamesArr[0].length;
      if (LLength > 1) {
        if (LMe.tsIsProjectCodeValid(LNamesArr[0][LLength - 1].toString().trim()) === true) {
          LGeneratedProjectCode = LGeneratedProjectCode + LNamesArr[0][LLength - 1];
        }
      }

    }
    else {
      //Here means if project name have more than 1 word them create project code with first letter of each word
      Ext.Array.each(LNamesArr, function (value) {
        value = value.trim();
        if (!Ext.isEmpty(value)) {
          //validate project code char
          if (LMe.tsIsProjectCodeValid(value[0].toString().trim()) === true) {

            if (LGeneratedProjectCode.length < 10) {
              LGeneratedProjectCode = LGeneratedProjectCode + value[0];
            }
          }
        }
      });
    }

    LGeneratedProjectCode = LGeneratedProjectCode.toUpperCase();
    return LGeneratedProjectCode.trim();

  },

  tsIsProjectCodeValid: function (p_strProjectCode) {
    /** 
      *
      * @method tsIsProjectCodeValid
      * This method check in projet code any char contain other than alphanumeric value and space between project code
      *
      * @private
      * @param  {String}p_strProjectCode: Project code
      * @return {Boolean} Is project code validation
     **/

    p_strProjectCode = p_strProjectCode.trim();

    if (Ext.isString(p_strProjectCode) === false) {
      return false;
    }

    //Implemented FBK-342872 USO Review of Traceability Life Cycle Project code - (hyphen) should be allowed
    var LLetterNumber = /^[0-9a-zA-Z_-]+$/;

    if (Ext.isEmpty(p_strProjectCode) === false) {
      p_strProjectCode = p_strProjectCode.trim();
    }

    return (Ext.isEmpty(p_strProjectCode) === true || LLetterNumber.test(p_strProjectCode));
  },

  tsValidateUniqueProjectCode: function (p_strProjectCode) {
    /** 
      *
      * @method tsValidateUniqueProjectCode
      * This method will check for unique project code
      *
      * @private
      * @param  {String}p_strProjectCode: Project code
      * @return {Boolean} Is project code unique or not
     **/

    var LProjectCode = p_strProjectCode,
      LIsProjectCodeExist = false;

    if (Ext.isString(LProjectCode) === false) {
      return LIsProjectCodeExist;
    }

    //TODO - RasikaI - Add some load mask here
    var LProjectCodeforserver = "projectCode=" + LProjectCode.toString().trim(),
      //Url to chek project code is unique or npot
      Url = gtsGenUtils().tsGetURLInProjectContext("validateProjectCode", null, null, LProjectCodeforserver);

    if (Ext.isEmpty(LProjectCode) === false) {
      Ext.Ajax.request({
        url: Url,
        async: false,
        success: function (response, opts) {
          var LObbj = gtsGenUtils().tsJsonDecode(response.responseText);
          if (LObbj['isValidProjectCode'] === false) {
            LIsProjectCodeExist = true;
          }

        },
        failure: function (response, opts) {
        }

      });
    }

    return LIsProjectCodeExist;
  },
  
  tsGetRecordLinks: function(p_intEtpId, p_intRecordId, p_arrLinkTypeIds, p_intBaselineId, p_boolIsSyncReq, p_fnSuccessCallback, p_fnFailureCallback){
    /*
    * @method tsGetRecordLinks
    * This method will fetch the record links from the server and return the collection of links on the basis of parameters set in this method.
    *
    * @private
    * @param {Integer} : Record type id to get the record area
    * @param {Interger} : Record id against whom the links is to be fetched.
    * @param {Array} : Link types collection. Filter the links response according to link type ids array.
    * @param {Integer} : Baseline id. Right now, This is not in use. The rest api command do not support baseline mode. Added this param for future purpose.(23 Feb 2022) 
    * @param {Boolean} : Flag indicates : Ajax request call 
    * @param {function} : Callback function for request success
    * @param {function} : Callback function for request failure
    */
   
    //Fixed - PR-351313 - Components & Assemblies - Inconsistent behavior with the action 'Reuse Project Components' from Detail editor & from Diagram Editor - Refer to the attached video
    var LURL = "",
        LArea = "";

    Assert( Ext.isEmpty( p_intEtpId ), "Unable to fetch record links from the server. Invalid record type id found in tsGetRecordLinks method of tsclsCommonUtils class." );
    Assert( Ext.isEmpty( p_intRecordId ), "Unable to fetch record links from the server. Invalid record id found in tsGetRecordLinks method of tsclsCommonUtils class." );
    p_boolIsSyncReq = ( Ext.isBoolean(p_boolIsSyncReq) ) ? p_boolIsSyncReq : false;
    p_arrLinkTypeIds = ( (Ext.isArray(p_arrLinkTypeIds) === true) && (Ext.isEmpty(p_arrLinkTypeIds) === false) ) ? p_arrLinkTypeIds : [];

    LArea = gtsCacheUtils().tsGetRecordAreaForETPId( p_intEtpId );
    
    //complete rest url - http://host:port/rest/ttmrestsrv.dll/<version_no>/metadata/<recordtype_id_disp_prefix>/statesworkflow
    LURL = gtsGenUtils().tsGetURLInProjectContext( LArea+"/ByID/"+p_intRecordId+"/Links" );

    TS.App.Status.ShowBusyDialog("Loading links, please wait...");
    try {
        //Making server request for finish review request
        Ext.Ajax.request({
            
            url: LURL,//url for finish review request            
            method: "GET",//method to be used for sending the data            
            async: !(p_boolIsSyncReq),//async parameter to set request type                        
            timeout: gtsGenConsts().GGenConst.CONST_INI_TIMEOUT,//request timeout
            defaultHeaders: {
                'Accept': 'application/json'
            },
            //handler for the success function
            success: function( p_response ){      

              TS.App.Status.EndBusyDialog();     
              var LJSON = null,
                  LLinksArr = [];
              
              LJSON = gtsGenUtils().tsJsonDecode( p_response.responseText );  
              LLinksArr = LJSON["links"];
              if( (Ext.isArray(LLinksArr) === false) && (Ext.isEmpty(LLinksArr) === true) ){
                return;
              }

          if ((Ext.isArray(p_arrLinkTypeIds) === true) && (Ext.isEmpty(p_arrLinkTypeIds) === false)) {
                LLinksArr = Ext.Array.filter(LLinksArr, function(p_objRecord, p_intIndex){

                  var LETPIdFromRecord = p_objRecord.linkTypeId,
                      LIsEtpIdAvailable = Ext.Array.contains(p_arrLinkTypeIds, LETPIdFromRecord);                  
        
                  if(LIsEtpIdAvailable === false){
                    return false;
                  }
                });
              }
             
              //executing callback
              if (Ext.isFunction(p_fnSuccessCallback)) {
                (p_fnSuccessCallback)(LLinksArr);
              }

            },//sucess..
            //handler for the failure function
            failure: function( response){

              TS.App.Status.EndBusyDialog();
              //executing callback
              if( Ext.isFunction( p_fnFailureCallback ) ){
                (p_fnFailureCallback)(response);
              }

            }//failure..
      });//Ext.Ajax..

    } 
    finally {
      TS.App.Status.EndBusyDialog();
    }

  },
  tsGetXMLObjectFromXMLString: function(p_strXML) {
    /**
     * @method tsGetXMLObjectFromXMLString
     * This method will return the XML parse object from XML String
     * 
     * @param {string}: XML String
     */

    if(Ext.isEmpty(p_strXML) === true) {

      return;
    }//if..

    var LParser,
      LParseFromString;

    try {

      /** DONE -Trinesh -Feedback - I am seeing this code to get dom object from text at many places. We can convert this to utility function. */
      LParser = new DOMParser();

      LParseFromString = LParser.parseFromString(p_strXML, "text/xml");
    }
    catch (error) {
      /** DONE -Trinesh -Bug - justify the reason why is exception being suppressed */
      //show error message
      TS.App.Feedback.ShowErrMsg(error.message);
    }
    finally {
      if (Ext.isEmpty(LParser) === false) {
        Ext.destroy(LParser);
        LParser = null;
      }
    }

    return LParseFromString;
  },
 
  /**
   * 
   * @method tsIsFieldApplicableToChart
   * @param {String} p_strFieldType Field Type
   * @param {String} p_strSubFieldType Field Sub Type
   * @param {String} p_strDBColumnName DBColumnName
   * @returns 
   */
  tsIsFieldApplicableToChart: function (p_strFieldType, p_strSubFieldType, p_strDBColumnName) {
    var LResult = false;
    var LArrOfLOVType = [];

    //Following fieldTypes and fieldSubTypes are supported for Charts
    LArrOfLOVType.push("tsFieldSubType_TestType");
    LArrOfLOVType.push("tsFieldType_List");
    LArrOfLOVType.push("tsFieldType_MultiValue");
    LArrOfLOVType.push("tsFieldType_Project");
    LArrOfLOVType.push("tsFieldType_ProjectTeamMember");
    LArrOfLOVType.push("tsFieldType_User");
    LArrOfLOVType.push("tsFieldType_StateTransition");
    LArrOfLOVType.push("tsFieldType_RecordType");
    LArrOfLOVType.push("tsFieldType_DateTime");

    try {
      LResult = Ext.Array.contains(LArrOfLOVType, p_strFieldType);
      
      //Check for DB column Name
      //Hardcoding this fields as they are not available in fields cache
      if (LResult === false && (p_strDBColumnName === gtsJSONConsts().GGENERIC_RECORD_FIELDS.ELM_CRT_BY_USR_NAME ||
        p_strDBColumnName === gtsJSONConsts().GGENERIC_RECORD_FIELDS.ELM_LST_UPD_BY_USR_NAME ||
        p_strDBColumnName === gtsJSONConsts().GGENERIC_RECORD_FIELDS.ELM_CHK_OUT_BY_USR_ID)) {
        LResult = true;
      }
    }
    catch (p_Err) {
      TS.App.Feedback.ShowInterErrMsg(p_Err.message);
    }

    return LResult; 
  },
  //TODO: Rename to tsGetProjectPathTemplate, because there's tsGetProjectPath() method already available in GenUtil
  //TODO: Params p_intProjectId, p_intTrimProjectPathToChars, p_strOutputForm, p_strHidablePathCls 
  //p_strOutputForm -> Accepted values "html","plaintext", "dataobject" [Default html]
  //p_strHidablePathCls -> (Applicable only when p_strOutputForm is 'html'[default form])
  tsGetProjectPathTemplate: function (p_intProjectId,p_intTrimProjectPathToChars,p_strOutputForm,p_strHidablePathCls, p_strProjectNameCls, p_strProjectPathDivCls) {
    /**
     * @method tsGetProjectPath
     *  Intent : this 
     * 
     * @param {projet Id}
     * @param {integer} p_intTrimProjectPathToChars length of project path to tirm [Default value 120]
     * @param {String}  p_strOutputForm values "html","plaintext", "dataobject" [Default html]
     * @param {String}  p_strOutputForm  (Applicable only when p_strOutputForm is 'html'[default form])
     * 
     * @return {object}  we will return HTML / plaintext /object based on p_strOutputForm param.
     */

    if (Ext.isEmpty(p_intProjectId)) {
      return; 
    } 
    //consider default length to 120 
    p_intTrimProjectPathToChars = Ext.isNumber(p_intTrimProjectPathToChars)===false ? 120 : p_intTrimProjectPathToChars;
   
    var LAllProjects = TS.App.Cache.Projects(), 
        LProjectCacheobj = LAllProjects.ById(p_intProjectId),
        LProjectHintAttr; 

        if (Ext.isEmpty(LProjectCacheobj)) {
          return;
  }
    var LBranchName = LProjectCacheobj.Name(),
      LPrjCode = gtsCacheUtils().tsGetProjectCodeByProjectId(p_intProjectId,false), 
      LPath = LProjectCacheobj.Path(),
      LPrjHint = '',
      LPrjName,
      LHasMorePrjNames = true,
      LResult;
 
    if (LProjectCacheobj.ParentId() === 0) {
      LPath = '';
    }
    LBranchName = gtsGenUtils().tsDecode(LBranchName);
    LPrjCode = gtsGenUtils().tsDecode(LPrjCode);
    LPrjName = gtsGenUtils().tsTrimToMaxChar(LBranchName, 40)+ ' ' + '[' +LPrjCode+ ']'; 
    LPath = gtsGenUtils().tsDecode(LPath);
    LPrjHint = LBranchName + ' ' + '[' + LPrjCode + ']' +'\n\n' + LPath;
     
    //Add title attribute when trimming Individual group names
    
    if (Ext.isEmpty(LPath) === false) {
      //If path lentgh is more than p_intTrimProjectPathToChars 
      //It may not be fit in the given width
      //ading + 5 for ...>  
      if ((LPrjName.length+LPath.length)+5 > p_intTrimProjectPathToChars) {
       
        var LSplitedArr = LPath.split('\\');
        var LNewPath = "";
        //While reverse looping, do not allow to exceed max char length. Add ... at first of () <= project path enclosure
        Ext.Array.each(LSplitedArr,function(p_ProjectName) {
          var LProjectNameLength = p_ProjectName.length; 
          var LTempNewPath;
          
          if(LProjectNameLength > 16){
             
            var LName = gtsGenUtils().tsTrimToMaxChar(p_ProjectName, 16);
 
            if(Ext.isEmpty(LNewPath)){
                LTempNewPath = LName;
            }else{
                LTempNewPath = LName +">" + LNewPath;
            } 
          }else{
            LTempNewPath = p_ProjectName +">" + LNewPath;
          }
          if((LTempNewPath.length + LPrjName.length + 4) < p_intTrimProjectPathToChars){
            LNewPath = LTempNewPath;
          }else{
            //break loop 
            LHasMorePrjNames = true;
            return false; 
          }
        },"",true);
        //if there are more projet name then shot ...> 
        if(LHasMorePrjNames === true){
          LPath = "...>"+LNewPath; 
        }else{
          LPath =  LNewPath; 
        }
        
      }
      else {
        //when record title is less then display length then show full path 
        LPath = gtsGenUtils().tsTrimToMaxChar(LPath, p_intTrimProjectPathToChars);
       // LPath = '<b>' +LPrjName + "</b> ";//("+LPath+")";
        LPath = LPath.replaceAll('\\', ' > ');
      }
    }
    LPrjHint = LPrjHint.replaceAll('\\', ' > ');

    
    if(p_strOutputForm === "HTML"){
      LProjectHintAttr = gtsGenConsts().TS_SHOW_PROJECT_HINT_ATTRIBUTE;
      //Added param to override the projet path div style
      LResult =  `<div class ="${p_strProjectPathDivCls}" style="margin:0px 5px 8px 0px;">
                    <span  class ="${p_strProjectNameCls}" style= "cursor: default; border-radius:4px; padding:2px 4px 2px 4px; font-size: 0.8em; text-decoration: none;color: #686868 !important;" ${LProjectHintAttr} =" ${p_intProjectId}" >
                      <b> ${LPrjName}</b>
                      <span class ="${p_strHidablePathCls}">
                        ${LPath}
                      </span>
                    </span>
                  </div>`;
    }else if(p_strOutputForm === "Object"){
      LResult =  {
        "ProjectName": LPrjName,
        "ProjectPath": LPath,
        "ProjectHint": LPrjHint
      };
    }else if(p_strOutputForm === "plaintext"){
      LResult = LPrjName + "  (" +LPath+")";
    }
    return LResult;
  },

  tsUpdateSRE: function (p_strRequestType, p_boolIsSyncReq, p_intSRUId, p_intProjectId, p_strSRUForTypeCode, p_arrRecordObj, p_boolCanShowloadingMask, p_fnSuccessCallback, p_fnFailureCallback) {
    /** 
      *
      * @method tsclsUpdateSRE
      * This method will Create, Update and Delete SRU record
      *
      * @private
      * @param  {String}p_strRequestType: Command Type PUT / DELETE
      * @param  {Boolean}p_boolIsSyncReq : Flag indicates : Ajax request call 
      * @param  {Integer}p_intSRUId: SRU Table record id
      * @param  {Integer}p_intProjectId: Project ID
      * @param  {String}p_strSRUForTypeCode: SRU for type code
      * @param  {Array}p_arrRecordObj: array of object - Object shoud have following filed's for POST
      *                          {
      *                           gtsJSONConsts().G_ETP_ACTION_ATTRIBUTES.UPDATE_SRE.SRE_ID,  
      *                           gtsJSONConsts().G_ETP_ACTION_ATTRIBUTES.UPDATE_SRE.SRU_ID,
      *                           DB field's name which we have to update and value's, eg gtsMetadataConsts().DBFieldNames().SRE_VALUE1_STRING: 123 //For DELETE this field are not needed
      *                           gtsJSONConsts().G_ETP_ACTION_ATTRIBUTES.UPDATE_SRE.UPD_SEQ_NO
      *                          }
      * @param  {Boolean}p_boolCanShowloadingMask : Loading mask visiblity
      * @param {function}p_fnSuccessCallback : Callback function for request success
      * @param {function}p_fnFailureCallback : Callback function for request failure
     **/

    //Implemented- RasikaI FDBK-  - Add proper method intent and also correct the sequence and description of params.     
    Assert(Ext.isEmpty(p_strRequestType), 'Unable to update SRE. Request Type found ' + p_strRequestType + ' tsUpdateSRE method of tsclsCommonUtils class.');
    Assert(Ext.isNumber(p_intSRUId) === false || p_intSRUId < 0, 'Unable to update SRE. SRU_ID found ' + p_intSRUId + ' in tsUpdateSRE method of tsclsCommonUtils class.');
    Assert(Ext.isEmpty(p_arrRecordObj) || Ext.isArray(p_arrRecordObj) === false, 'Unable to update SRE. SRE record found ' + p_arrRecordObj + ' in tsUpdateSRE method of tsclsCommonUtils class.');

    //SRU for Type code
    p_strSRUForTypeCode = Ext.isEmpty(p_strSRUForTypeCode) ? gtsMetadataConsts().Preferences().SRE_PROJECT_PREFERENCES : p_strSRUForTypeCode;//Implemented - RasiakI - Use metadata constant for project preference
    //Validate sync param
    p_boolIsSyncReq = (Ext.isBoolean(p_boolIsSyncReq)) ? p_boolIsSyncReq : false;
    p_boolCanShowloadingMask = (Ext.isBoolean(p_boolCanShowloadingMask)) ? p_boolCanShowloadingMask : true;


    var LMe = this,
      LUpdateSREConst = gtsJSONConsts().G_ETP_ACTION_ATTRIBUTES.UPDATE_SRE;
    //Etp action to update SRE record
    //Implemented - ArpanG - Object of FEtpActionsUpdateSRE should be destroyed before creating it.
    //It may happen that this method is called multiple times in one browser instance.
    if (Ext.isEmpty(LMe.FEtpActionsUpdateSRE) === false) {
      Ext.destroy(LMe.FEtpActionsUpdateSRE);
      LMe.FEtpActionsUpdateSRE = null;
    }

    LMe.FEtpActionsUpdateSRE = Ext.create('TS.view.classes.actions.tsclsUpdateSRE', {});


    LMe.mun(LMe.FEtpActionsUpdateSRE, "onSuccess");//Implemented- RasikaI FDBK-  - Do not add empty function here
    LMe.mon(LMe.FEtpActionsUpdateSRE, "onSuccess", function (p_objUIAction) {

      if (Ext.isFunction(p_fnSuccessCallback)) {
        p_fnSuccessCallback(p_objUIAction);
      }

    }, LMe);

    LMe.mun(LMe.FEtpActionsUpdateSRE, "onFailure");//Implemented- RasikaI FDBK-  - Do not add empty function here
    LMe.mon(LMe.FEtpActionsUpdateSRE, "onfailure", function (p_objUIAction) {

      if (Ext.isFunction(p_fnFailureCallback)) {
        p_fnFailureCallback(p_objUIAction);//Implemented- RasikaI FDBK-  - Use correct callback function
      }
    }, LMe);

    //Set Input Params
    var LParam = LMe.FEtpActionsUpdateSRE.InputParams().Add("paramsForUpdateSRE");
    //Set Project Id
    LParam.set(LUpdateSREConst.SRU_FOR_ID1, p_intProjectId);
    //Set this field if delete command
    if ('DELETE' === p_strRequestType) {
      LParam.set(LUpdateSREConst.PROJECT_ID, p_intProjectId);
    }
    //Set SRU Id
    LParam.set(LUpdateSREConst.SRU_ID, p_intSRUId);
    //For Type code
    LParam.set(LUpdateSREConst.FOR_TYPE_CODE, p_strSRUForTypeCode);
    //Set All Record's
    LParam.set(LUpdateSREConst.RECORDS, p_arrRecordObj);
    //Set Http Method
    LMe.FEtpActionsUpdateSRE.SetHTTPMethod(p_strRequestType);
    //Set Ajax type
    LMe.FEtpActionsUpdateSRE.SetIsSync(p_boolIsSyncReq);
    //Set Loading mask visiblity
    LMe.FEtpActionsUpdateSRE.SetCanShowAppLevelLoadingMask(p_boolCanShowloadingMask);
    //Execute ETp Action
    LMe.FEtpActionsUpdateSRE.Execute();
  },
    /**
    * @method tsRearrangePopupDialogToolsSequence
    * This method will rearrange the sequence of window tools.
    *
    * @private
    * @param {Object} : window object
    */
  tsRearrangePopupDialogToolsSequence: function(p_objWindow) {

    //Implemented Todo - ArpanG - The name of the method should be tsRearrangePopupDialogToolsSequence()

    //No need to assert here as if window component is not available means, no need to arrange tools 
    //Implemented - FBK-342859 - Quick Explorer - Roll up and roll down action should be at the same position. Right now user has to move the mouse position.
    if( (Ext.isEmpty(p_objWindow) === true) || (Ext.Object.isEmpty(p_objWindow) === true) ){
      return;
    }

    let LToolsArr = p_objWindow.tools;
    if(Ext.isEmpty(LToolsArr) === true){
      return;
    }
    let LGetToolsType = function(p_ArrTools){
      let LToolsType = [];

      Ext.Array.each(p_ArrTools,function(p_ObjTool){
        //it is not possible to chagne icon of a tool type nor we can define new type and change its icon
        //So added ctType in tool object to rearrange it sequence
        //TODO: Use xType instead of ctType
        //Can not use xType as xtype of all native tool is "tool"
        let LType = p_ObjTool.type || p_ObjTool.ctType;
        LToolsType.push(LType);
  
      });
      return LToolsType;
    };

    let LToolsType = LGetToolsType(LToolsArr);

    if(Ext.isEmpty(LToolsType) === true){
      return;
    }

    let LNewArrOfTool = [];
    var LMaximizeToolSeq = Ext.Array.indexOf(LToolsType, "maximize");
    if(LMaximizeToolSeq >= 0){
      LNewArrOfTool.push(LToolsArr[LMaximizeToolSeq]);
    }
    var LCollapsibleToolSeq = Ext.Array.indexOf(LToolsType, "collapse-top");
    if(LCollapsibleToolSeq >= 0){
      LNewArrOfTool.push(LToolsArr[LCollapsibleToolSeq]);
    }
    
    let LOpenInNewWindowSeq = Ext.Array.indexOf(LToolsType, "openNewWindow");
    if(LOpenInNewWindowSeq >= 0){
      LNewArrOfTool.push(LToolsArr[LOpenInNewWindowSeq]);
    }

    var LCloseToolSeq = Ext.Array.indexOf(LToolsType, "close");
    if(LCloseToolSeq >= 0){
      LToolsArr[LCloseToolSeq].setTooltip("Close");
      LNewArrOfTool.push(LToolsArr[LCloseToolSeq]);
    }

    //TODO: P2 - SourabhR - There's memory leak of ExtJS object in window.tools. There's no method removeTool()
    //We can try to make the tools array unique at least 
    //Added all tools in the window
    p_objWindow.addTool(LNewArrOfTool);
  }, 
  tsDownloadFile: function(p_intRecordId, p_intEtpId, p_intBaselineId) {
    /*
    * @method tsDownloadFile
    * This method will execute to download file
    *
    * @private
    * @param {Number}: Record id
    * @param {Number}: Etp id
    * @param {Number}: Baseline id (optional)
    * @return{null}
    */
    
    Assert((Ext.isNumber(p_intRecordId) === false) || (p_intRecordId <= 0), "Unable to download file. Invalid record id=" + p_intRecordId + " found in tsDownloadFile() of tsclsCommonUtils class.");
    Assert((Ext.isNumber(p_intEtpId) === false) || (p_intEtpId < 0), "Unable to download file. Invalid record type id=" + p_intEtpId + " found in tsDownloadFile() of tsclsCommonUtils class.");

    let LParams = "",
        LDownloadUrl = "";

    //Sample url: '/1/repositoryobjects/ByID/4986129637/File?baselineId=4986131737'
    if (!Ext.isEmpty(p_intBaselineId)) {
      //Construct the params to be sent with download action
      LParams = gtsJSONConsts().GGENERIC_RECORD_FIELDS.BASELINE_ID + '=' + p_intBaselineId;
    }
    
    //Generating the url for downloading the document
    LDownloadUrl = gtsGenUtils().tsGetURLInProjectContext( gtsCacheUtils().tsGetRecordAreaForETPId( p_intEtpId ) + '/ByID/' + p_intRecordId + '/' + 'File', '', '', LParams );

    //open the url in new window for invoking the save as dialog of the browser
    gtsGenUtils().tsOpenURLInNewWindow(LDownloadUrl);
  },
  tsGetSourcePackageOfReusedRefPackage: function (p_intEtpId, p_intRecordId) {
    /**
    * @method tsGetSourcePackageOfReusedRefPackage
    * The method will return the source package object if provided etpId is a container and the container record for recordId is identified as Reused as Reference.
    * Note: If source container is deleted, then also the method will return empty object
    * 
    * @param {Number} Record Type Id
    * @param {Number} Record Id
    * 
    *@return {Object} Source Record (If provided params are of a reused as reference container and the source is not deleted)
    */

    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0, "Unable to execute tsGetSourcePackageOfReusedRefPackage() method of common utils for Record Type Id = " + p_intEtpId);
    Assert(Ext.isNumber(p_intRecordId) === false || p_intRecordId <= 0, "Unable to execute tsGetSourcePackageOfReusedRefPackage() method of common utils for Record Id = " + p_intRecordId);

    //Check If the provided etpId is a container and the container record for recordId is identified as Reused as Reference
    if ((gtsCacheUtils().tsIsETPCollection(p_intEtpId) === true) &&
      gtsCacheUtils().tsIsContainerReusedAsReference(p_intRecordId)) {
      var LContainerObj = TS.App.Cache.Containers().ById(p_intRecordId);
      if (Ext.isEmpty(LContainerObj) === false) {
        //Get the source record details using ById command and return
        return gtsGenUtils().tsGetRecInfoForRecId(LContainerObj.SourceRecordId(),
          gtsGenConsts().GDETAIL_EDITOR_RECORD_AREA.REPOSITORY_OBJECTS, null, true);//Do not handle app level exception if source is deleted
      }
    }

    return null;
  },

  tsLoadPackage: function(p_strPackageName, p_callback, p_strLoadingMsg) {
    /*
    * @method: tsLoadPackage
    * This method will Loads the given package, if not loaded
    *
    * @public
    * 
    * @param {String} Package Name
    * @param {Function} Callback function after the package is loaded
    * @param {String} Loading message to be shown
    *
    * @return{null}
    */

    // Only loads the package if package name is valid and p_callback is a function
    Assert(Ext.isEmpty(p_strPackageName), 'Cannot load pacakge, the package name is invalid.');
    Assert(!Ext.isFunction(p_callback), 'Cannot load pacakge, the callback function is provided.');

    // Start loading
    TS.App.Status.ShowBusyDialog(p_strLoadingMsg);

    Ext.Package.load(p_strPackageName).then(function () {
      //Here means package loaded successfully

      // Stop loading
      TS.App.Status.EndBusyDialog();
      // Calling callback function
      p_callback();

    }, function() {
      //Here means package is not loaded
      TS.App.Status.EndBusyDialog();
    });
  },

  tsIsValidFileName: function (p_strfileName) {
    /**
     * @method tsIsValidFileName
     * This method will check the file name is valid or not
     * 
     * @param {String} File Name
     * @return true if valid
     *         error string if invalid
     */

    const LForbiddenChars = /^[^\\/:*?"<>|]+$/, // forbidden characters \ / : * ? " < > |
      LStartWithDot = /^\./;// cannot start with dot (.)
      //LForbiddenFileNames = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i; // forbidden file names

      if (LForbiddenChars.test(p_strfileName) === false){
        return 'Name can\'t contain any of the following characters:<br/> \\ / : * ? " < > |';
      }
      
      if (LStartWithDot.test(p_strfileName)){
        return 'Name can\'t start with a dot "." character';
      }
      
      //!LForbiddenFileNames.test(p_strfileName);
      return true;
  }, 
  /**
   * @todo Implemented - SourabhR - Params (p_objRecord, p_boolIsFollowed, p_intBaselineId, p_boolIsInReviewMode = false, p_objOptions
   * p_objOptions = {
   *  canClick: true/false
   *  isSuperScriptIcon: true/false
   *  additionalClsNames: ""/[]
   *  addtionalStyle: ""
   * }
   * Set appropriate default values to the p_objOptions and it's properties
   */
tsGetFollowUnfollowHtml: function (p_objRecord, p_boolIsFollowed, p_intBaselineId, p_boolIsInReviewMode = false, p_objOptions) {
    /**
    * @method tsGetFollowUnfollowHtml
    * This method will return HTML to show follow and unfollow icons
    *
    * @param {Object}: Record data
    * @param {Boolean}: Is Followed? (Default: fetch from service exists method syn way whenever empty value pass)
    * @param {Number}: Baseline Id (Default: 1)
    * @param {Boolean}: Is in review Mode? (Default: false)
    * @param {Object}: p_objOptions -
    *   {
          canClick: true/false, // (Default: false)
          isSuperScriptIcon: true/false, // (Default: false)
          additionalClsNames: ""/[], // (Default: "") 
          addtionalStyle: "" //(Default: "")
        }
    * @return {string}: HTML
    */

    const LMe = this;
    p_objOptions = Ext.Object.isEmpty(p_objOptions)? {} : p_objOptions;
    let LCanClick = p_objOptions.canClick,
        LIsIconSuperscript = p_objOptions.isSuperScriptIcon,
        LAdditionalClassNames = p_objOptions.additionalClsNames,
        LAdditionalStyle = p_objOptions.addtionalStyle;
        
    //Do not show follow/unfollow indication icon 
    if(LMe.tsCanIndicateFollowedRecords() === false){
      return '';
    }
    Assert(Ext.Object.isEmpty(p_objRecord), "Unable to get HTML for follow Unfollow icon. Invalid record object found in tsGetFollowUnfollowHtml() method of tsclsCommonUtils class.");

    let LXtemplate,
        LData = {},
        LRecordId = gtsJSONConsts().tsGetPropertyFromRecordObject(p_objRecord, gtsJSONConsts().GGENERIC_RECORD_FIELDS.ID),
        LProjectId = gtsJSONConsts().tsGetPropertyFromRecordObject(p_objRecord, gtsJSONConsts().GGENERIC_RECORD_FIELDS.PROJECT_ID);

    //No need to assert if record id not found - as per discussion with Sourabh sir on... PR-359652
    if((Ext.isNumber(LRecordId) === false) || (LRecordId <= 0)){
      return '';
    }
    //No need to assert if project id empty as it may be null for link types record in explorer tree and may be for root node, etc.
    //simply return from here
    if( (Ext.isNumber(LProjectId) === false) || (LProjectId <= 0) ){
      return '';
    }

    p_boolIsInReviewMode = (p_boolIsInReviewMode === true)? true : false;
    p_intBaselineId = ( !Ext.isEmpty(p_intBaselineId) ) ? p_intBaselineId : gtsGenConsts().GMetaConst.CURRENT_BASELINE_ID;
    if(p_boolIsInReviewMode === true || parseInt(p_intBaselineId) !== gtsGenConsts().GMetaConst.CURRENT_BASELINE_ID ){
      //Here means, do not show follow unfollow icon in review or baseline mode
      return '';
    }
    
    p_boolIsFollowed = Ext.isBoolean(p_boolIsFollowed)? p_boolIsFollowed : TS.App.Services().Follow().Exists(LRecordId, LProjectId, false); //If this check passed then consider it, else check from Exists follow service as sync way
    LCanClick = (LCanClick === true) ? true : false;
    //No need to show unfollow icon, if it is not clickable
    if(p_boolIsFollowed === false && LCanClick === false){
      return '';
    }
    
    LIsIconSuperscript = (LIsIconSuperscript === true) ? true : false;
    LAdditionalStyle = Ext.isEmpty(LAdditionalStyle)? "" : LAdditionalStyle;
    LAdditionalClassNames = Ext.isArray(LAdditionalClassNames)? LAdditionalClassNames.join(' ') : LAdditionalClassNames;
    LAdditionalClassNames = Ext.isEmpty(LAdditionalClassNames)? "" : LAdditionalClassNames;

    //Push recordid and project id in a object
    LData = {};
    LData[gtsJSONConsts().GGENERIC_RECORD_FIELDS.ID] = LRecordId;
    LData[gtsJSONConsts().GGENERIC_RECORD_FIELDS.PROJECT_ID] = LProjectId;
    LData[gtsJSONConsts().G_GEN_LIST.IS_FOLLOWED] = p_boolIsFollowed;
    
    //Create template
    LXtemplate = Ext.create('Ext.XTemplate',
      '<span ',
        '<tpl if="CanClick">',
          'onclick="gtsDOMUtils().tsExecuteFollowUnfollow(\'{EncryptedDataObj}\')" ',
        '</tpl>',
        'title="{Title}" ',
        'style="{Style} ',
          '<tpl if="IsFollowed">',
            // Used image url to fix PR-359659 - Follow/Unfollow - The Follow/Unfollow icons vanishes if user increase or decrease the resolution of the browser. 
            'background-image: url( '+ gtsGenUtils().tsGetImageUrl( gtsGenConsts().GImgConst.FOLLOW_8X8 ) +' ); ',
          '<tpl else>',
            'background-image: url( '+ gtsGenUtils().tsGetImageUrl( gtsGenConsts().GImgConst.UNFOLLOW_8X8 ) +' ); ',
          '</tpl>',
          'width: 8px; height: 8px;',
          '<tpl if="CanClick">',
            'cursor: pointer; ',
          '</tpl>',
          '" ',
        'class="{Class}">',
      '</span>'
    );
    
    //apply data and return HTML string
    return LXtemplate.apply({ 
      IsFollowed: p_boolIsFollowed, 
      Title: gtsFeedbackMsgsUtils().tsGetFollowUnfollowMessage(p_boolIsFollowed, LCanClick),
      Style: LAdditionalStyle,
      Class: LAdditionalClassNames + ' ' + ( LIsIconSuperscript ?  'tsSuperScriptIcon' : 'tsMiddleIcon'),  //Add class name as per icon align state
      EncryptedDataObj: gtsGenUtils().tsEncryptBase64( gtsGenUtils().tsJsonEncode(LData) ), //Set encrypted json of object data
      CanClick: LCanClick
    });
  },

  /**
    * This method will return HTML to show record Location Widget.<br>
    * Responsibilities include:<br>
    *  <ul>
    *   <li> Show Icon</li>
    *   <li>Show hint</li>
    *   <li>Add click function to show the widget on icon</li>
    *  </ul>
    * @method tsGetRecordLocationWidgetHtml
    * @public
    * @param {Number}: Record Id
    * @param {Number} p_intBaselineId - BaselineId 
    * @param {Boolean} [p_boolShowIconAlways=true] - Need to show icon always/ on mouse enter?
    * 
    * @return {String} HTML Template to show a record location widget icon along with Caption and Hint. 
    */
  tsGetRecordLocationWidgetHtml: function (p_intRecordId, p_intBaselineId, p_strVisibilityStyle) {

    //Validate params
    Assert((Ext.isNumber(p_intRecordId) === false || p_intRecordId <= 0), `Unable to get HTML for record location widget. Record Id <b>${p_intRecordId}</b> is found in ${arguments.callee.name}() method of ${this.$className} class.`);
    p_intBaselineId = parseInt(p_intBaselineId);
    p_intBaselineId = (Ext.isNumber(p_intBaselineId) === false || p_intBaselineId <= 0) ? gtsGenConsts().GMetaConst.CURRENT_BASELINE_ID : p_intBaselineId;

    //Variable declarations
    let LXtemplate,
      LIconCls;

    //Show Blue 16px location GPS icon
    LIconCls = gtsGenUtils().tsGetClsForGenImg16(gtsGenConsts().GGEN_IMAGE_INDEX.LOCATE_RECORD_IN_REPOSITORY);

    //Add standard "tsGridShowOnHoverIcon" which is integrated with grid's selectCls and overCls properties in most of TopTeam Grid based editors.
    if (p_strVisibilityStyle === gtsGenConsts().GVisibilityConst.TRANSPARENT) {
      LIconCls += ' tsGridShowOnHoverIcon';
    }
    else if(p_strVisibilityStyle === gtsGenConsts().GVisibilityConst.TRANSLUCENT){
      LIconCls += ' tsGridShowTranslucentIcon';
    }

    //Template contains the click handler, hint as "title" attributea, class to render the icon and add hover effect
    LXtemplate = Ext.create('Ext.XTemplate',
      '<span ',
      'onclick="gtsDOMUtils().tsShowRecordLocationAt(event,{recordId},{baselineId})" ',
      'title="{title}" ',
      'class="tsClickableSpanIcon16px {class}">',
      '</span>'
    );

    //Generate HTML from XTemplate based on the parameters provided to this method
    return LXtemplate.apply({
      recordId: p_intRecordId,
      baselineId: p_intBaselineId,
      title: 'Show record location in the repository.',
      class: LIconCls
    });
  },

  tsGetFollowModelField: function () {
    /*
    * @method tsGetFollowModelField
    * This method will return modal field for follow indication
    *
    * @param {null}
    * @return {object}: field object
    */

    const LMe = this;
    //Do not render model field for follow/unfollow indication  
    if(LMe.tsCanIndicateFollowedRecords() === false){
      return {};
    }

    return {
      name: gtsJSONConsts().G_GEN_LIST.IS_FOLLOWED,
      type: 'boolean',
      calculate: function(p_objRecord){
          Assert(Ext.Object.isEmpty(p_objRecord), "Unable to calculate whether record is followed or not. Empty record object found in tsGetFollowModelField() method of tsclsCommonUtils class.");

          let LRecordId = gtsJSONConsts().tsGetPropertyFromRecordObject(p_objRecord, gtsJSONConsts().GGENERIC_RECORD_FIELDS.ID),
              LProjectId = gtsJSONConsts().tsGetPropertyFromRecordObject(p_objRecord, gtsJSONConsts().GGENERIC_RECORD_FIELDS.PROJECT_ID),
              LEtpId = gtsJSONConsts().tsGetPropertyFromRecordObject(p_objRecord, gtsJSONConsts().GGENERIC_RECORD_FIELDS.ETP_ID);

          //if no record id or project id pass then consider it as not followed, we cant assert here as root node,etc not having record info
          if((Ext.isNumber(LRecordId) === false) || (LRecordId <= 0) || (Ext.isNumber(LProjectId) === false) || (LProjectId <= 0) || (Ext.isNumber(LEtpId) === false) || (LEtpId <= 0)){
            return false;
          }
          //Return false if record is project type as we are not showing follow unfollow action
          //If record is not project type then, check whether record is followed or not by sync way
          return (gtsCacheUtils().tsIsProjectRecordType( LEtpId ) === false) && TS.App.Services().Follow().Exists(LRecordId, LProjectId, false); 
      }
    };
  },

  tsCanIndicateFollowedRecords: function () {
    /*
    * @method tsCanIndicateFollowedRecords
    * This method will check whether we can indicate followed records or not
    *
    * @param {null}
    * @return {Boolean}: Can show?
    */
    let LFollowService = TS.App.Services().Follow();
    return Ext.isEmpty(LFollowService) === false && LFollowService.getIsAvailable() && TS.App.UserSettings().CanHighlightFollowRecords();
  },

  HideSeparatorsFromMenu: function(p_objMoreBtn, p_objMenu) {
    /**
    * @method HideSeparatorsFromMenu
    * This method will hide extra seperators from more menu
    *
    * @param {object}: p_objMoreBtn: btn menu
    * @return {null}
    */

    var LMenu = null; 

    if(Ext.Object.isEmpty(p_objMoreBtn) === false){
      LMenu = p_objMoreBtn.menu;
    }
    else if(Ext.Object.isEmpty(p_objMenu) === false){
      LMenu = p_objMenu;
    }

    if(Ext.Object.isEmpty(LMenu) === true){
      return;
    }
    
    var LChildren = [],
        //Maintaining separate list of visible item and hidden item
        LVisibleItemsArr = [],
        //items that need to be hidden on UI
        LHiddenItemsArr = [],
        LItemType,
        LIsHidden,
        LCanHideItem,
        LPrevVisibleItem,
        LPrevVisibleItemType,
        LFirstVisibleItem,
        LFirstVisibleItemType,
        LLastVisibleItem,
        LLastVisibleItemType;

    //Get ChildItems
    LChildren = LMenu.items.getRange();
    if( Ext.isEmpty( LChildren ) ){
      return;
    }

    Ext.Array.each( LChildren, function( p_SubMenuItem, p_Indx, p_ArrItSelf ){

        //get item type
        LItemType = p_SubMenuItem.xtype;
        LItemType = LItemType.toUpperCase();
        LIsHidden = p_SubMenuItem.isHidden();
        LCanHideItem = LIsHidden;

        //if current item is not visble then process for next item
        if( LIsHidden === true )
        {
            return true;
        }

        //No need to display first and last item as separator
        if( ( p_Indx === 0 ) || ( p_Indx === ( p_ArrItSelf.length - 1 ) ) )
        {
            if( LItemType === "MENUSEPARATOR" )
            {
                LCanHideItem = true;
            }
        }
        else
        {
            //Now, there are multiple scenario in which we have to hide separators
            //1. When all above items are hidden
            //2. Between two separator some or all items are hidden
            //3. Last item is separator
            //4. All items after separator is hidden
            if( LVisibleItemsArr.length === 0 )
            {
                LCanHideItem = false;
            }
            else
            {
                //Now, Access previous visible item and check whether it is separator
                LPrevVisibleItem = LVisibleItemsArr[ LVisibleItemsArr.length - 1 ];
                LPrevVisibleItemType = LPrevVisibleItem.xtype;
                LPrevVisibleItemType = LPrevVisibleItemType.toUpperCase();
                //no two separator are showing together
                if( ( LPrevVisibleItemType === "MENUSEPARATOR" ) && (  LItemType === "MENUSEPARATOR" )  )
                {
                    //No need to display
                    LCanHideItem = true;
                }

            }
        }

        //Adding item entry to collection
        if( LCanHideItem )
        {
            LHiddenItemsArr.push( p_SubMenuItem );
        }
        else
        {
            LVisibleItemsArr.push( p_SubMenuItem );
        }

    });//each..children


    //In above loop first and last items need to check for type of menu separator
    if( LVisibleItemsArr.length > 0 )
    {
        //if first item is menu separator
        LFirstVisibleItem = LVisibleItemsArr[ 0 ];
        LFirstVisibleItemType = LFirstVisibleItem.xtype;
        LFirstVisibleItemType = LFirstVisibleItemType.toUpperCase();
        //no two separator are showing together
        if( LFirstVisibleItemType === "MENUSEPARATOR" )
        {
            //No need to display
            LFirstVisibleItem.setVisible( false );
        }
        //if last item is menu separator
        LLastVisibleItem = LVisibleItemsArr[ LVisibleItemsArr.length - 1 ];
        LLastVisibleItemType = LLastVisibleItem.xtype;
        LLastVisibleItemType = LLastVisibleItemType.toUpperCase();
        //no two separator are showing together
        if( LLastVisibleItemType === "MENUSEPARATOR" )
        {
            //No need to display
            LLastVisibleItem.setVisible( false );
        }
    }

    //Hiding unwanted items
    Ext.Array.each( LHiddenItemsArr, function( p_Item, p_Indx, p_Arr ){
        if( Ext.isEmpty( p_Item ) === false )
        {
            p_Item.setVisible( false );
        }
    });
  },

  ExportOneViewDocument: function(p_objData) {
    /**
    * @method ExportOneViewDocument
    * This method will export oneview document as format and data passed as parameter
    *
    * @param {Object}: Data object required to export document
    * @return {null}
    */
    const LMe = this;
    let LParamObj = {};

    Assert( Ext.Object.isEmpty( p_objData ), `Cannot export document. Invalid record object as parameter found in ${arguments.callee.name}() of ${this.$className} class.` );

    if(p_objData.canExport === false){
      //Here means, can't export and show appropriate message
      TS.App.Feedback.ShowInfoMsg( `Cannot export the ${ gtsCacheUtils().tsGetETPSingularNameFromId( gtsGenConsts().GETP_ID.ETP_ID_SRS_DOCUMENT ) } as it is empty.` );
      return;
    }

    LParamObj = {
      "url": gtsGenUtils().tsGetURLInProjectContext( 'oneview/'+ p_objData.recordId +'/Export' ),
      "method": 'POST',
      "queryId": -1,
      "oneViewRecordId": p_objData.recordId,
      "oneViewBaselineId": p_objData.baselineId || TS.App.ActiveBaselineIdAsNumeric(),
      "recordSelectionType": "tsWholeDocument",
      "fileFormat": Ext.isEmpty(p_objData.saveFormat) ? 'docx': p_objData.saveFormat //Format for the export document
    };
    //Download document
    LMe.tsExecutionActionInNewWindow( JSON.stringify(LParamObj), gtsGenConsts().ExecutionAction().EXPORT_ONEVIEW_DOCUMENT);
  },

  tsIsSaveAsTemplateActionAvailableForETP: function (p_EtpId) {
    /**
     * @method tsIsSaveAsTemplateActionAvailableForETP
     * This method will check the ETPs hardcoded and allow to save record as template for some of the record types
     * 
     * @param {p_EtpId} ETP that needs to be validated
     * @return true if ETP allowed to save as template
     */

     const LEtpInd = gtsCacheUtils().tsGetETPIndicatorFromId(p_EtpId);

     //FIXED: [PR-363432] USO FBK - Save as Template - Not able to save process guidance diagram as a template, throwing script error.
     //Allow only the General Diagrams (GDM) and BusinessProcess Diagrams only(BPD)
     if ( (LEtpInd === gtsGenConsts().GETP_INDICATOR.ETP_IND_BASE_DIAGRAM) || 
          (LEtpInd === gtsGenConsts().GETP_INDICATOR.ETP_IND_BUSINESS_PROCESS_DIAGRAM) ) {
      return true;
     }

     return false;
  },

  tsGetFormattedVersionNo: function(p_intVersionNo) {
    /**
     * @method tsGetFormattedVersionNo
     * This method will return the formatted version no
      1 as 1.00, 
      1.1 as 1.10
      1.11 as 1.11 
      1.12222 as 1.12222

      @returns {String}: Returns the formatted number in string
     */

    if(Ext.isEmpty(p_intVersionNo)) {
      return;
    }

    let LVersionNo = p_intVersionNo.toString();

    let LDecimals = LVersionNo.split('.')[1] || '0';
    
    if(LDecimals.length >= 2) {
      //Here means version no is like 1.10 or 1.12222
      return LVersionNo;
    }//if..

    //Here means if version is like 1, 1.1 so this will convert into 1.00, 1.10
    return p_intVersionNo.toFixed(2);
  },

  FindChildPackageById: function (p_intContainerId, p_arrEtpIdTOFetchs, p_arrForEtpIdTOFetchs, p_boolIsSyncReq) {
    /**
    * @method: FindChildPackageById
    * This method will fetch child package's of containers
    *
    * @public
    * @param {Integer} p_intContainerId container id for which child we have to fetch
    * @param {Array} p_arrEtpIdTOFetchs which etp we have to feth package's
    * @param {Array} p_arrForEtpIdTOFetchs forEtpId of packages
    * @param  {Boolean}p_boolIsSyncReq : Flag indicates : Ajax request call 
    * 
    * @return{null}
    */

    //Container id must required to fecth child packages information
    Assert(Ext.isNumber(p_intContainerId) === false || p_intContainerId <= 0, "Unable to execute GetChildPackagesOfContainer() method of common utils for Record Id = " + p_intContainerId);
    var LContainerCacheObj = TS.App.Cache.Containers().ById(p_intContainerId);
    Assert(Ext.Object.isEmpty(LContainerCacheObj), "Unable to execute GetChildPackagesOfContainer() method of common utils for Record Id = " + p_intContainerId);
    //Validte all parameter's
    p_arrEtpIdTOFetchs = Ext.isArray(p_arrEtpIdTOFetchs) ? p_arrEtpIdTOFetchs : [];
    p_arrForEtpIdTOFetchs = Ext.isArray(p_arrForEtpIdTOFetchs) ? p_arrForEtpIdTOFetchs : [];
    p_boolIsSyncReq = Ext.isBoolean(p_boolIsSyncReq) ? p_boolIsSyncReq : false;

    let LQueryParams = {},
        LQueryConstants = gtsJSONConsts().FFASTQUERY_INPUT_PARAMS,
        LAbsUrl,
        LUrl,
        LParams = {},
        LObjectPackages =[];

    //Set Input Params
    //LQueryParams[LQueryConstants.OLD_QUERYID] = null;
    //LQueryParams[LQueryConstants.QUERYID] = null;
    LQueryParams[LQueryConstants.PROJECTID] = LContainerCacheObj.ProjectId().toString();
    LQueryParams[LQueryConstants.OWNER_ID] = p_intContainerId;
    LQueryParams[LQueryConstants.PARENT_ID] = p_intContainerId;    
    LQueryParams[LQueryConstants.FILTERTYPE] = "ftDataFilter";
    LQueryParams[LQueryConstants.FILTERVALUE] = "-1";
    LQueryParams[LQueryConstants.QUERY_FOR_ETP] = p_arrForEtpIdTOFetchs.join(',');
    LQueryParams[LQueryConstants.VISIBLEFIELDS] = "forEtpId,recordId";
    LQueryParams[LQueryConstants.BASELINEID] = TS.App.ActiveBaselineId();
    LQueryParams[LQueryConstants.ETPIDS] = p_arrEtpIdTOFetchs.join(',');
    LQueryParams[LQueryConstants.REC_TYPE] = 'R';    
    LQueryParams[LQueryConstants.FETCH_LIST_BY_HIERARCHY] = false;
    LQueryParams[LQueryConstants.QUERY_PACKAGE_RECORDS] = true;

    LParams[LQueryConstants.GENERIC_LISTVIEW_PARAMS] = gtsGenUtils().tsJsonEncode( LQueryParams );

    LAbsUrl = 'ByRecordType/' + gtsCacheUtils().tsGetETPIdPrefixFromId( gtsGenConsts().GETP_ID.ETP_ID_REPOS_OBJECT );

    LUrl = gtsGenUtils().tsGetURLInProjectContext(LAbsUrl);

    var LFunFetchInformation = function(p_funResolve, p_funReject){

      Ext.Ajax.request({
        url: LUrl,
        method: "GET",
        async: p_boolIsSyncReq === false,
        params: LParams ,
        success: function(response, opts) {

           let LObjResponce = gtsGenUtils().tsJsonDecode(response.responseText);
           if(Ext.isEmpty(LObjResponce['children']))
           {
            return;
           }

           LObjectPackages = LObjResponce['children'];
           
           //Filters For ETP Id's
           if(Ext.isEmpty(p_arrForEtpIdTOFetchs) === false)
           {
             //Filter Array for the for etp id's
             LObjectPackages = LObjectPackages.filter(function(p_objData)
             {
               return Ext.Array.contains(p_arrForEtpIdTOFetchs, p_objData['forEtpId']);
             });
           }
        
           if(Ext.isFunction(p_funResolve)){
            p_funResolve(LObjectPackages);
           }
        },
        failure: function (response) {
            if(Ext.isFunction(p_funReject)){
                p_funReject(response.status);
            }
        }
      });

    };

    //Return the result immedietely if the method is called in SYNC
    if(p_boolIsSyncReq === true)
    {
      LFunFetchInformation();
      return LObjectPackages;
    }

    //Return promis for asynchronous request 
    var LPromise = new Ext.Promise(function (resolve, reject) 
    {
        LFunFetchInformation(resolve, reject);
    });

    return LPromise;
  },

  /**
   * Replace Placeholders enclosed in %% in the given string 
   * @method tsReplacePlaceHolders
   * @param {String} p_strCaption Caption in which you want to replace placeholders
   * @return {String} Caption with updated placeholders
   */
  tsReplacePlaceHolders: function(p_strCaption){

    if(Ext.isEmpty(p_strCaption)){
      return p_strCaption;
    }

    //Register your placeholder regularExpressions and the replaceFn
    let LPatternReplacementMap = [{
      pattern: /%((ETPSingularName)|(ETPName))=[0-9]+%/ig,
      replacement: function (p_strMatchedFragment) {
        let LRegEx = /ETPSingularName/ig;
        let LEtpId = parseInt(p_strMatchedFragment.match(/\d+/)[0]);
        return LRegEx.test(p_strMatchedFragment) ? gtsCacheUtils().tsGetETPSingularNameFromId(LEtpId) : gtsCacheUtils().tsGetETPNameFromId(LEtpId);
      }
    }];

    //Iterate all placeholders available and replace with correct value
    Ext.Array.each(LPatternReplacementMap, function (p_objPatternFn) {
      p_strCaption = p_strCaption.replace(p_objPatternFn.pattern, p_objPatternFn.replacement);
    });

    return p_strCaption;
  },

  /**
   * Method determines if the record for the provided record type can be shown in Explorer or not
   * @method tsCanShowRecordInExplorer
   * @public
   * @param {Number} p_intEtpId - Record Type Id
   * @return {Boolean}
   */
   tsCanShowRecordInExplorer: function(p_intEtpId){
    if(p_intEtpId <= 0){
      return false;
    }

    //Do not show Tracking Items in Explorer
    if(gtsCacheUtils().tsIsETPTrackingItem(p_intEtpId)){
      return false;
    }

    //Do not show following record type records in Explorer
    let LNonApplicableRecordTypeFamilies = [
      //Test Run 
      gtsGenConsts().GETP_INDICATOR.ETP_IND_TEST_RUN,
      //Test Result
      gtsGenConsts().GETP_INDICATOR.ETP_IND_TEST_CASE_RESULT
    ];

    let LEtpInd = gtsCacheUtils().tsGetETPIndicatorFromId(p_intEtpId);
    return Ext.Array.contains(LNonApplicableRecordTypeFamilies, LEtpInd) === false;
  },

  GetCalculatedTestResult: function (p_ResultIdList) {
    /**
    * @method GetCalculatedTestResult - this method will returns the calculated testResult state id.
    * @public
    * @param {Arr} : Array with LOV state ids and counts
    * @return  {int}: returns calculated LOV State Id
    */

    var LAllPassed = true,
      LIsAnyStepNotRun = false,
      LIsAnyStepSkipped = false,
      LUsrDfndResult = false,
      LIsAnyStepIncmplt = false,
      LResult;

    //exit if no result steps result ids are in List , it will set Test Case result to Passed
    if (p_ResultIdList.length <= 0) {
      LResult = gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_PASS;
      return LResult;
    }

    //iterate  each testCase Result present in the p_ResultIdList
    for (var LIndex = 0; LIndex < p_ResultIdList.length; LIndex++) {

      let LTestResultId = p_ResultIdList[LIndex].id;

      //Test case result is not equals to passed then set test run result failed
      if (LTestResultId !== gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_PASS) {
        LAllPassed = false;
      }

      //Test case result is equals to passed then set test run result passed
      if (LTestResultId === gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_PASS) {
        continue;
      }

      //Test case result is equals to Failed then set test run result Fail and return the Result
      if (LTestResultId === gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_FAIL) {
        LResult = gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_FAIL;
        return LResult;
      }// Test case result is equal Not Run and si not not equal to Failed then set test run result to Not Run.
      else if (LTestResultId === gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_NOTRUN) {
        LIsAnyStepNotRun = true;
      }
      else if (LTestResultId === gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_SKIPPED) {
        LIsAnyStepSkipped = true;
      }
      else if (LTestResultId === gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_INCOMPLETE) {
        LIsAnyStepIncmplt = true;
      }
      else {
        //If there is any custom LOV then only following code will be executed.
        //ASSUMPTION: all the predefined LOVs are considered above.
        LUsrDfndResult = true;
      }
    }

    //All Test case results are passed then set test run result as Passed.
    if (LAllPassed) {
      LResult = gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_PASS;
      return LResult;
    }

    if (LIsAnyStepNotRun) {
      LResult = gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_NOTRUN;
    }
    else if (LIsAnyStepSkipped) {
      LResult = gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_SKIPPED;
    }
    else if (LIsAnyStepIncmplt) {
      LResult = gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_INCOMPLETE;
    }
    else if (LUsrDfndResult) {
      //If there is any custom LOV then only following code will be executed.
      //ASSUMPTION: all the predefined LOVs are considered above.
      LResult = gtsGenConsts().GTEST_CASE_EXECUTION_RESULT_ID.RESULT_ID_FAIL;
    }
    return LResult;
  },

  GetTestRunExplorerBtnText: function (p_intStateId, p_intEtpId, p_strAssignTo) {
    /**
     * @method GetTestRunExplorerBtnText
     * This text is been used in Detail Editor's menu button as in Test Run List editor's menu items
     * 
     * Showing text of Run Now button according to following conditions:
        If Completed state
          - View Test Results
        If OpenState and Assigned to logged in user
          - Run Now
        else
          - Open Test Run
     */

    //Implemented CR-369800 Demo Build - Test Runs - Action to view Test Run in Explorer is missing - Refer Just
    if(GConstant.tsDemo === true) {
      return {
        caption: 'View Test Results',
        hint: '',
        imageIndex: gtsGenConsts().GGEN_IMAGE_INDEX.TEST_MGMT.TEST_RESULT
      };
    }//if..

    var LLoggedInUserDispName = '';

    //by default the caption should be Open Test Run
    const LDefault = {
      caption: `Open ${gtsCacheUtils().tsGetETPSingularNameFromId(gtsGenConsts().GETP_ID.ETP_ID_TEST_RUN)}`,
      hint: '',
      imageIndex: gtsGenConsts().GGEN_IMAGE_INDEX.TEST_MGMT.TEST_EXECUTION
    };

    //exit if etp or state id is empty..ideally we should raise assert from here.
    if (Ext.isEmpty(p_intStateId) || Ext.isEmpty(p_intEtpId))
      return LDefault;

    //get state name from state id
    const LStateName = gtsCacheUtils().tsGetStateName(p_intEtpId, p_intStateId);

    //If state not exists for the record type then return the default
    if (Ext.isEmpty(LStateName) === true){
      return LDefault;
    }

    //the caption should be View Test Results if test run is in closed state
    if (gtsCacheUtils().tsGetIsStateOpenFromName(p_intEtpId, LStateName) === false) {
      //Here means state is closed/completed
      return {
        caption: 'View Test Results',
        hint: '',
        imageIndex: gtsGenConsts().GGEN_IMAGE_INDEX.TEST_MGMT.TEST_RESULT
      };
    }//if..

    //return default caption if test run is not assigned to any user    
    if (Ext.isEmpty(p_strAssignTo) === true)
    {
      return LDefault;
    }

    p_strAssignTo = p_strAssignTo.trim();
    
    //get logged in user's display name
    LLoggedInUserDispName = gtsCacheUtils().tsGetUserDisplayNameForUserId(TS.App.Session().UserId());

    //here means test run is in open state and assigned to some user. 
    //if test run is assigned to the logged in user then caption should be Run Now else default
    if (gtsGenUtils().tsDecode(p_strAssignTo).toLowerCase() === gtsGenUtils().tsDecode(LLoggedInUserDispName).toLowerCase()) {//p_strSysFlag4 !== 'Y' ||      
      return {
        caption: 'Run Now',
        hint: `Run this ${gtsCacheUtils().tsGetETPSingularNameFromId(gtsGenConsts().GETP_ID.ETP_ID_TEST_RUN)}`,
        imageIndex: gtsGenConsts().GGEN_IMAGE_INDEX.TEST_MGMT.TEST_EXECUTION
      };
    }//else if..

    return LDefault;
  },

  /**
   * The method validates if the provided XML is valid XML or not
   * @method tsIsValidXML
   * @public
   * @param {String} p_XmlString - XML to be validated 
   * @returns {Object} result & errorMsg
   */
  tsIsValidXML: function(p_strXML) {
    Assert(Ext.isEmpty(p_strXML), `Unable to execute ${arguments.callee.name}() method of ${this.$className}. Invalid XML provided to validate.`);

    //Init variables
    let LResult = {
      result: true,
      errorMsg: ''
    },
      LParser = null,
      LParserRrrorNamespace = '',
      LXMLDom = null,
      LErrorArr = [];

    //Reference: https://stackoverflow.com/questions/11563554/how-do-i-detect-xml-parsing-errors-when-using-javascripts-domparser-in-a-cross
    LParser = new DOMParser();
    LParserRrrorNamespace = LParser.parseFromString('INVALID', 'application/xml').getElementsByTagName("parsererror")[0].namespaceURI;
    LXMLDom = LParser.parseFromString(p_strXML, 'application/xml');
    LErrorArr = LXMLDom.getElementsByTagNameNS(LParserRrrorNamespace, 'parsererror');

    //Add error msg in result if error occurs. Invoker can show it in UI as required.
    if(LErrorArr.length > 0) {
      LResult.result = false;
      LResult.errorMsg = LErrorArr[0].innerText;
    }

    return LResult;
  },
  
  CanPromptForReuseType: function() {
    /**
    * @method CanPromptForReuseType
    * This method will return boolean value and set reuse type selection page visiblity as per flag.
    *
    * @private
    * @return{Boolean}: Decides the action availability of Reuse Type selection page in reuse wizard
    */

    var LMe = this,
        LReuseSettings = {},
        LCanPromptForReuseType = false;

    LReuseSettings = LMe.GetGlobalSettingsForReuse();

    Assert(Ext.isEmpty(LReuseSettings) === true, "Invalid reuse settings found in pvtGlobalSettingsForReuse method of tsclsCommonutils class.");

    LCanPromptForReuseType = LReuseSettings.CanPromptForReuseType();

    return LCanPromptForReuseType;
  },

  GetGlobalSettingsForReuse: function() {
    /**
    * @method GetGlobalSettingsForReuse
    * This method will return the reuse record type.
    *
    * @public
    * @return{Object}: Reuse Settings Object.
    */

    let LGlobalSettingsCache = {},
        LReuseSettings = {};

    LGlobalSettingsCache = TS.App.Cache.GlobalSettings();

    Assert(Ext.isEmpty(LGlobalSettingsCache) === true, "Invalid cache object found in GetGlobalSettingsForReuse method of tsclsCommonUtils class.");

    LReuseSettings = LGlobalSettingsCache.ReuseSettings();

    Assert(Ext.isEmpty(LReuseSettings) === true, "Invalid reuse settings found in GetGlobalSettingsForReuse method of tsclsCommonUtils class.");

    LReuseSettings.LoadReuseRecordType();

    return LReuseSettings;
  },
  /**
   * Method returns if the provided parameters represent a System Package of Tracking Item or not
   * @param {Number} p_intEtpId - Record Type Id
   * @param {Number} p_intForEtpId - For Record Type Id
   * @returns {Boolean}
   */
  tsIsTrackingItemSystemPackage: function(p_intEtpId, p_intForEtpId){
    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0, `Unable to execute ${arguments.callee.name}() method of ${this.$className} for Record Type Id <b>${p_intEtpId}</b>`);
    
    //Here we are first checking wether given ETP Id is a System Package, then checking for validity of forEtpId and if It is a tracking item.
    return p_intEtpId === gtsGenConsts().GETP_ID.ETP_ID_SYSTEM_PACKAGE && 
      p_intForEtpId > 0 &&
      gtsCacheUtils().tsIsETPTrackingItem(p_intForEtpId);
  },
  /**
   * This function is use to get position using event object
   * @method tsGetXYCoordinatesFromEventObject
   * @public
   * @param {Object} p_objEvent event object use to find position
   * @returns {object} XY coordinates of component
   * {
      x: LX,
      y: LY
    };
   */
  tsGetXYCoordinatesFromEventObject: function (p_objEvent) {

    Assert(Ext.Object.isEmpty(p_objEvent), `Unable to execute ${arguments.callee.name}() method of ${this.$className} class. Event Object is not found.`);
    let LX = 0, LY = 0;

    //If it's a Mouse Event, we can take X and Y coordinates directly from event
    if (p_objEvent.event instanceof MouseEvent) {
      LX = p_objEvent.getX();
      LY = p_objEvent.getY();
    }
    //If it's a Keyboard event, then get the X,Y of the target HTML element on which user has pressed the key 
    else if (p_objEvent.event instanceof KeyboardEvent) {
      //Get location of component 
      let LClientRects = p_objEvent.target.getClientRects();

      if (Ext.isEmpty(LClientRects[0]) === false) {
        LX = LClientRects[0].x;
        LY = LClientRects[0].y;
      }
    }

    //of position is not found then pass [0,0]
    return {
      x: LX,
      y: LY
    };
  },
  /**
    * @method tsShowFullScreenImagesOnClick
    * This method is used to enable viewerjs to all image applyed to cel of grid
    * @param {Array} p_arrSelector Array of selector class to apply viewer 
    * 
    * @return{none}
    */
  tsShowFullScreenImagesOnClick: function (p_arrSelectors) {

    //Assert if param is not array or empty
    Assert(Ext.isArray(p_arrSelectors) === false || p_arrSelectors.length <= 0, `Unable to execute ${arguments.callee.$name}() method of ${this.$className}.Selector provided is invalid.`);

    const LMe = this;

    //Iterate over the function unless the viewerJs plugin is loaded.
    if (Ext.isFunction($.fn.viewer) === false) {
      setTimeout(() => {
        LMe.tsShowFullScreenImagesOnClick(p_arrSelectors);
      }, 500);
      return;
    }
    //Use image viewer component to show the selected images in fullscreen on click
    Ext.Array.each(p_arrSelectors, function (p_strSelector) {
      $(p_strSelector).viewer({
        zIndex: 30000,
        keyboard: true,
        toolbar: false,
        navbar: false,
        title: false
      });
    });
  },
  
  /**
   * this method is use to check if rich text data is empty.
   * @method tsIsRichTextEmpty
   * @param
   * @param {string} p_strData string use to check empty or not   
   * @returns {boolean} sting is empty or not
   */
  tsIsRichTextEmpty: function (p_strData) {
    //Remove HTML Tags and newline escape. (Some dummy Html tag were added in 
    //cell data if its created from net client)
    // Regular expression to exclude self-closing tags
    //not added "BR" because if cell contains only br then it should consider as empty
    // Check for Image tag presence, if present, then it cannot be considered empty
    //gtsCommonUtils().tsIsRichTextEmpty(p_str)

    Assert(Ext.isString(p_strData) === false, `Unable to execute ${arguments.callee.name}() method of ${this.$className}. Rich text data is received as <b>${p_strData}</b>`);
    
    //Trim leading and trailing whitespaces to check if the param is empty
    p_strData = p_strData.trim();
    if(Ext.isEmpty(p_strData)){
      return true;
    }

    // eslint-disable-next-line no-useless-escape
    let LRegex = /<(?!\s*(?:hr|img)(?=\s|\/?>))\s*\/?[^\>]*>/gi;
    let LData = p_strData.replace(LRegex, '');

    //Decoding because data may contain non breaking space character.
    LData = gtsGenUtils().tsDecode(LData);

    return Ext.isEmpty(LData.trim());
  },

  tsGetFormattedEtpName: function (p_intEtpId, p_boolCanShowGreyIcon, p_boolIsSingularName) {
    /**
     * @method tsGetFormattedEtpName
     * This method will return the ETP name in following format
     *   - Icon EtpName [Prefix]
     */
    if (Ext.isEmpty(p_intEtpId))
      return '';

    /** TODO -Trinesh -Feedback
        Refactor this function into two parts
        1. One function will access image cls, text and gray text and return the formatted output
        2. 2nd function will be same as this however it will call 1st function to get formatted output
    */

    let LEtpId = p_intEtpId,
      LEtpImageIndex = gtsCacheUtils().tsGetImageIndexForETP(LEtpId),
      LImageCls = gtsGenUtils().tsGetClsForEtpImg16(LEtpImageIndex), //p_boolCanShowGreyIcon ? gtsGenUtils().tsGetClsForEtpImg16_GrayScale(LEtpImageIndex) : gtsGenUtils().tsGetClsForEtpImg16(LEtpImageIndex),
      LEtpName = p_boolIsSingularName ? gtsCacheUtils().tsGetETPSingularNameFromId(LEtpId) : gtsCacheUtils().tsGetETPNameFromId(LEtpId),
      LIcon, LEtpPrefix, LValue, LPrefix;

    LIcon = `<span style="cursor:auto;float:left;margin-top:auto;margin-right:3px;${p_boolCanShowGreyIcon ? 'filter: grayscale(50%);opacity:0.5' : ''}" class="GridCellIconCls ${LImageCls}"></span>`;

    //Getting ETP prefix
    LEtpPrefix = gtsCacheUtils().tsGetETPIdPrefixFromId(LEtpId);

    LValue = ['<span title="' + LEtpName + ' [' + LEtpPrefix + ']">' + LEtpName + '</span>'];

    LPrefix = ['<span class="tsGrayShade3"> [' + LEtpPrefix + ']</span>'].join();

    return `<span>${LIcon + LValue + LPrefix}</span>`;
  },

  tsValidatePITCanCreatePermission: function(p_intEtpId, p_intProjectId, p_boolRaiseMsg){
    /**
    * @method tsValidatePITCanCreatePermission
    * validates if the recordtype can be created in the project or not
    * @param {Number} p_intETPId
    * @param {Number} p_intProjectId
    * @param {Boolean} p_boolRaiseMsg
    * @return {Boolean} 
    */
    const LMe = this;

    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0,`Invalid Record Id = ${p_intEtpId} found in ${arguments.callee.name}() of ${LMe.$className} class.`);
    Assert(Ext.isNumber(p_intProjectId) === false || p_intProjectId <= 0,`Invalid Project Id = <b>${p_intProjectId}</b> found in ${arguments.callee.name}() of ${LMe.$className} class.`);
    Assert(Ext.isBoolean(p_boolRaiseMsg) === false, `Expected Boolean value, but found <b>${p_boolRaiseMsg}"</b> in ${arguments.callee.name}() of ${LMe.$className} class.`);

    let LPITCacheObj = null,
        LPITPermissions = null,
        LSingularName = gtsCacheUtils().tsGetETPSingularNameFromId(p_intEtpId),
        LProjectId,
        LProjectObj = null,
        LTrimmedPrjName;

    LProjectId = p_intProjectId;

    LProjectObj = TS.App.Cache.Projects().ById( LProjectId );

    Assert(Ext.isEmpty(LProjectObj) === true, `Project object not found in ${arguments.callee.name}() of ${LMe.$className} class.`);

    LTrimmedPrjName = LProjectObj.Name();

    LPITCacheObj = LProjectObj.PITs().ById(p_intEtpId);

    //When PIT is not present in project
    if(Ext.isEmpty(LPITCacheObj)){
      if(p_boolRaiseMsg){
        TS.App.Feedback.ShowInfoMsg("You cannot create <b>"+LSingularName+"</b> in the project <b>"+ LTrimmedPrjName + "</b>.</br></br><b>"+LSingularName+"</b> Record Type is not included.");
      }
      return false;
    }

    //When PIT is present but hidden
    if(LPITCacheObj.IsHidden()){
      if(p_boolRaiseMsg){
        TS.App.Feedback.ShowInfoMsg("You cannot create <b>"+LSingularName+"</b> in the project <b>"+ LTrimmedPrjName + "</b>.</br></br><b>"+LSingularName+"</b> Record Type is hidden.");
      }
      return false;
    }

    //If user is not having create record permission for the provided recordtypeid and project
    LPITPermissions = LPITCacheObj.Permissions();
    Assert(Ext.isEmpty(LPITPermissions) ,"Unable to get recordtype permissions for recordtype id: "+ p_intEtpId+" and project id:" +LProjectId );

    if (LPITPermissions.CanCreateRecord() === false){
      if(p_boolRaiseMsg){
        TS.App.Feedback.ShowInfoMsg("You do not have permission to create <b>"+LSingularName+"</b> in the project <b>"+ LTrimmedPrjName + "</b>.");
      }
      return false;
    }

    return true;
  },
  
  tsGetProjectsWithUserRightsOn: function(p_intUserId, p_intEtpId, p_intActionId, p_boolCheckForPermissionInPackages){
      /**
        * @public
        * @method tsGetProjectsWithUserRightsOn
        * This Method is used to fetch the projects based on etp id and action id.
        *
        * @param {number} p_intUserId User id
        * @param {number} p_intEtpId Etp Id
        * @param {number} p_intActionId Action Id
        * @param {boolean} p_boolCheckForPermissionInPackages True to check the permissions of the package
        * 
        * 
        * @return {object} promise  
      **/

    let LRequestJSON = {},
        LConfig = {},
        LPromise;

    //Implemented: TODO - RasikaI - Method intent just describing the code not the purpose of adding this method
    //Implemented: TODO - RasikaI - We can raise assert in this case instead of info message
    Assert(Ext.isEmpty(p_intEtpId) || !Ext.isNumber(p_intEtpId), `Unable to fetch projects, etp id not expected in ${arguments.callee.name}() method of ${this.$className} class.`);

    //Implemented TODO - RasikaI - We can raise assert in this case instead of info message
    Assert(Ext.isEmpty(p_intActionId) || !Ext.isNumber(p_intActionId),`Unable to fetch project, action id not expected in ${arguments.callee.name}() method of ${this.$className} class.`);
    
    //Config to send as an argument for firing command
    LConfig = {
      urlpath: `RecordTypes/${p_intEtpId}/actions/${p_intActionId}/projects`,
      params: LRequestJSON,
      methodType: 'GET',
      canReturnPromise: true
    };

    //Handling Asynchronous action using promise 
    LPromise = new Ext.Promise( function (p_Resolve, p_Reject) {
      gtsRestUtils.FireCommand(LConfig).then(

        //On Success
        function (p_objResponseData) {
          p_Resolve(p_objResponseData);
        },

        //On Failure
        function (p_objErrorRecord) {
          p_Reject(p_objErrorRecord);
        }


      );
    });

    return LPromise;
  },
  /**
   * this function convert nslinkinfo object to base64 encoded string
   * @method tsConvertNsLinkInfoObjectToString 
   * @public
   * @param {Object} p_ObjNslinkInfoObject nslinkinfo object contains link info
   * @returns {string} Base64 encoded string 
   */
  tsConvertNsLinkInfoObjectToString: function(p_ObjNslinkInfoObject){
    
    function L_IfFoundSpaceAddQuotes(p_String) {
      var LIndex = p_String.search(' ');

      if (LIndex >= 0) {
        return '"' + p_String + '"';
      }
      else {
        return p_String;
      }
    }

    let LLinkInfoArr = [],
        LNslinkInfoValue,
        LNSLinkInfo;
    Ext.Object.each(p_ObjNslinkInfoObject, function (p_key, p_value) {
      if (Ext.isEmpty(p_value, true) === false) {
        let LStr1 = p_key + '=' + p_value;
        LStr1 = L_IfFoundSpaceAddQuotes(LStr1);
        LLinkInfoArr.push(LStr1);
      }
    });

    //Convert the attribute array to string
    LNslinkInfoValue = LLinkInfoArr.toString(); 
    try {
      //Encrypt the information into Base 64
      LNSLinkInfo = gtsGenUtils().tsEncryptBase64(LNslinkInfoValue);
    } catch (e) {
      TS.App.Feedback.ShowInfoMsg("Unable to link record as Title contains special characters.");
      return;
    }
    return LNSLinkInfo;
  },

  tsGetDiagramTypeFromEtpId: function (p_intEtpId) {
    /*
    * @method tsGetDiagramTypeFromEtpId
    * This method will return the diagram type according to record type. 
    * Default diagram type is "DIAGRAM".
    * 
    * @public
    * @param{integer} : Record Type Id
    * @return{string} : Diagram Type
    */

    const LMe = this;

    Assert(Ext.isNumber(p_intEtpId) === false || p_intEtpId <= 0, `Invalid record type id = ${p_intEtpId} found in ${arguments.callee.name}() of ${LMe.$className} class.`);

    let LIsDiagramEtp = gtsCacheUtils().tsIsDiagramETP(p_intEtpId);
    Assert(LIsDiagramEtp === false, `Invalid diagram record type id = ${p_intEtpId} found in ${arguments.callee.name}() of ${LMe.$className} class.`);

    let LDiagramType = gtsGenConsts().GDiagramType.DIAGRAM,
      LEtpInd = gtsCacheUtils().tsGetETPIndicatorFromId(p_intEtpId);

    if (LEtpInd === gtsGenConsts().GETP_INDICATOR.ETP_IND_BUSINESS_PROCESS_DIAGRAM) {
      LDiagramType = gtsGenConsts().GDiagramType.BPD;
    }
    else if (LEtpInd === gtsGenConsts().GETP_INDICATOR.ETP_IND_SCREEN_MOCKUP ||
      LEtpInd === gtsGenConsts().GETP_INDICATOR.ETP_IND_SCREEN_MOCKUP_MASTER_PAGE ||
      LEtpInd === gtsGenConsts().GETP_INDICATOR.ETP_IND_SCREEN_MOCKUP_WIDGET) {
      LDiagramType = gtsGenConsts().GDiagramType.SCREEN_MOCKUP;
    }
    else if (LEtpInd === gtsGenConsts().GETP_INDICATOR.ETP_IND_GENERIC_DIAGRAMS) {
      LDiagramType = gtsGenConsts().GDiagramType.GENERIC_DIAGRAMS;
    }

    return LDiagramType;
  },

  tsGetQTipHintForHint: function(p_strHint){
    /*
    * @method tsGetQTipHintForHint
    * This method will return the compatible Qtip help for the general help text.
    * 
    * @public
    * @return{string} : Hint
    */ 
   
    return Ext.String.htmlEncode(p_strHint);
  },




  /**
   * this method is use to get Height and width of window relative to screen size
   * @method tsGetWindowHeightWidthRelativeToScreen
   * 
   * @param {integer} p_intMaxWidth maximum width applied to be applied to window
   * @param {integer} p_intMaxDefaultHeight maximum height applied to be applied to window
   * 
   * @returns {object} height and width of window
   *          {
   *          height: intHeight ,
   *          width: intWidth
   *          }
   */
  tsGetWindowHeightWidthRelativeToScreen(p_intMaxWidth, p_intMaxDefaultHeight){

    //Max height and width are compulsory
    Assert(Ext.isNumber(p_intMaxWidth) === false || p_intMaxWidth <= 0, `Unable to execute ${arguments.callee.name}() method of ${this.$className}. Invalid max width provided.`);
    Assert(Ext.isNumber(p_intMaxDefaultHeight) === false || p_intMaxDefaultHeight <= 0, `Unable to execute ${arguments.callee.name}() method of ${this.$className}. Invalid max height provided.`);

    //Calculate Height and Width of window relative to screen size
    let LHeight = ((Ext.getViewportHeight() - 100 > p_intMaxDefaultHeight) ? p_intMaxDefaultHeight : Ext.getViewportHeight() - 100),
        LWidth = (Ext.getViewportWidth() - 100) > p_intMaxWidth ? p_intMaxWidth : Ext.getViewportWidth() - 100;

    return {
      height: LHeight,
      width: LWidth
    };
  },

  ExtractDispIdFromString: function(p_strDispId) {
    /*
    * @method ExtractDispIdFromString
    * This method will extract the Id from the Calculated DIsp id
    * 
    * @public
    * @return{number} : Id of th record
    */ 
      var LNumericPart = '';
      var i = p_strDispId.length - 1;
    
      while (i >= 0 && !isNaN(p_strDispId[i])) {
        LNumericPart = p_strDispId[i] + LNumericPart;
        i--;
      }
    
      return parseInt(LNumericPart, 10);
  },

  /**
   * this method will return active project id 
   * @method GetActiveProjectId
   * 
   * @returns project id
   */
  GetActiveProjectId: function(){
    var LIdFromWindowContext;

    //BIZ Rule - Give first preference to the active project id set in the window context.
    //User story - If user has changed active project in a browser window then he expects that it 
    //should not auto change if active project has been changed in some other browser window.
        
    LIdFromWindowContext = TS.App.GetValueFromWindowContext('tsActiveProjectId');
    if (!Ext.isEmpty(LIdFromWindowContext))
    {
      return LIdFromWindowContext;
    }
    else 
    {      
      //here means, the tab is open for the first time and user has not changed project in this tab. 
      //we can pick up active project id from the cookie in this case. 
      //Ideally, it should pickup active project from permalink but that change will be needed in command mgr.
      return Ext.util.Cookies.get( 'tsActiveProjectId');
    }    
  },

  /**
   * @method GetStyledExpiryDateForKeyBasedAuth
   * This method will return the dates with their respective styles to be shown on grid
   * 
   * @param {String} p_ExpiryDate - Date in JS-Date format 
   * @param {Integer} LDateDiff - Difference between Today and the given date
   * @returns {String} - Style date string in html format
   */
  GetStyledExpiryDateForKeyBasedAuth: function (p_ExpiryDate) {

    Assert(Ext.isEmpty(p_ExpiryDate), `Invalid expiry date found for the key record.`);

    const LTodaysDate = new Date();

    //we need to compare the Expiry date with the current date, so resetting the time from date object.
    LTodaysDate.setHours(0, 0, 0, 0);

    //Convert JS string format into JS format
    const LExpiryDate = gtsGenUtils().ConvertRESTDateStringToJSDateFormat(p_ExpiryDate),

      //Calculate how many day are there between two time.
      LDateDiff = Ext.Date.diff(LTodaysDate, LExpiryDate, Ext.Date.DAY),

      //Converting date into display format
      LExpiryDate_Str = gtsGenUtils().ConvertJSDateToLocalStringFormat(LExpiryDate, 2);

    if (LDateDiff < 0) {
      //here means the date is expired
      return `<span style="color:red;">${LExpiryDate_Str}</span>`;
    }

    const LDateDisplyText = {
      0: `<span style="color:orange;">${LExpiryDate_Str}, (Today)</span>`,
      1: `<span style="color:blue;">${LExpiryDate_Str}, (Tomorrow)</span>`,
      2: `<span style="color:blue;">${LExpiryDate_Str}, (2 Days Remaining)</span>`,
      3: `<span style="color:blue;">${LExpiryDate_Str}, (3 Days Remaining)</span>`,
      4: `<span style="color:blue;">${LExpiryDate_Str}, (4 Days Remaining)</span>`,
      5: `<span style="color:blue;">${LExpiryDate_Str}, (5 Days Remaining)</span>`
    };

    return LDateDisplyText[LDateDiff] || LExpiryDate_Str;
  },
  
  /**
   * @public
   *  Splits clipboard data into an array of strings based on smart formatting criteria.
   * Automatically detects and splits spreadsheet data and table. Handles HTML and plain text formatting.
   *
   * @param {string} p_strData The clipboard data to be split.
   * @param {string[]} [p_arrParams] [p_arrParams] Optional formatting criteria as an array of strings:
 *      - "newline": Split by newlines and <br> tags.
 *      - "paragraph": Split by paragraph tags (\<p\>).
 *      - "bullet": Split by bullet list items (\<li\>).
 *      - "html": Remove HTML tags, including non-breaking spaces.
 *      Defaults to splitting by unordered/ordered lists (\<ul\>, \<ol\>) if not specified.
 *
   * @param {boolean} [p_boolTypeOfCopiedDataHtml] [p_boolTypeOfCopiedDataHtml=true] Indicates if the input data is HTML (default: true).
   * @returns {string[]} An array of split data strings, or null if data cannot be split.
   * 
   * @example
   * gtsCommonUtils().SplitDataUsingInputFormatters(textData, ["newline","paragraph", "bullet"]);
   */
  SplitDataUsingInputFormatters: function (p_strData, p_arrParams, p_boolTypeOfCopiedDataHtml = true) {
    let LMe = this;
    let LFinalResult = [p_strData]; // Initialize the result array with the original data

    // Convert parameter array to lowercase set for case-insensitive matching
    let LContraintsToBeAppliedSet = new Set(p_arrParams.map(p_strConstraint => p_strConstraint.toLowerCase()));

    // Define regular expressions for different parameters
    const LRegexPatterns = {
      HTML_PARAM: /<[^>]*>|<\/>|&nbsp;/g,
      BULLET_PARAM: /<li[^>]*>(?:\s|\S)*?<\/li>/ig,
      PARAGRAPH_PARAM: /(?<!<(li|td)[^>]*>)(<p[^>]*>[\s\S]*?<\/p>)/gi,
      // PARAGRAPH_PARAM: /<p[^>]*>(?:\s|\S)*?<\/p>/gi,
      // NEWLINE_PARAM: /<br[^>]*>|\r?\n/gi,
      NEWLINE_PARAM: /<br[^>]*>|\r?\n|<div[^>]*>|<\/div>/gi,
    };

    if (LMe.pvtIsCopiedDataFromSpreadSheet(LFinalResult)) { 
      LFinalResult = LMe.pvtExtractTableData(LFinalResult);
      // LFinalResult =LMe.pvtRemoveClosingTagsFromStart(LFinalResult)
      console.log(LFinalResult)
      if (!LFinalResult) { return null; }
      // Handle table data using controller
      let LControllerReference = Ext.create('TS.view.editing.classes.tscontrollerPasteEnhancement');
      LControllerReference.pvtUpdateStoreData(LFinalResult);
      return null;
    }

    // Split by list tags (unordered/ordered)
    LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<ul[^>]*>[\s\S]*?<\/ul>|<ol[^>]*>[\s\S]*?<\/ol>|<table[^>]*>[\s\S]*?<\/table>/ig);


    // Apply splitting based on provided constraints
    if (LContraintsToBeAppliedSet.has('html')) {
      LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, LRegexPatterns.HTML_PARAM);
    }
    if (LContraintsToBeAppliedSet.has('bullet')) {
      LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, LRegexPatterns.BULLET_PARAM);
    }
    if (LContraintsToBeAppliedSet.has('paragraph')) {
      LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, LRegexPatterns.PARAGRAPH_PARAM);
      if (!p_boolTypeOfCopiedDataHtml) {
        // Remove extra newlines in plain text (except for single newlines)
        LFinalResult = LFinalResult.map(str => str.replace(/\r?\n[\r?\n]*\r?\n/, ''));
      }
    }
    if (LContraintsToBeAppliedSet.has('newline')) {
      LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, LRegexPatterns.NEWLINE_PARAM);
    }
    LFinalResult = LMe.pvtRemoveClosingTagsFromStart(LFinalResult)
    // Filter and trim final results
    return LFinalResult.filter(str => str.trim() !== '').map(LFormattedString => LFormattedString.trim());
  },

  pvtRemoveClosingTagsFromStart: function (p_arrData) {
    return p_arrData.map(str => {
      let initialString = str;
      do {
        initialString = str;
        str = str.trim().replace(/^<\/[^>]*>/, '');
      }while (initialString !== str)
      return str;
    })
  },

  /**
  * @public
  * Removes HTML tags, non-breaking spaces, and other characters from a string
  *
  * @param {string} p_strData - The string containing the data.
  * @returns {string|null} The cleaned name string or null if the resulting string is empty.
  */
  RemoveTagsFromNameField: function (p_strData) {
    let LDataAfterRegexOperationArr = this.pvtRemoveSelectedTag([p_strData], /<[^>]*>|<\/>|&nbsp;/g)
    return LDataAfterRegexOperationArr.join(" ").trim() || null;
  },
});
