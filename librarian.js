{ title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
   { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf  " },
   /* Task 2 */
-  { title: "Following the Equator", year: "1897", author: "Mark Twain", publisher: "Sun-Times Media Group"}
+  { title: "Man's Search for Meaning", year: "1946", author: "Viktor Frankl", publisher: "Beacon Press" }
 ];
 
 /* Task 1 */
@@ -26,33 +26,47 @@ function addBook( book ){
   return library;
 }
 
-var newBook = {};
+var newBook = {
+  title: "Following the Equation",
+  year: "1897",
+  author: "Mark Twain",
+  publisher: "Sun-Times Media Group"
+};
+
 console.log(addBook(newBook));
 
 /* Task 4 */
 function bookByAuthor(){
   //add code
-  var sortable = [];
-  for(var key in library)
-    if(library.hasOwnProperty(key))
-      sortable.push([key, library[key]]); // each item is an array in format [key, value]
-  
-  // sort items by value
-  sortable.sort(function(a, b)
-  {
-    var x=a[1].toLowerCase(),
-      y=b[1].toLowerCase();
-    return x<y ? -1 : x>y ? 1 : 0;
-  });
-  return sortable;
+  var len = library.length;
+  var temp;
+  for(var i = 0; i <= len - 1; ++i) {
+    for (var j = 0; j <= len - 1; ++j) {
+      if(library[i].author < library[j].author) {
+        temp = library[i];
+        library[i] = library[j];
+        library[j] = temp;
+      }
+    }
+  }
+  return library;
 }
 
 console.log(bookByAuthor());
 
 /* Task 5 */
 function findByTitle( title ){
   //add code
+  var arrayFind = [];
+  var key = new RegExp(title, 'i');
+  
+  for(var i = 0; i < library.length; ++i) {
+    if(key.test(library[i].title)) {
+      arrayFind.push(library[i]);
+    }
+  }
+  return arrayFind;
 }
 
 console.log(findByTitle("man"));
-console.log(findByTitle("myth"));
+console.log(findByTitle("myth")); 