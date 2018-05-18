$(document).ready(()=>{

   $('.close-alert').click(()=>{
       $('.alert').alert('close');
   });

   $('.alert').on('close.bs.alert',()=>{
       console.log("close event");
   });
   $('.alert').on('closed.bs.alert',()=>{
       console.log("closed event");
   });
});