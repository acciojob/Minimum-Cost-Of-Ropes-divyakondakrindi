function calculateMinCost() {
  //your code here
	let input = document.querySelector("input").value;
	const array = input.split(",");
	for(let i =0; i< array.length; i++){
		array[i] = +array[i];
	}
	let res = document.querySelector("#res");
	result.innerHTML = minCost(array);


	function minCost() {
		 let heap = array;
  let cost = 0;
  while (heap.length > 1) {
    heap = heap.sort((a, b) => a - b); // sort the ropes in increasing order
    let [rope1, rope2, ...rest] = heap; // get the two shortest ropes
    let connectedRope = rope1 + rope2; // connect the ropes
    cost += connectedRope; // add the cost of connecting the ropes to the total cost
    heap = [...rest, connectedRope]; // add the connected rope back to the heap
  }
  return cost;
	}
	
  
  
  
}  
