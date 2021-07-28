// var skills = document.querySelectorAll('.skill');
// document.querySelector('.skill').addEventListener('click', displaySkill);

// function displaySkill() {
// 	document.getElementById('demo').innerHTML = document.querySelector(
// 		'.skill'
// 	).textContent;
// }

// function display(value) {
// 	var node = document.getElementById('node-id');
// 	node.innerHTML = value;
// }

let array = [
	{
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
	array.forEach((e) => {
		var node = document.createElement('div');
		nodeid.appendChild(node);
		// if (e.newTag == true) {
		// 	var newtag = '<div class="top-new">NEW!</div>';
		// } else {
		// 	newtag = '';
		// }
		// if (e.featuredTag == true) {
		//    var posbox = document.querySelector('.position-box');
		//    posbox.style.color = "blue";
		// var featuredtag = '<div class="top-featured">FEATURED</div>';
		// }
		// else {
		// 	featuredtag = '';
		// }
		let positionCard = `
            <div class="row position-box">
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
													"<div onclick='filterTag(this.textContent)' class='skill'>" +
													i +
													'</div>'
											)
											.join(' ')}						
					</div>
				</div>
			</div>`;
		node.innerHTML = positionCard;
	});
};

function filterTag(tagValue) {
	var filterBox = document.getElementById('filter-box');
	var filterTag = document.querySelector('.filter-tags');
	var tag = document.createElement('span');
	var content = document.createElement('span');
	var rmLink = document.createElement('span');
	tag.setAttribute('class', 'tag');
	content.setAttribute('class', 'content');
	rmLink.setAttribute('class', 'rm-lnk');
	filterBox.style.display = 'grid';
	filterTag.appendChild(tag);
	tag.appendChild(content);
	tag.appendChild(rmLink);
	content.textContent = tagValue;
	rmLink.textContent = 'x';
	console.log(tagValue);
}
