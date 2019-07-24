"use strict";
$(document).ready(function() {
	$("#fullpage").fullpage({
		loopBottom: !0,
		verticalCentered: !1
	})
});
var app = new Vue({
	el: "#app",
	template:`
		<div id="fullpage">
			<div class="section">
				<div class="wrapper">
					<div class="title-wrapper">
						<div class="title">{{currentDate}}</div>
						<div class="content">{{Map[month]+'月'+Map[day]+'日'}}</div>
						<div class="uparrow">
							<a href="javascript: $.fn.fullpage.moveSectionDown();" target="_blank" rel="noopener">
								<i class="fa fa-angle-double-up fa-2x"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="section" v-for="(item,index) in sentencesContent" :key="index">
				<div class="wrapper">
					<div class="sentence-wrapper">
						<div class="sentence" v-if="item.sentence">{{item.sentence}}</div>
						<div class="sentence" v-if="item.poem" v-for="(nasp,naspIndex) in poemArr[index]" :key="naspIndex">
							<span class="poemSentence">{{nasp}}</span>
							<br>
						</div>
						<br>
						<br v-if="item.author">
						<div class="author" v-if="item.author">-- {{item.author}} --</div>
						<br>
						<br v-if="item.time">
						<div class="time" v-if="item.time">{{item.time}}</div>
					</div>
				</div>
			</div>
		</div>
	`,
	data () {
		return {
      currentDate: '',
			month:'',
			day:'',
			titleContent: {
				title: 'Aurora'
			},
      sentencesContent: arr,
      poemArr: []
		}
	},
	mounted () {
		this.poemArr = this.sentencesContent.map(item => {
			return item.poem ? item.poem.split('/') : ''
		})
    this.currentDate = moment().format('MM/DD')
		this.month = this.currentDate.split('/')[0]
    this.day = this.currentDate.split('/')[1]
  }
});
