# Grade Calculator Application
This project helps students calculate their grades in a class by configuring their desired weights for different assignment types.
## Brainstorming
### MongoDB Schema
As of now, I'm leaning towards using MongoDB to store the data for this application. We can store users in one collection and classes in another collection.<br>
**User**
- Unsure

**Class**
- Class Name
- Array of Grade Weights
    - Category Name
    - Percentage

### Feature Ideas
- Sorting Grade Weights
- Ensure grade weights don't exceed 100%
- Use local storage for saving on DB operations