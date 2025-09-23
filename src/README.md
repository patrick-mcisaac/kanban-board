# 🎯 Kanban Board Challenge

## The Mission

Build a fully functional Kanban board using **only `useReducer`** for state management. Master complex state interactions, drag & drop, and real-world data flow patterns.

## 🎮 Core Features to Build

### **Basic Board Management**

- 3 columns: "To Do", "In Progress", "Done"
- Add new cards to any column
- Edit card titles inline
- Delete cards with confirmation
- Move cards between columns via drag & drop

### **Advanced Interactions**

- Reorder cards within the same column
- Drag visual feedback (ghost card, drop zones)
- Cancel drag operations (ESC key or invalid drops)
- Keyboard shortcuts (Enter to save, ESC to cancel)

### **State Challenges**

- Track which card is currently being dragged
- Handle optimistic UI updates
- Manage edit modes for inline editing
- Loading states for async operations (simulate API calls)
- Undo functionality for accidental deletions

## 🧠 The `useReducer` Puzzle

Your reducer must handle complex state like:

```javascript
{
  columns: [...],           // Column definitions and order
  cards: [...],            // All cards with column assignments
  dragState: {...},        // Currently dragging info
  editState: {...},        // Which cards are being edited
  ui: {...},              // Loading, errors, modals
  history: [...]          // For undo functionality
}
```

### **Actions You'll Need:**

- `DRAG_START` / `DRAG_END` / `DROP_CARD`
- `ADD_CARD` / `EDIT_CARD` / `DELETE_CARD`
- `START_EDIT` / `SAVE_EDIT` / `CANCEL_EDIT`
- `SET_LOADING` / `SET_ERROR`
- `UNDO_DELETE`

### **The Complex Part:**

When a card moves from "To Do" to "In Progress":

1. Update source column's card order
2. Update destination column's card order
3. Update the card's column assignment
4. Clear drag state
5. Maybe trigger API call simulation
6. Handle if the operation fails

## 🎨 UI Requirements

### **Visual States:**

- Cards show different styles when dragging
- Drop zones highlight when drag hovers over them
- Smooth transitions and animations
- Loading spinners during operations
- Success/error messages

### **Responsive Design:**

- Works on desktop and tablet
- Columns stack on mobile
- Touch-friendly drag and drop

## 🚀 Getting Started

### **Phase 1: Foundation**

1. Set up your initial state structure
2. Create basic reducer with simple actions
3. Build static column and card components
4. Add basic card creation

### **Phase 2: Core Logic**

1. Implement drag and drop with HTML5 API
2. Add move-between-columns functionality
3. Handle drag state in reducer
4. Add visual feedback

### **Phase 3: Polish**

1. Inline editing with save/cancel
2. Delete with undo functionality
3. Reordering within columns
4. Error handling and loading states

## 🌟 Bonus Challenges

1. **Persistence**: Board state survives refresh
2. **Real-time Simulation**: Multiple users editing (fake it with setTimeout)
3. **Card Details**: Click to open modal with description, due dates
4. **Labels & Colors**: Categorize cards with colored labels
5. **Search & Filter**: Find cards across all columns
6. **Column Management**: Add, remove, rename columns
7. **Board Templates**: Save and load different board layouts
8. **Accessibility**: Full keyboard navigation and screen readers

## 🎯 Success Criteria

- ✅ Single `useReducer` manages ALL state
- ✅ Smooth drag and drop experience
- ✅ No state bugs (cards don't disappear, duplicates, etc.)
- ✅ Good UX with loading states and error handling
- ✅ Clean, maintainable reducer logic
- ✅ Handles edge cases gracefully

## 🤔 Key Learning Questions

- How do you structure state for maximum maintainability?
- When should you batch multiple state updates?
- How do you handle optimistic updates that might fail?
- What's the best way to manage temporary UI state?
- How do you make your reducer logic testable?

## ⏱️ Time Estimate

- **Basic version**: 4-6 hours
- **With polish**: 8-12 hours
- **All bonus features**: 20+ hours

## 🎉 Ready to Build?

The magic happens when you realize how `useReducer` makes complex state changes predictable and debuggable. Every drag, drop, edit, and delete becomes a clear action with a predictable state transition.

**Pro tip**: Start simple and build up complexity gradually. Get one piece working perfectly before adding the next feature.

Good luck! 🚀

---

_Remember: No external libraries allowed - this is pure React and vanilla JavaScript. The challenge is in the state management, not the dependencies!_
