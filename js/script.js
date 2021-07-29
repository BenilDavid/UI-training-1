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
];

window.onload = function () {
	var nodeid = document.getElementById('node-id');
	array.map((e) => {
		// console.log(e);
		var positionBox = document.createElement('div');
		positionBox.setAttribute('class', 'position-box row');
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
													"<div onclick='filterTag(this)' class='skill'>" +
													i +
													'</div>'
											)
											.join(' ')}						
					</div>
				</div>`;
		positionBox.innerHTML = positionCard;
	});
};

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

// executes when clicking skill tag
// tagValue ==== Element that is clicked
function filterTag(tagValue) {
	// show filter-box div and its contents
	var filterBox = document.getElementById('filter-box');
	var filterTag = document.querySelector('.filter-tags');
	var tag = document.createElement('span');
	var content = document.createElement('span');
	var rmLink = document.createElement('span');
	var removeSvg = document.createElement('img');
	tag.setAttribute('class', 'tag');
	content.setAttribute('class', 'content');
	rmLink.setAttribute('class', 'rm-lnk');
	rmLink.setAttribute('onclick', 'removeTag(this)');
	removeSvg.setAttribute('src', '../images/icon-remove.svg');
	filterTag.appendChild(tag);
	tag.appendChild(content);
	rmLink.appendChild(removeSvg);
	tag.appendChild(rmLink);
	filterBox.style.display = 'grid';
	content.textContent = tagValue.textContent;

	filter(tagValue);
}

function filter(value) {
	console.log('filtering');
	filteredTagName = value.textContent;
	console.log(filteredTagName);
	var allskills = document.querySelectorAll('.skill');

	// selecting all skill element that has same tag name
	allskills.forEach((skill) => {
		var eachskillName = skill.innerHTML;
		if (eachskillName == filteredTagName) {
			console.log(skill.parentElement);
			// same tag name is highlited
			highlightTagToggle(skill);
		}
	});
}

function removeTag(val) {
	console.log('remove clicked');
	val.parentElement.style.display = 'none';
	removedTag = val.parentElement.textContent;
	var allskills = document.querySelectorAll('.skill');
	allskills.forEach((skill) => {
		// console.log(removedTag);
		var eachskill = skill.innerHTML;
		if (eachskill == removedTag) {
			console.log(skill);
			highlightTagToggle(skill);
		}
	});
}

// function filter(value) {
// 	// console.log(value);
// 	var filterValue = value.textContent;
// 	array.map((i, index) => {
// 		// console.log(filterValue);
// 		console.log(i);
// 		for (skill of i.skills) {
// 			if (filterValue == skill) {
// 				console.log(index);
// 				console.log('present in array');
// 			}
// 		}
// 	});
// }
