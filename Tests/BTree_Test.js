/**
 * Created by Stefano on 06/04/14.
 */

test("BTree - Insert test", function () {
	var tree = new BTree(100);
	for (var i = 0; i < 100; i++)
		tree.insert(i, i);
	for (var j = 0; j < 100; j++)
		deepEqual(tree.search(j), j, "Insert node");
});

test("BTree - Delete node test", function () {
	var tree = new BTree(3);
	for (var i = 0; i < 20; i++)
		tree.insert(i, i);
	tree.deleteKey(6);
	deepEqual(tree.search(6), undefined, "Delete node 6");
});

test("BTree - Successor test", function () {
	var tree = new BTree(3);
	for (var i = 0; i < 20; i++)
		tree.insert(i, i);
	for (var j = -1; j < 19; j++)
		deepEqual(tree.successor(j), j + 1, "Successor found");
	deepEqual(tree.successor(19), null, "Successor not found");
});

test("BTree - Predecessor test", function () {
	var tree = new BTree(4);
	for (var i = 0; i < 40; i++)
		tree.insert(i, i);
	for (var j = 40; j > 0; j--)
		deepEqual(tree.predecessor(j), j - 1, "Predecessor");
	deepEqual(tree.predecessor(0), null, "Predecessor not found");
});