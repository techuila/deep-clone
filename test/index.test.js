const { describe, it } = require('mocha');
const { expect } = require('chai');
const clone = require('..');

Object.prototype.clone = clone;

describe('Cloned object should not be updated when orig obj changes (int|string|boolean|array)', () => {
	it('Nested Level: 1', (done) => {
		const obj = {
			name: 'john',
			age: 1,
			isMarried: true,
			children: [{ name: 'child 1' }, { name: 'child 2' }, { name: 'child 3' }],
		};

		const cloned_obj = Object.clone(obj);
		obj.name = 'doe';
		obj.age = 2;
		obj.children[1].name = 'new born child';
		obj.isMarried = false;

		expect(cloned_obj.name).to.equal('john');
		expect(cloned_obj.age).to.equal(1);
		expect(cloned_obj.children[1].name).to.equal('child 2');
		expect(cloned_obj.isMarried).to.be.true;
		done();
	});

	it('Nested Level: 2', (done) => {
		const obj = {
			name: 'john',
			stud: {
				name: 'doe',
				age: 1,
				isMarried: true,
				children: [
					{ name: 'child 1' },
					{ name: 'child 2' },
					{ name: 'child 3' },
				],
			},
			new: {
				name: 'hello',
				children: [
					{ name: 'child 1' },
					{ name: 'child 2' },
					{ name: 'child 3' },
				],
			},
		};

		const cloned_obj = Object.clone(obj);
		obj.stud.name = 'john';
		obj.stud.age = 2;
		obj.stud.children[1].name = 'new born child';
		obj.stud.isMarried = false;

		expect(cloned_obj.stud.name).to.equal('doe');
		expect(cloned_obj.stud.age).to.equal(1);
		expect(cloned_obj.stud.children[1].name).to.equal('child 2');
		expect(cloned_obj.stud.isMarried).to.be.true;
		done();
	});

	it('Nested Level: 3', (done) => {
		const obj = {
			name: 'john',
			stud: {
				name: 'doe',
				type: {
					name: 'student',
					age: 1,
					isMarried: true,
					children: [
						{ name: 'child 1' },
						{ name: 'child 2' },
						{ name: 'child 3' },
					],
				},
			},
		};

		const cloned_obj = Object.clone(obj);
		obj.stud.type.name = 'teacher';
		obj.stud.type.age = 2;
		obj.stud.type.children[1].name = 'new born child';
		obj.stud.type.isMarried = false;

		expect(cloned_obj.stud.type.name).to.equal('student');
		expect(cloned_obj.stud.type.age).to.equal(1);
		expect(cloned_obj.stud.type.children[1].name).to.equal('child 2');
		expect(cloned_obj.stud.type.isMarried).to.be.true;
		done();
	});
});
