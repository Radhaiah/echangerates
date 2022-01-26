document.body.innerHTML = `<div class="heading-container">
<h1>Exchange Rates</h1>
<img src="https://tse2.mm.bing.net/th?id=OIP.Bg0bVfGiiSl0TW2-C0EFDwHaEw&pid=Api&P=0&w=255&h=164" alt="brew" class="icon" width="200px" height="100px" />
</div>

<div id="mainContainer" class="main-container">
<table id="table1" border="1" cellspacing="1" cellpadding="5">
<tr>
<tr>
  <th>Date</th>
  <th>Base</th>
  <th>MOTD:url & Mesg </th></tr>
  <tr>
<td><h4 id="date"></h4></td>
<td><h4 id="base"></h4></td>
<td><h4 id="motd"></h4></td>
</table>
<table id="table" border="1" cellspacing="1" cellpadding="5">
<tr>
  <th>NAME</th>
  <th>Rate</th></tr>
  <tr> 
</div>
`;

const getData = async () => {
  try {
    const data = await fetch("https://api.exchangerate.host/latest");
    const exchangerate = await data.json();
    date.innerHTML=exchangerate.date;
    base.innerHTML=exchangerate.base;
    motd.innerHTML=`url -${exchangerate.motd.url}<br>
    msg -${exchangerate.motd.msg}`;

    for(var obj in exchangerate) {
      if(obj=="rates"){
        for(var rate in exchangerate[obj]){
      displayData(rate,exchangerate[obj][rate]);
    }
      }
    };
  } catch (error) {
    console.log(error);
  }
};

getData();
const displayData = (rates,rate) => {
  // console.log(j);
  table.innerHTML += `
  
  <td>${rates}</td>
  <td>${rate}</td>
  </tr>
  </table>
  `;
};
