
module.exorts = {
   // ui : 'tdd'
   ui:'bdd',
   timeout : 2000, //timeout after 2000 ms
   slow : 150,
   reporter : 'spec',
   retries : 2 , //(last precedence testcase execution count,if it is 3 ,then it will be run for 3 times)
   'watch-files' : ['test/**/*.js']
}