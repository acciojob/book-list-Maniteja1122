//your JS code here. If required.
let inputName = document.getElementById("name")
let authorInp = document.getElementById("author")
let isbninp = document.getElementById("isbn")
let btn = document.getElementById("button")
let tbody = document.querySelector("#body")
let arr =[]
console.log(btn,)
btn.addEventListener("click" , ()=>{
	let obj ={
		name : inputName.value,
		Author:authorInp.value,
		ISBN : isbninp.value
	}
	arr.push(obj)
    
		
	let tr = document.createElement("tr") 
	let title = document.createElement("td")
	let author = document.createElement("td")
	let isb = document.createElement("td")
		
		title.textContent=obj.name
		author.textContent = obj.Author
		isb.textContent = obj.ISBN

		tr.append(title);
		tr.append(author);
		tr.append(isb);
	console.log(obj);
        tbody.append(tr);
});