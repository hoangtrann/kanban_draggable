Disable DragDrop/Sorting In Specific Kanban View
================================================
 To disable drag drop record between columns add:
 
  disable_drag_drop_record="true" into the <kanban> tag.

 To disable drag drop and sorting records add :

  disable_sort_record="true" into the <kanban> tag.
  
 To disable sorting columns add :

  disable_sort_column="true" into the <kanban> tag.

 Example: 
 
  ```
  <kanban disable_sort_column='true' disable_sort_record='true' disable_drag_drop_record='true'>
        
   ...

   ...
        
  </kanban>
  ```

