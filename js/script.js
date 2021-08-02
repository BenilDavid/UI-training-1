let array = [
	{
		id: 1,
		imageSource: 'images/photosnap.svg',
		name: 'Photosnap',
		newTag: true,
		featuredTag: true,
		position: 'Senior Frontend Developer',
		days: '1d ago',
		workType: 'Full Time',
		workLocation: 'USA only',
		skills: ['Frontend', 'Senior', 'HTML', 'CSS', 'Javascript'],
	},
	{
		id: 2,
		imageSource: 'images/manage.svg',
		name: 'Manage',
		newTag: true,
		featuredTag: true,
		position: 'Fullstack Developer',
		days: '1d ago',
		workType: 'Part Time',
		workLocation: 'Remote',
		skills: ['Fullstack', 'Midweight', 'Python', 'React'],
	},
	{
		id: 3,
		imageSource: 'images/account.svg',
		name: 'Account',
		newTag: true,
		featuredTag: false,
		position: 'Junior Frontend Developer',
		days: '2d ago',
		workType: 'Part Time',
		workLocation: 'USA only',
		skills: ['Frontend', 'junior', 'React', 'Sass', 'Javascript'],
	},
	{
		id: 4,
		imageSource: 'images/myhome.svg',
		name: 'MyHome',
		newTag: false,
		featuredTag: false,
		position: 'Junior Frontend Developer',
		days: '5d ago',
		workType: 'Contract',
		workLocation: 'USA only',
		skills: ['Frontend', 'junior', 'CSS', 'Javascript'],
	},
	{
		id: 5,
		imageSource: 'images/loop-studios.svg',
		name: 'LoopStudios',
		newTag: false,
		featuredTag: false,
		position: 'Software Engineer',
		days: '1w ago',
		workType: 'Full Time',
		workLocation: 'Worldwide',
		skills: ['Fullstack', 'Midweight', 'Ruby', 'Sass', 'Javascript'],
	},
	{
		id: 6,
		imageSource: 'images/faceit.svg',
		name: 'FaceIt',
		newTag: false,
		featuredTag: false,
		position: 'Junior Backend Developer',
		days: '2w ago',
		workType: 'Full Time',
		workLocation: 'UK only',
		skills: ['Backend', 'junior', 'Ruby', 'RoR'],
	},
	{
		id: 7,
		imageSource: 'images/shortly.svg',
		name: 'Shortly',
		newTag: false,
		featuredTag: false,
		position: 'Junior Developer',
		days: '2w ago',
		workType: 'Full Time',
		workLocation: 'Worldwide',
		skills: ['Frontend', 'junior', 'HTML', 'Sass', 'Javascript'],
	},
	{
		id: 8,
		imageSource: 'images/insure.svg',
		name: 'Insure',
		newTag: false,
		featuredTag: false,
		position: 'Junior Frontend Developer',
		days: '2w ago',
		workType: 'Full Time',
		workLocation: 'USA only',
		skills: ['Frontend', 'junior', 'Vue', 'Javascript', 'Sass'],
	},
	{
		id: 9,
		imageSource: 'images/eyecam-co.svg',
		name: 'Eyecam Co.',
		newTag: false,
		featuredTag: false,
		position: 'Full stack Engineer',
		days: '3w ago',
		workType: 'Full Time',
		workLocation: 'Worldwide',
		skills: ['Fullstack', 'Midweight', 'Javascript', 'Django', 'Python'],
	},
	{
		id: 10,
		imageSource: 'images/the-air-filter-company.svg',
		name: 'The Air Filter Company',
		newTag: false,
		featuredTag: false,
		position: 'Frontend Dev',
		days: '1mon ago',
		workType: 'PartTime',
		workLocation: 'Worldwide',
		skills: ['Frontend', 'junior', 'React', 'Sass', 'Javascript'],
	},
];
window.onload = function () {
	renderBoxes(array);
};
function renderBoxes(arr) {
	var nodeid = document.getElementById('node-id');
	arr.map((e) => {
		//creating position-box div
		var positionBox = document.createElement('div');
		positionBox.setAttribute('class', 'position-box row');
		// placing position-box inside node-id div
		nodeid.appendChild(positionBox);
		let positionCard = `
				<div class="col-lg-1 box-left-content">
					<img class="circle" src="${e.imageSource}" alt="" />
				</div>
				<div class="col-lg-4 box-middle-content">
					<div class="top-content">
						<div class="top-name">${e.name}</div>
                        ${
													e.newTag == true
														? '<div class="top-new">NEW!</div>'
														: ''
												}
                        ${
													e.featuredTag == true
														? '<div class="top-featured">FEATURED</div>'
														: ''
												}
					</div>
					<div class="middle-content">
						<h5 class="position">${e.position}</h5>
					</div>
					<div class="bottom-content">
						<span class="days">${e.days}</span>
						<span class="point-divider"></span>
						<span class="work-time">${e.workType}</span>
						<span class="point-divider"></span>
						<span class="location">${e.workLocation}</span>
					</div>
				</div>
				<div class="col-lg-7 box-right-content">
					<div class="skills">
						${e.skills
							.map(
								(i) =>
									"<div onclick='filterTag(this)' class='skill'>" + i + '</div>'
							)
							.join(' ')}						
					</div>
				</div>`;
		positionBox.innerHTML = positionCard;
	});
}

function clearme() {
	renderBoxes(array);
	// remove tag from filter box when clicked again
	const rmTag = document.querySelectorAll('.content');
	for (var i = 0; i < rmTag.length; i++) {
		rmTag[i].parentElement.style.display = 'none';
		console.log(rmTag[i].parentElement);
	}
	var allskills = document.querySelectorAll('.skill');
	for (var i = 0; i < allskills.length; i++) {
		// highlightTagToggle(allskills[i]);
		// console.log(allskills[i]);
		allskills[i].style.backgroundColor = '#f0fafb';
		allskills[i].style.color = '#64babb';
	}
}
// this array contains all objects that is filtered(POSITION BOX)
var filteredTags = [];
// this array contains all skills that are selected
var selectedTagNameList = [];
// executes when clicking skill tag, tagValue = skill that is clicked
function filterTag(tagValue) {
	selectedTagNameList.push(tagValue.textContent);

	// ------------ hiding all position boxes -------------
	var posBox = document.querySelectorAll('.position-box');
	posBox.forEach((box) => {
		box.style.display = 'none';
	});
	// -----------------------------------------
	console.log(tagValue);
	// show filter Box
	showFilterBox(tagValue);
	// filters the position boxes
	filterByTagName(tagValue);
	// highlights all tags that have same tagname
	highlight(tagValue);
	// highlightTagToggle(tagValue);

	// check if skill is clicked again
	count = 0;
	selectedTagNameList.forEach((tagName) => {
		// console.log(tagName);
		console.log('--------------clicked again-----------------');
		if (tagValue.textContent === tagName) {
			count++;
			console.log(count);
			// click is even
			if (count % 2 == 0) {
				removeWhenClickedAgain(tagName);
			} else {
				// click is odd
				// highlights all tags that have same tagname
				highlight(tagValue);
			}
		}
		console.log('-------------- clicked again end -----------------');
	});
}

function removeWhenClickedAgain(nameOfTag) {
	var posBox = document.querySelectorAll('.position-box');
	posBox.forEach((box) => {
		box.style.display = 'none';
	});
	// remove tag from filter box when clicked again
	const rmTag = document.querySelectorAll('.content');
	for (var i = 0; i < rmTag.length; i++) {
		if (rmTag[i].textContent === nameOfTag) {
			rmTag[i].parentElement.style.display = 'none';
			console.log(rmTag[i].parentElement);
		}
	}
	// unhighlight tags in position boxes that is removed
	if (selectedTagNameList.length > 0) {
		var allskills = document.querySelectorAll('.skill');
		selectedTagNameList.forEach((selectedTagName) => {
			for (var i = 0; i < allskills.length; i++) {
				if (allskills[i].textContent === selectedTagName) {
					// highlightTagToggle(allskills[i]);
					// console.log(allskills[i]);
					allskills[i].style.backgroundColor = '#f0fafb';
					allskills[i].style.color = '#64babb';
				}
			}
		});
	}

	// array without name that is clicked again
	const filtr = selectedTagNameList.filter((filter) => {
		return filter != nameOfTag;
	});
	console.log(filtr);
	if (filtr.length < 1) {
		renderBoxes(array);
	} else {
		var afterRemovedArray = [];
		array.map((f) => {
			var count = 0;
			for (skill of f.skills) {
				for (i = 0; i < filtr.length; i++) {
					if (filtr[i] === skill) {
						count = count + 1;
						if (count === filtr.length) {
							afterRemovedArray.push(f);
						}
					}
				}
			}
		});
		renderBoxes(afterRemovedArray);
		console.log(afterRemovedArray);
		selectedTagNameList = filtr;

		var allskills = document.querySelectorAll('.skill');
		filtr.forEach((selectedTagName) => {
			for (var i = 0; i < allskills.length; i++) {
				if (allskills[i].textContent === selectedTagName) {
					// highlightTagToggle(allskills[i]);
					// console.log(allskills[i]);
					allskills[i].style.backgroundColor = '#64babb';
					allskills[i].style.color = '#fff';
				}
			}
		});
	}
}

// remove from filter box
function removeTag(val) {
	// hiding all position boxes
	var posBox = document.querySelectorAll('.position-box');
	posBox.forEach((box) => {
		box.style.display = 'none';
	});

	// remove tag from filter box
	val.parentElement.style.display = 'none';
	removedTagName = val.parentElement.textContent;

	// splice the specific array element that is removed from selectedTagNameList
	for (var i = 0; i < selectedTagNameList.length; i++) {
		console.log(selectedTagNameList[i]);
		if (selectedTagNameList[i] === removedTagName) {
			console.log(selectedTagNameList[i]);
			selectedTagNameList.splice(i, 1);
		}
	}

	// filter array after removing array of object without removed tag name
	var afterRemovedArray = [];
	array.map((f) => {
		var count = 0;
		for (skill of f.skills) {
			for (i = 0; i < selectedTagNameList.length; i++) {
				if (selectedTagNameList[i] === skill) {
					count = count + 1;
					if (count === selectedTagNameList.length) {
						afterRemovedArray.push(f);
					}
				}
			}
		}
	});
	renderBoxes(afterRemovedArray);
	// console.log(afterRemovedArray);

	// unhighlight tags in position boxes that is removed
	if (selectedTagNameList.length > 0) {
		var allskills = document.querySelectorAll('.skill');
		selectedTagNameList.forEach((selectedTagName) => {
			for (var i = 0; i < allskills.length; i++) {
				if (allskills[i].textContent === selectedTagName) {
					highlightTagToggle(allskills[i]);
				}
			}
		});
	}
	if (selectedTagNameList.length === 0) {
		renderBoxes(array);
	}
}

function highlight(value) {
	// console.log('------------------------------------');
	filteredTagName = value.textContent;
	var allskills = document.querySelectorAll('.skill');
	selectedTagNameList.forEach((selectedTagName) => {
		for (var i = 0; i < allskills.length; i++) {
			if (allskills[i].textContent === selectedTagName) {
				// allskills[i].style.backgroundColor = '#64babb';
				// allskills[i].style.color = '#fff';
				// console.log(allskills[i]);
				highlightTagToggle(allskills[i]);
			}
		}
	});
	// console.log('------------------------------------');
}

// function clickedAgain(tagValue) {}
//  toggling highlight of skill tags
function highlightTagToggle(tagValue) {
	if (
		tagValue.style.backgroundColor == '#64babb' &&
		tagValue.style.color == '#fff'
	) {
		//unhighligted
		console.log('unhighlited');
		tagValue.style.backgroundColor == '#f0fafb';
		tagValue.style.color = '#64babb';
	} else {
		//highlited
		tagValue.style.backgroundColor = '#64babb';
		tagValue.style.color = '#fff';
	}
}
filterboxTags = [];
// show filter-box div and its contents
function showFilterBox(tagValue) {
	// var filterBox = document.getElementById('filter-box');
	// var filterTags = document.querySelector('.filter-tags');
	// filterBox.style.display = 'grid';
	// filterboxTags = selectedTagNameList;
	// var duplicateNameRemoved = removeusingSet(selectedTagNameList);
	// duplicateNameRemoved.forEach((tagname) => {
	// 	console.log(tagname);
	// 	var tag = document.createElement('span');
	// 	tag.setAttribute('class', 'tag');
	// 	const filtertag = `
	// 						<span class="content">${tagValue.textContent}</span>
	// 						<span class="rm-lnk" onclick="removeTag(this)">
	// 						<img src="./images/icon-remove.svg">
	// 						</span>`;
	// 	tag.innerHTML = filtertag;
	// 	filterTags.appendChild(tag);
	// });

	var filterBox = document.getElementById('filter-box');
	var filterTags = document.querySelector('.filter-tags');

	var tag = document.createElement('span');
	var content = document.createElement('span');
	var rmLink = document.createElement('span');
	var removeSvg = document.createElement('img');
	tag.setAttribute('class', 'tag');
	content.setAttribute('class', 'content');
	rmLink.setAttribute('class', 'rm-lnk');
	rmLink.setAttribute('onclick', 'removeTag(this)');
	removeSvg.setAttribute('src', './images/icon-remove.svg');
	filterTags.appendChild(tag);
	tag.appendChild(content);
	rmLink.appendChild(removeSvg);
	tag.appendChild(rmLink);
	filterBox.style.display = 'grid';
	content.textContent = tagValue.textContent;
}

// remove duplicate array elements
function removeusingSet(arr) {
	let outputArray = Array.from(new Set(arr));
	return outputArray;
}

// filtering array based on selected tag name
function filterByTagName(tagValue) {
	const tempArray = [];
	if (filteredTags.length > 0) {
		filteredTags.map((a) => {
			for (skill of a.skills) {
				if (tagValue.textContent === skill) {
					tempArray.push(a);
				}
			}
		});
	} else {
		array.map((a) => {
			for (skill of a.skills) {
				if (tagValue.textContent === skill) {
					tempArray.push(a);
				}
			}
		});
	}
	filteredTags = tempArray;
	// console.log(filteredTags);
	var filteredDuplicateRemoved = removeusingSet(filteredTags);
	renderBoxes(filteredDuplicateRemoved);
	// console.log('filteredDuplicateRemoved', filteredDuplicateRemoved);
}
