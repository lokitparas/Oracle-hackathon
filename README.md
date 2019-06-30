# Oracle-hackathon

**Algorithm Analyzer in OTM**

Problem Statement:
When we as developers are trying to figure out OTM (Oracle Transportation Management) planning issues, we are often going through OTM logs most tediously in order to try to understand the sequence of events and decisions that happen during a particular algorithm.  We've had attempts in the past to make this easier to understand; one big success has been the development of Diagnostics, in which the diagnostics data is generated in a rational way, then processed into a logical representation of the sequence of events and decisions in the bulk plan, and then presented in useful visual ways.

However, the Diagnostics provides diagnostic information for the bulk plan as a whole, and doesn't provide easily understood algorithm-specific analysis.  It would be certainly useful if there were a tool that would provide analysis and visualization for specific algorithms within Planning.

Therefore our Algorithm Analyzer solves this problem. We can now easily do a detailed analysis of what goes on inside any particular bulkplan algorithm using which developers can now easily debug for any anomaly inside the algorithm. 

“For example, consider our standard multi-stop algorithm (Concurrent Savings).  The input is a set of shipments which are to be consolidated.  Basically, the algorithm computes a Savings Matrix showing the potential savings for each possible pair, then chooses the pair with the greatest savings, combines this pair into a new shipment, and then updates the Savings Matrix with the new combined shipment, and repeats.  When we are trying to understand what is going on in the algorithm, and all we have is the log file, it is very tedious to figure out how things are being combined.  Usually this involves sketching a savings matrix on paper and filling it in based on the log statements, and writing down which shipments have merged etc.”
