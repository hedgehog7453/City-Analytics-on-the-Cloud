# COMP90024-AuzLife
This is a cloud-based web application that ran on the Unimelb research cloud, live streaming COVID-19-related tweets posted in different regions of Australia and displaying their correlations with people's age distribution, income level and education level in these regions. 


## Contributors
#### Team 46
<table>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/50853412?v=4" alt="xhyhahaha" style="height: 100px; width:100px; text-align: center;"/></td>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/12579999?v=4" alt="hedgehog7453" style="height: 100px; width:100px;"/></td>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/42616793?v=4" alt="lllrq" style="height: 100px; width:100px; text-align: center;"/></td>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/21354631?v=4" alt="Eva2333" style="height: 100px; width:100px; text-align: center;"/></td>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/47969074?v=4" alt="Lemonnnm" style="height: 100px; width:100px; text-align: center;"/></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/xhyhahaha">Haoyue Xie<br>@xhyhahaha</a></td>
    <td align="center"><a href="https://github.com/hedgehog7453">Jiayu Li<br>@hedgehog7453</a></td>
    <td align="center"><a href="https://github.com/lllrq">Ruqi Li<br>@lllrq</a></td>
    <td align="center"><a href="https://github.com/Eva2333">Yi Zhang<br>@Eva2333</a></td>
    <td align="center"><a href="https://github.com/Lemonnnm">Zimeng Jia<br>@Lemonnnm</a></td>
  </tr>
</table>
in alphabetical order.


## System Architecture
<img src="https://user-images.githubusercontent.com/12579999/134524544-a8339513-507f-4696-8d8c-4694c0a2b03e.png" style="height: 900px"/>
<br>


## Tweets harvesting
A Python script is written to harvest Tweets with the use of [Tweepy](https://www.tweepy.org/). The source code of the harvesting script can be found [here](https://github.com/hedgehog7453/City-Analytics-on-the-Cloud/tree/master/TwitterStreaming). 

Four twitter APIs run concurrently and are managed within a thread pool. One of thread streams for real-time tweets and add the user ID to job list, while each of the remaining threads processes the user's profile and tweets history to extract their location info and tweets.

<img src="https://user-images.githubusercontent.com/12579999/134524451-b8559033-63fc-4aba-ba82-4cdcaedfaf39.png" style="height: 500px"/>
<em>The tweets harvesting workflow</em>


## AURIN data harvesting
TODO


## Data management
The harvested data is saved and managed with [Apache CouchDB](http://couchdb.apache.org/).

TODO


## Web
The web application is developed using [AngularJS](https://angularjs.org/), [Express](https://expressjs.com/) and [Node.js](https://nodejs.org/en/).

The data is displayed on a map that can either show 14 parts by major cities and their surrounding areas or the states and territories of Australia. 

<img src="https://user-images.githubusercontent.com/12579999/134520793-6eddbcb2-5d49-4f7f-b3c2-c0137790aaeb.png" style="height: 500px"/>
<em>Number of COVID-19-related tweets shown on a map</em>


## Deployment
TODO


## Misc
A video presentation and demo can be found [here](https://www.youtube.com/watch?v=lmMhspWoUi0).


## Links (expired)
[Web Server]

172.26.132.39 


[CouchDB Cluster]

172.26.130.67 

172.26.134.71 

172.26.131.147 


[Master Node]

172.26.131.147 
