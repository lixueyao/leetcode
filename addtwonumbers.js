function listNode (val, next = null) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}


function arrToLinkList (arr, start) {
	if (start === arr.length) return null;

	let node = new listNode(arr[start], null);
	let res = arrToLinkList(arr, start + 1);
	node.next = res;
	return node;
}

let arr = [1, 3, 5];
const l1 = arrToLinkList(arr, 0);
console.log('l1===', l1);

function arrToLinkList2 (arr) {
	let head = null;
	let pre = head;
	for (let i = 0; i < arr.length; i++) {
		let node = new listNode(arr[i], null);
		if (!head) head = pre =node;
		pre.next = node;
		pre = node;
	}

	return head;
}

let arr2 = [4, 6, 8];
const l2 = arrToLinkList2(arr2);
console.log('l2', l2);

function addTwoNumbers (l1, l2) {
	if (l1 === null) return l2;
	if (l2 === null) return l1;

	let carry = 0;
	let head = null;
	let tail = null;
	while (l1 || l2) {
		let p = l1 ? l1.val : 0;
		let q = l2 ? l2.val : 0;
		let sum = p + q + carry;	
		if (!head) {
			head = tail = new listNode(sum % 10); 
		} else {
			tail.next = new listNode(sum % 10);
			tail = tail.next;
		}
		carry = Math.floor(sum / 10);
		
		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}
	if (carry > 0) {
		const hNode = new listNode(carry);
		tail.next = hNode;
	}

	return head;
}

let resLinkList = addTwoNumbers(l1, l2);

while(resLinkList) {
	console.log(resLinkList.val);
	resLinkList = resLinkList.next;
}