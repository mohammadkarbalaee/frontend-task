# Front-End coding task

The goal is to implement an application to manage working tasks. See the **[user stories](#user-stories)** for the application details to be implemented.

Push the code on a Github repository and make it public and share it with us.
One of the most important topics we want to see, is how you commit your progress. This does not mean every commit has to be perfect.

# User stories

- As a user I can create tasks, so that all tasks for a project can be tracked.
    - Acceptance Criteria:
    - A task must have a title
    - A task must have a long description
    - A task must have the status "ToDo"
- As a user I can change the status of a Task, so that the progress of the project can be tracked.
    - Acceptance Criteria:
    - Only the following status transitions are allowed, see **[state transitions](#state-transitions)**
- As a user I can change the title and long description of a task.
- As a user I will see the history of a Task, so that I can track the history of a task.
    - Acceptance Criteria:
    - The previous and the next value of a change must be tracked

So for example:

- If a task is currently at "toDo" state in can only be changed to "InProgress"
- If a task is currently at "inQA" state in can only be both changed to "Done" or "ToDo"
- Check the diagram image for figuring out

## Tech Stack

- Implement the app using [React (UI Library)](https://reactjs.org/).
    - [typescript](https://www.typescriptlang.org/) is mandatory
- Please stick with React's internal APIs to handle state management (React Context API)
- Prefer function components and hooks over class components
- The application must be primary optimized for mobile devices and must have a optimized layout for desktop.

## Acceptance Criteria

- Test cases is optional
- The app should be working and buildable with no errors.
- There should be individual commits with meaningful commit messages for every user story.
- API Documentation
- It's mandatory to use SVG icons and not PNG images. Icons used in designs can be easily found on flaticon.com

## State Transitions

![logic](https://raw.githubusercontent.com/Duniar-Group/frontend-task/main/images/task-management-diagram.png)

## Sample design

![design-edit](https://raw.githubusercontent.com/Duniar-Group/frontend-task/main/images/task-management-edit-task.png)
![design-edit-dropdown](https://raw.githubusercontent.com/Duniar-Group/frontend-task/main/images/task-management-edit-task-open-dropdown.png)
![design-home](https://raw.githubusercontent.com/Duniar-Group/frontend-task/main/images/task-management-home.png)
![design-zero-state](https://raw.githubusercontent.com/Duniar-Group/frontend-task/main/images/task-management-zero-state.png)
