// Division Section select
function divisionsList() {
	// get value from division lists
	var diviList = document.getElementById('divisions').value;

	// set barishal division districts
	if(diviList == 'ঢাকা') {
		var disctList = '<option disabled value="" value=""selected>জেলা</option><option value="ফরিদপুর">ফরিদপুর</option><option value="ঢাকা">ঢাকা</option><option value="নরসিংদী">নরসিংদী</option><option value="গাজীপুর">গাজীপুর</option><option value="শরীয়তপুর">শরীয়তপুর</option><option value="নারায়ণগঞ্জ">নারায়ণগঞ্জ</option><option value="কিশোরগঞ্জ">কিশোরগঞ্জ</option><option value="মানিকগঞ্জ">মানিকগঞ্জ</option><option value="মুন্সিগঞ্জ">মুন্সিগঞ্জ</option><option value="গোপালগঞ্জ">গোপালগঞ্জ</option><option value="টাঙ্গাইল">টাঙ্গাইল</option><option value="রাজবাড়ী">রাজবাড়ী</option><option value="মাদারীপুর">মাদারীপুর</option>';
	}
	else if(diviList == 'বরিশাল'){		
		var disctList = '<option disabled value="" selected>জেলা</option><option value="বরগুনা">বরগুনা</option><option value="বরিশাল">বরিশাল</option><option value="ভোলা">ভোলা</option><option value="ঝালকাঠি">ঝালকাঠি</option><option value="পটুয়াখালী">পটুয়াখালী</option><option value="পিরোজপুর">পিরোজপুর</option>';
	}
	else if(diviList == 'সিলেট') {
		var disctList = '<option disabled value="" selected>জেলা</option><option value="মৌলভীবাজার">মৌলভীবাজার</option><option value="সিলেট">সিলেট</option><option value="হবিগঞ্জ">হবিগঞ্জ</option><option value="সুনামগঞ্জ">সুনামগঞ্জ</option>';
	}
	else if(diviList == 'চট্টগ্রাম') {
		var disctList = '<option disabled value="" selected>জেলা</option><option value="কুমিল্লা">কুমিল্লা</option><option value="চট্টগ্রাম">চট্টগ্রাম</option><option value="ফেনী">ফেনী</option><option value="ব্রাহ্মণবাড়িয়া">ব্রাহ্মণবাড়িয়া</option><option value="রাঙ্গামাটি">রাঙ্গামাটি</option><option value="নোয়াখালী">নোয়াখালী</option><option value="চাঁদপুর">চাঁদপুর</option><option value="লক্ষ্মীপুর">লক্ষ্মীপুর</option><option value="কক্সবাজার">কক্সবাজার</option><option value="বান্দরবান">বান্দরবান</option><option value="খাগড়াছড়ি">খাগড়াছড়ি</option>';	
	}
	else if(diviList == 'রাজশাহী') {
		var disctList = '<option disabled value="" selected>জেলা</option><option value="বগুড়া">বগুড়া</option><option value="রাজশাহী">রাজশাহী</option><option value="পাবনা">পাবনা</option><option value="সিরাজগঞ্জ">সিরাজগঞ্জ</option><option value="নাটোর">নাটোর</option><option value="জয়পুরহাট">জয়পুরহাট</option><option value="নওগাঁ">নওগাঁ</option><option value="চাঁপাইনবাবগঞ্জ">চাঁপাইনবাবগঞ্জ</option>';
	}
	else if(diviList == 'খুলনা') {
		var disctList = '<option disabled value="" selected>জেলা</option><option value="যশোর">যশোর</option><option value="খুলনা">খুলনা</option><option value="সাতক্ষীরা">সাতক্ষীরা</option><option value="মেহেরপুর">মেহেরপুর</option><option value="নড়াইল">নড়াইল</option><option value="চুয়াডাঙ্গা">চুয়াডাঙ্গা</option><option value="কুষ্টিয়া">কুষ্টিয়া</option><option value="মাগুরা">মাগুরা</option><option value="বাগেরহাট">বাগেরহাট</option><option value="ঝিনাইদহ">ঝিনাইদহ</option>';
	}
	else if(diviList == 'রংপুর') {
		var disctList = '<option disabled value="" selected>জেলা</option><option value="দিনাজপুর">দিনাজপুর</option><option value="রংপুর">রংপুর</option><option value="পঞ্চগড়">পঞ্চগড়</option><option value="লালমনিরহাট">লালমনিরহাট</option><option value="নীলফামারী">নীলফামারী</option><option value="গাইবান্ধা">গাইবান্ধা</option><option value="কুড়িগ্রাম">কুড়িগ্রাম</option><option value="ঠাকুরগাঁও">ঠাকুরগাঁও</option>';
	}
	else if(diviList == 'ময়মনসিংহ') {
		var disctList = '<option disabled value="" selected>জেলা</option><option value="শেরপুর">শেরপুর</option><option value="ময়মনসিংহ">ময়মনসিংহ</option><option value="জামালপুর">জামালপুর</option><option value="নেত্রকোণা">নেত্রকোণা</option>';
	}

	//  set/send districts name to District lists from division
	document.getElementById("distr").innerHTML= disctList;
}

// Thana Section select
function thanaList(){
	var DisList = document.getElementById('distr').value;
	if(DisList == 'বরগুনা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="আমতলী">আমতলী</option><option value="বরগুনা সদর">বরগুনা সদর</option><option value="বেতাগী">বেতাগী</option><option value="বামনা">বামনা</option><option value="তালতলি">তালতলি</option><option value="পাথরঘাটা">পাথরঘাটা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'বরিশাল') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="বাকেরগঞ্জ">বাকেরগঞ্জ</option><option value="বরিশাল সদর">বরিশাল সদর</option><option value="বাবুগঞ্জ">বাবুগঞ্জ</option><option value="উজিরপুর">উজিরপুর</option><option value="বানারীপাড়া">বানারীপাড়া</option><option value="গৌরনদী">গৌরনদী</option><option value="আগৈলঝাড়া">আগৈলঝাড়া</option><option value="মেহেন্দিগঞ্জ">মেহেন্দিগঞ্জ</option><option value="মুলাদী">মুলাদী</option><option value="হিজলা">হিজলা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'ভোলা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="মনপুরা">মনপুরা</option><option value="ভোলা সদর">ভোলা সদর</option><option value="বোরহান উদ্দিন">বোরহান উদ্দিন</option><option value="দৌলতখান">দৌলতখান</option><option value="তজুমদ্দিন">তজুমদ্দিন</option><option value="লালমোহন">লালমোহন</option><option value="চরফ্যাশন">চরফ্যাশন</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'ঝালকাঠি') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="নলছিটি">নলছিটি</option><option value="ঝালকাঠি সদর">ঝালকাঠি সদর</option><option value="কাঠালিয়া">কাঠালিয়া</option><option value="রাজাপুর">রাজাপুর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'পটুয়াখালী') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="বাউফল">বাউফল</option><option value="পটুয়াখালী সদর">পটুয়াখালী সদর</option><option value="দুমকি">দুমকি</option><option value="দশমিনা">দশমিনা</option><option value="কলাপাড়া">কলাপাড়া</option><option value="মির্জাগঞ্জ">মির্জাগঞ্জ</option><option value="গলাচিপা">গলাচিপা</option><option value="রাঙ্গাবালী">রাঙ্গাবালী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'পিরোজপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="নাজিরপুর">নাজিরপুর</option><option value="পিরোজপুর সদর">পিরোজপুর সদর</option><option value="কাউখালী">কাউখালী</option><option value="ভান্ডারিয়া">ভান্ডারিয়া</option><option value="মঠবাড়ীয়া">মঠবাড়ীয়া</option><option value="নেছারাবাদ">নেছারাবাদ</option><option value="ইন্দুরকানী">ইন্দুরকানী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'কুমিল্লা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="দেবিদ্বার">দেবিদ্বার</option><option value="কুমিল্লা সদর">কুমিল্লা সদর</option><option value="বরুড়া">বরুড়া</option><option value="ব্রাহ্মণপাড়া">ব্রাহ্মণপাড়া</option><option value="চান্দিনা">চান্দিনা</option><option value="চৌদ্দগ্রাম">চৌদ্দগ্রাম</option><option value="দাউদকান্দি">দাউদকান্দি</option><option value="হোমনা">হোমনা</option><option value="লাকসাম">লাকসাম</option><option value="মুরাদনগর">মুরাদনগর</option><option value="নাঙ্গলকোট">নাঙ্গলকোট</option><option value="মেঘনা">মেঘনা</option><option value="মনোহরগঞ্জ">মনোহরগঞ্জ</option><option value="সদর দক্ষিণ">সদর দক্ষিণ</option><option value="তিতাস">তিতাস</option><option value="বুড়িচং">বুড়িচং</option><option value="লালমাই">লালমাই</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'চট্টগ্রাম') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="রাঙ্গুনিয়া">রাঙ্গুনিয়া</option><option value="সীতাকুন্ড">সীতাকুন্ড</option><option value="মীরসরাই">মীরসরাই</option><option value="পটিয়া">পটিয়া</option><option value="সন্দ্বীপ">সন্দ্বীপ</option><option value="বাঁশখালী">বাঁশখালী</option><option value="বোয়ালখালী">বোয়ালখালী</option><option value="আনোয়ারা">আনোয়ারা</option><option value="চন্দনাইশ">চন্দনাইশ</option><option value="সাতকানিয়া">সাতকানিয়া</option><option value="লোহাগাড়া">লোহাগাড়া</option><option value="হাটহাজারী">হাটহাজারী</option><option value="ফটিকছড়ি">ফটিকছড়ি</option><option value="রাউজান">রাউজান</option><option value="কর্ণফুলী">কর্ণফুলী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'ফেনী') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="ছাগলনাইয়া">ছাগলনাইয়া</option><option value="ফেনী সদর">ফেনী সদর</option><option value="সোনাগাজী">সোনাগাজী</option><option value="ফুলগাজী">ফুলগাজী</option><option value="পরশুরাম">পরশুরাম</option><option value="দাগনভূঞা">দাগনভূঞা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'ব্রাহ্মণবাড়িয়া') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কসবা">কসবা</option><option value="ব্রাহ্মণবাড়িয়া সদর">ব্রাহ্মণবাড়িয়া সদর</option><option value="নাসিরনগর">নাসিরনগর</option><option value="সরাইল">সরাইল</option><option value="আশুগঞ্জ">আশুগঞ্জ</option><option value="আখাউড়া">আখাউড়া</option><option value="নবীনগর">নবীনগর</option><option value="বাঞ্ছারামপুর">বাঞ্ছারামপুর</option><option value="বিজয়নগর">বিজয়নগর</option><option value="অন্যান্য">অন্যান্য</option>'
	}
	if(DisList == 'রাঙ্গামাটি') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কাপ্তাই">কাপ্তাই</option><option value="রাঙ্গামাটি সদর">রাঙ্গামাটি সদর</option><option value="কাউখালী">কাউখালী</option><option value="বাঘাইছড়ি">বাঘাইছড়ি</option><option value="বরকল">বরকল</option><option value="লংগদু">লংগদু</option><option value="রাজস্থলী">রাজস্থলী</option><option value="বিলাইছড়ি">বিলাইছড়ি</option><option value="জুরাছড়ি">জুরাছড়ি</option><option value="নানিয়ারচর">নানিয়ারচর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'নোয়াখালী') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কোম্পানীগঞ্জ">কোম্পানীগঞ্জ</option><option value="নোয়াখালী সদর">নোয়াখালী সদর</option><option value="বেগমগঞ্জ">বেগমগঞ্জ</option><option value="হাতিয়া">হাতিয়া</option><option value="সুবর্ণচর">সুবর্ণচর</option><option value="কবিরহাট">কবিরহাট</option><option value="সেনবাগ">সেনবাগ</option><option value="চাটখিল">চাটখিল</option><option value="সোনাইমুড়ী">সোনাইমুড়ী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'চাঁদপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="মতলব">মতলব</option><option value="চাঁদপুর সদর">চাঁদপুর সদর</option><option value="হাইমচর">হাইমচর</option><option value="কচুয়া">কচুয়া</option><option value="শাহরাস্তি">শাহরাস্তি</option><option value="হাজীগঞ্জ">হাজীগঞ্জ</option><option value="ফরিদগঞ্জ">ফরিদগঞ্জ</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'লক্ষ্মীপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="রায়পুর">রায়পুর</option><option value="লক্ষ্মীপুর সদর">লক্ষ্মীপুর সদর</option><option value="কমলনগর">কমলনগর</option><option value="রামগতি">রামগতি</option><option value="রামগঞ্জ">রামগঞ্জ</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'কক্সবাজার') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="চকরিয়া">চকরিয়া</option><option value="কক্সবাজার সদর">কক্সবাজার সদর</option><option value="কুতুবদিয়া">কুতুবদিয়া</option><option value="উখিয়া">উখিয়া</option><option value="মহেশখালী">মহেশখালী</option><option value="পেকুয়া">পেকুয়া</option><option value="রামু">রামু</option><option value="টেকনাফ">টেকনাফ</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'খাগড়াছড়ি') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="মাটিরাঙ্গা">মাটিরাঙ্গা</option><option value="খাগড়াছড়ি সদর">খাগড়াছড়ি সদর</option><option value="দিঘীনালা">দিঘীনালা</option><option value="পানছড়ি">পানছড়ি</option><option value="লক্ষীছড়ি">লক্ষীছড়ি</option><option value="মহালছড়ি">মহালছড়ি</option><option value="মানিকছড়ি">মানিকছড়ি</option><option value="রামগড়">রামগড়</option><option value="গুইমারা">গুইমারা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'বান্দরবান') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="থানচি">থানচি</option><option value="বান্দরবান সদর">বান্দরবান সদর</option><option value="আলীকদম">আলীকদম</option><option value="নাইক্ষ্যংছড়ি">নাইক্ষ্যংছড়ি</option><option value="রোয়াংছড়ি">রোয়াংছড়ি</option><option value="লামা">লামা</option><option value="রুমা">রুমা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'ঢাকা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="সাভার">সাভার</option><option value="ধামরাই">ধামরাই</option><option value="কেরাণীগঞ্জ">কেরাণীগঞ্জ</option><option value="দোহার">দোহার</option><option value="নবাবগঞ্জ">নবাবগঞ্জ</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'ফরিদপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="আলফাডাঙ্গা">আলফাডাঙ্গা</option><option value="ফরিদপুর সদর">ফরিদপুর সদর</option><option value="বোয়ালমারী">বোয়ালমারী</option><option value="সদরপুর">সদরপুর</option><option value="নগরকান্দা">নগরকান্দা</option><option value="ভাঙ্গা">ভাঙ্গা</option><option value="চরভদ্রাসন">চরভদ্রাসন</option><option value="মধুখালী">মধুখালী</option><option value="সালথা">সালথা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'নরসিংদী') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="বেলাবো">বেলাবো</option><option value="নরসিংদী সদর">নরসিংদী সদর</option><option value="মনোহরদী">মনোহরদী</option><option value="পলাশ">পলাশ</option><option value="রায়পুরা">রায়পুরা</option><option value="শিবপুর">শিবপুর</option<option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'গাজীপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কালীগঞ্জ">কালীগঞ্জ</option><option value="গাজীপুর সদর">গাজীপুর সদর</option><option value="কালিয়াকৈর">কালিয়াকৈর</option><option value="কাপাসিয়া">কাপাসিয়া</option><option value="শ্রীপুর">শ্রীপুর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'শরীয়তপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="নড়িয়া">নড়িয়া</option><option value="শরিয়তপুর সদর">শরিয়তপুর সদর</option><option value="জাজিরা">জাজিরা</option><option value="গোসাইরহাট">গোসাইরহাট</option><option value="ভেদরগঞ্জ">ভেদরগঞ্জ</option><option value="ডামুড্যা">ডামুড্যা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'নারায়ণগঞ্জ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="বন্দর">বন্দর</option><option value="নারায়নগঞ্জ সদর">নারায়নগঞ্জ সদর</option><option value="আড়াইহাজার">আড়াইহাজার</option><option value="রূপগঞ্জ">রূপগঞ্জ</option><option value="সোনারগাঁ">সোনারগাঁ</option><option value="Melandaha">Melandaha</option><option value="Sarishabari">Sarishabari</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'কিশোরগঞ্জ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="ভৈরব">ভৈরব</option><option value="কিশোরগঞ্জ সদর">কিশোরগঞ্জ সদর</option><option value="ইটনা">ইটনা</option><option value="কটিয়াদী">কটিয়াদী</option><option value="তাড়াইল">তাড়াইল</option><option value="হোসেনপুর">হোসেনপুর</option><option value="পাকুন্দিয়া">পাকুন্দিয়া</option><option value="কুলিয়ারচর">কুলিয়ারচর</option><option value="করিমগঞ্জ">করিমগঞ্জ</option><option value="বাজিতপুর">বাজিতপুর</option><option value="অষ্টগ্রাম">অষ্টগ্রাম</option><option value="মিঠামইন">মিঠামইন</option><option value="নিকলী">নিকলী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'মানিকগঞ্জ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="হরিরামপুর">হরিরামপুর</option><option value="মানিকগঞ্জ সদর">মানিকগঞ্জ সদর</option><option value="সাটুরিয়া">সাটুরিয়া</option><option value="ঘিওর">ঘিওর</option><option value="সিংগাইর">সিংগাইর</option><option value="শিবালয়">শিবালয়</option><option value="দৌলতপুর">দৌলতপুর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'মুন্সিগঞ্জ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="শ্রীনগর">শ্রীনগর</option><option value="মুন্সিগঞ্জ সদর">মুন্সিগঞ্জ সদর</option><option value="সিরাজদিখান">সিরাজদিখান</option><option value="লৌহজং">লৌহজং</option><option value="গজারিয়া">গজারিয়া</option><option value="টংগীবাড়ি">টংগীবাড়ি</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'গোপালগঞ্জ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="টুংগীপাড়া">টুংগীপাড়া</option><option value="গোপালগঞ্জ সদর">গোপালগঞ্জ সদর</option><option value="কাশিয়ানী">কাশিয়ানী</option><option value="কোটালীপাড়া">কোটালীপাড়া</option><option value="মুকসুদপুর">মুকসুদপুর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'টাঙ্গাইল') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="মির্জাপুর">মির্জাপুর</option><option value="টাঙ্গাইল সদর">টাঙ্গাইল সদর</option><option value="বাসাইল">বাসাইল</option><option value="ভুয়াপুর">ভুয়াপুর</option><option value="দেলদুয়ার">দেলদুয়ার</option><option value="ঘাটাইল">ঘাটাইল</option><option value="গোপালপুর">গোপালপুর</option><option value="মধুপুর">মধুপুর</option><option value="নাগরপুর">নাগরপুর</option><option value="সখিপুর">সখিপুর</option><option value="কালিহাতী">কালিহাতী</option><option value="ধনবাড়ী">ধনবাড়ী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'রাজবাড়ী') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="গোয়ালন্দ">গোয়ালন্দ</option><option value="রাজবাড়ী সদর">রাজবাড়ী সদর</option><option value="পাংশা">পাংশা</option><option value="বালিয়াকান্দি">বালিয়াকান্দি</option><option value="কালুখালী">কালুখালী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'মাদারীপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="শিবচর">শিবচর</option><option value="মাদারীপুর সদর">মাদারীপুর সদর</option><option value="কালকিনি">কালকিনি</option><option value="রাজৈর">রাজৈর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'খুলনা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="পাইকগাছা">পাইকগাছা</option><option value="ফুলতলা">ফুলতলা</option><option value="দিঘলিয়া">দিঘলিয়া</option><option value="রূপসা">রূপসা</option><option value="তেরখাদা">তেরখাদা</option><option value="ডুমুরিয়া">ডুমুরিয়া</option><option value="বটিয়াঘাটা">বটিয়াঘাটা</option><option value="দাকোপ">দাকোপ</option><option value="কয়রা">কয়রা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'যশোর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="মণিরামপুর">মণিরামপুর</option><option value="যশোর সদর">যশোর সদর</option><option value="অভয়নগর">অভয়নগর</option><option value="বাঘারপাড়া">বাঘারপাড়া</option><option value="চৌগাছা">চৌগাছা</option><option value="ঝিকরগাছা">ঝিকরগাছা</option><option value="কেশবপুর">কেশবপুর</option><option value="শার্শা">শার্শা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'সাতক্ষীরা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="আশাশুনি">আশাশুনি</option><option value="সাতক্ষীরা সদর">সাতক্ষীরা সদর</option><option value="দেবহাটা">দেবহাটা</option><option value="কলারোয়া">কলারোয়া</option><option value="শ্যামনগর">শ্যামনগর</option><option value="তালা">তালা</option><option value="কালিগঞ্জ">কালিগঞ্জ</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'মেহেরপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="মুজিবনগর">মুজিবনগর</option><option value="মেহেরপুর সদর">মেহেরপুর সদর</option><option value="গাংনী">গাংনী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'নড়াইল') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="লোহাগড়া">লোহাগড়া</option><option value="নড়াইল সদর">নড়াইল সদর</option><option value="কালিয়া">কালিয়া</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'চুয়াডাঙ্গা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="আলমডাঙ্গা">আলমডাঙ্গা</option><option value="চুয়াডাঙ্গা সদর">চুয়াডাঙ্গা সদর</option><option value="দামুড়হুদা">দামুড়হুদা</option><option value="জীবননগর">জীবননগর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'কুষ্টিয়া') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="ভেড়ামারা">ভেড়ামারা</option><option value="কুষ্টিয়া সদর">কুষ্টিয়া সদর</option><option value="কুমারখালী">কুমারখালী</option><option value="খোকসা">খোকসা</option><option value="মিরপুর">মিরপুর</option><option value="দৌলতপুর">দৌলতপুর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'মাগুরা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="শালিখা">শালিখা</option><option value="মাগুরা সদর">মাগুরা সদর</option><option value="শ্রীপুর">শ্রীপুর</option><option value="মহম্মদপুর">মহম্মদপুর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'বাগেরহাট') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="ফকিরহাট">ফকিরহাট</option><option value="বাগেরহাট সদর">বাগেরহাট সদর</option><option value="মোল্লাহাট">মোল্লাহাট</option><option value="শরণখোলা">শরণখোলা</option><option value="রামপাল">রামপাল</option><option value="মোড়েলগঞ্জ">মোড়েলগঞ্জ</option><option value="কচুয়া">কচুয়া</option><option value="মোংলা">মোংলা</option><option value="চিতলমারী">চিতলমারী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'ঝিনাইদহ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কালীগঞ্জ">কালীগঞ্জ</option><option value="ঝিনাইদহ সদর">ঝিনাইদহ সদর</option><option value="শৈলকুপা">শৈলকুপা</option><option value="হরিণাকুন্ডু">হরিণাকুন্ডু</option><option value="কোটচাঁদপুর">কোটচাঁদপুর</option><option value="মহেশপুর">মহেশপুর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'রাজশাহী') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="পবা">পবা</option><option value="দুর্গাপুর">দুর্গাপুর</option><option value="মোহনপুর">মোহনপুর</option><option value="চারঘাট">চারঘাট</option><option value="পুঠিয়া">পুঠিয়া</option><option value="বাঘা">বাঘা</option><option value="গোদাগাড়ী">গোদাগাড়ী</option><option value="তানোর">তানোর</option><option value="বাগমারা">বাগমারা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'সিরাজগঞ্জ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="বেলকুচি">বেলকুচি</option><option value="সিরাজগঞ্জ সদর">সিরাজগঞ্জ সদর</option><option value="চৌহালি">চৌহালি</option><option value="কামারখন্দ">কামারখন্দ</option><option value="কাজীপুর">কাজীপুর</option><option value="রায়গঞ্জ">রায়গঞ্জ</option><option value="শাহজাদপুর">শাহজাদপুর</option><option value="তাড়াশ">তাড়াশ</option><option value="উল্লাপাড়া">উল্লাপাড়া</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'পাবনা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="ঈশ্বরদী">ঈশ্বরদী</option><option value="পাবনা সদর">পাবনা সদর</option><option value="সুজানগর">সুজানগর</option><option value="ভাঙ্গুড়া">ভাঙ্গুড়া</option><option value="বেড়া">বেড়া</option><option value="আটঘরিয়া">আটঘরিয়া</option><option value="চাটমোহর">চাটমোহর</option><option value="সাঁথিয়া">সাঁথিয়া</option><option value="ফরিদপুর">ফরিদপুর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'বগুড়া') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কাহালু">কাহালু</option><option value="বগুড়া সদর">বগুড়া সদর</option><option value="সারিয়াকান্দি">সারিয়াকান্দি</option><option value="শাজাহানপুর">শাজাহানপুর</option><option value="দুপচাচিঁয়া">দুপচাচিঁয়া</option><option value="আদমদিঘি">আদমদিঘি</option><option value="নন্দিগ্রাম">নন্দিগ্রাম</option><option value="সোনাতলা">সোনাতলা</option><option value="ধুনট">ধুনট</option><option value="গাবতলী">গাবতলী</option><option value="শেরপুর">শেরপুর</option><option value="শিবগঞ্জ">শিবগঞ্জ</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'নাটোর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="সিংড়া">সিংড়া</option><option value="নাটোর সদর">নাটোর সদর</option><option value="বড়াইগ্রাম">বড়াইগ্রাম</option><option value="বাগাতিপাড়া">বাগাতিপাড়া</option><option value="লালপুর">লালপুর</option><option value="গুরুদাসপুর">গুরুদাসপুর</option><option value="নলডাঙ্গা">নলডাঙ্গা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'জয়পুরহাট') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="আক্কেলপুর">আক্কেলপুর</option><option value="জয়পুরহাট সদর">জয়পুরহাট সদর</option><option value="কালাই">কালাই</option><option value="ক্ষেতলাল">ক্ষেতলাল</option><option value="পাঁচবিবি">পাঁচবিবি</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'চাঁপাইনবাবগঞ্জ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="ভোলাহাট">ভোলাহাট</option><option value="চাঁপাইনবাবগঞ্জ সদর">চাঁপাইনবাবগঞ্জ সদর</option><option value="গোমস্তাপুর">গোমস্তাপুর</option><option value="নাচোল">নাচোল</option><option value="শিবগঞ্জ">শিবগঞ্জ</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'নওগাঁ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="সাপাহার">সাপাহার</option><option value="নওগাঁ সদর">নওগাঁ সদর</option><option value="মহাদেবপুর">মহাদেবপুর</option><option value="বদলগাছী">বদলগাছী</option><option value="পত্নিতলা">পত্নিতলা</option><option value="ধামইরহাট">ধামইরহাট</option><option value="নিয়ামতপুর">নিয়ামতপুর</option><option value="মান্দা">মান্দা</option><option value="আত্রাই">আত্রাই</option><option value="রাণীনগর">রাণীনগর</option><option value="পোরশা">পোরশা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'রংপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কাউনিয়া">কাউনিয়া</option><option value="রংপুর সদর">রংপুর সদর</option><option value="গংগাচড়া">গংগাচড়া</option><option value="তারাগঞ্জ">তারাগঞ্জ</option><option value="বদরগঞ্জ">বদরগঞ্জ</option><option value="মিঠাপুকুর">মিঠাপুকুর</option><option value="পীরগঞ্জ">পীরগঞ্জ</option><option value="পীরগাছা">পীরগাছা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'দিনাজপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কাহারোল">কাহারোল</option><option value="দিনাজপুর সদর">দিনাজপুর সদর</option><option value="নবাবগঞ্জ">নবাবগঞ্জ</option><option value="বীরগঞ্জ">বীরগঞ্জ</option><option value="ঘোড়াঘাট">ঘোড়াঘাট</option><option value="বিরামপুর">বিরামপুর</option><option value="পার্বতীপুর">পার্বতীপুর</option><option value="বোচাগঞ্জ">বোচাগঞ্জ</option><option value="ফুলবাড়ী">ফুলবাড়ী</option><option value="হাকিমপুর">হাকিমপুর</option><option value="খানসামা">খানসামা</option><option value="বিরল">বিরল</option><option value="চিরিরবন্দর">চিরিরবন্দর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'পঞ্চগড়') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="আটোয়ারী">আটোয়ারী</option><option value="পঞ্চগড় সদর">পঞ্চগড় সদর</option><option value="দেবীগঞ্জ">দেবীগঞ্জ</option><option value="বোদা">বোদা</option><option value="তেতুলিয়া">তেতুলিয়া</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'লালমনিরহাট') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কালীগঞ্জ">কালীগঞ্জ</option><option value="লালমনিরহাট সদর">লালমনিরহাট সদর</option><option value="হাতীবান্ধা">হাতীবান্ধা</option><option value="পাটগ্রাম">পাটগ্রাম</option><option value="আদিতমারী">আদিতমারী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'নীলফামারী') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="সৈয়দপুর">সৈয়দপুর</option><option value="নীলফামারী সদর">নীলফামারী সদর</option><option value="ডোমার">ডোমার</option><option value="ডিমলা">ডিমলা</option><option value="কিশোরগঞ্জ">কিশোরগঞ্জ</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'গাইবান্ধা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="সাদুল্লাপুর">সাদুল্লাপুর</option><option value="গাইবান্ধা সদর">গাইবান্ধা সদর</option><option value="পলাশবাড়ী">পলাশবাড়ী</option><option value="সাঘাটা">সাঘাটা</option><option value="গোবিন্দগঞ্জ">গোবিন্দগঞ্জ</option><option value="সুন্দরগঞ্জ">সুন্দরগঞ্জ</option><option value="ফুলছড়ি">ফুলছড়ি</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'ঠাকুরগাঁও') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="পীরগঞ্জ">পীরগঞ্জ</option><option value="ঠাকুরগাঁও সদর">ঠাকুরগাঁও সদর</option><option value="রাণীশংকৈল">রাণীশংকৈল</option><option value="হরিপুর">হরিপুর</option><option value="বালিয়াডাঙ্গী">বালিয়াডাঙ্গী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'কুড়িগ্রাম') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="ফুলবাড়ী">ফুলবাড়ী</option><option value="কুড়িগ্রাম সদর">কুড়িগ্রাম সদর</option><option value="নাগেশ্বরী">নাগেশ্বরী</option><option value="ভুরুঙ্গামারী">ভুরুঙ্গামারী</option><option value="রাজারহাট">রাজারহাট</option><option value="উলিপুর">উলিপুর</option><option value="চিলমারী">চিলমারী</option><option value="রৌমারী">রৌমারী</option><option value="চর রাজিবপুর">চর রাজিবপুর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'সিলেট') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কানাইঘাট">কানাইঘাট</option><option value="সিলেট সদর">সিলেট সদর</option><option value="জকিগঞ্জ">জকিগঞ্জ</option><option value="বালাগঞ্জ">বালাগঞ্জ</option><option value="ফেঞ্চুগঞ্জ">ফেঞ্চুগঞ্জ</option><option value="গোলাপগঞ্জ">গোলাপগঞ্জ</option><option value="কোম্পানীগঞ্জ">কোম্পানীগঞ্জ</option><option value="ওসমানী">ওসমানী</option><option value="বিশ্বনাথ">বিশ্বনাথ</option><option value="জৈন্তাপুর">জৈন্তাপুর</option><option value="গোয়াইনঘাট">গোয়াইনঘাট</option><option value="বিয়ানীবাজার">বিয়ানীবাজার</option><option value="দক্ষিণ সুরমা">দক্ষিণ সুরমা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'মৌলভীবাজার') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="কমলগঞ্জ">কমলগঞ্জ</option><option value="মৌলভীবাজার সদর">মৌলভীবাজার সদর</option><option value="বড়লেখা">বড়লেখা</option><option value="কুলাউড়া">কুলাউড়া</option><option value="জুড়ী">জুড়ী</option><option value="রাজনগর">রাজনগর</option><option value="শ্রীমঙ্গল">শ্রীমঙ্গল</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'হবিগঞ্জ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="আজমিরীগঞ্জ">আজমিরীগঞ্জ</option><option value="হবিগঞ্জ সদর">হবিগঞ্জ সদর</option><option value="নবীগঞ্জ">নবীগঞ্জ</option><option value="শায়েস্তাগঞ্জ">শায়েস্তাগঞ্জ</option><option value="বাহুবল">বাহুবল</option><option value="বানিয়াচং">বানিয়াচং</option><option value="লাখাই">লাখাই</option><option value="চুনারুঘাট">চুনারুঘাট</option><option value="মাধবপুর">মাধবপুর</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'সুনামগঞ্জ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="জামালগঞ্জ">জামালগঞ্জ</option><option value="সুনামগঞ্জ সদর">সুনামগঞ্জ সদর</option><option value="দক্ষিণ সুনামগঞ্জ">দক্ষিণ সুনামগঞ্জ</option><option value="বিশ্বম্ভরপুর">বিশ্বম্ভরপুর</option><option value="ছাতক">ছাতক</option><option value="জগন্নাথপুর">জগন্নাথপুর</option><option value="দোয়ারাবাজার">দোয়ারাবাজার</option><option value="তাহিরপুর">তাহিরপুর</option><option value="ধর্মপাশা">ধর্মপাশা</option><option value="শাল্লা">শাল্লা</option><option value="দিরাই">দিরাই</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'ময়মনসিংহ') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="ভালুকা">ভালুকা</option><option value="ময়মনসিংহ সদর">ময়মনসিংহ সদর</option><option value="ফুলবাড়ীয়া">ফুলবাড়ীয়া</option><option value="ত্রিশাল">ত্রিশাল</option><option value="মুক্তাগাছা">মুক্তাগাছা</option><option value="ধোবাউড়া">ধোবাউড়া</option><option value="ফুলপুর">ফুলপুর</option><option value="হালুয়াঘাট">হালুয়াঘাট</option><option value="গৌরীপুর">গৌরীপুর</option><option value="গফরগাঁও">গফরগাঁও</option><option value="ঈশ্বরগঞ্জ">ঈশ্বরগঞ্জ</option><option value="নান্দাইল">নান্দাইল</option><option value="তারাকান্দা">তারাকান্দা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'শেরপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="নালিতাবাড়ী">নালিতাবাড়ী</option><option value="শেরপুর সদর">শেরপুর সদর</option><option value="শ্রীবরদী">শ্রীবরদী</option><option value="নকলা">নকলা</option><option value="ঝিনাইগাতী">ঝিনাইগাতী</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'জামালপুর') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="মেলান্দহ">মেলান্দহ</option><option value="জামালপুর সদর">জামালপুর সদর</option><option value="ইসলামপুর">ইসলামপুর</option><option value="দেওয়ানগঞ্জ">দেওয়ানগঞ্জ</option><option value="সরিষাবাড়ী">সরিষাবাড়ী</option><option value="মাদারগঞ্জ">মাদারগঞ্জ</option><option value="বকশীগঞ্জ">বকশীগঞ্জ</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	if(DisList == 'নেত্রকোণা') {
		var thanaList = '<option disabled selected value="NULL">উপজেলা</option><option value="বারহাট্টা">বারহাট্টা</option><option value="নেত্রকোণা সদর">নেত্রকোণা সদর</option><option value="দুর্গাপুর">দুর্গাপুর</option><option value="কেন্দুয়া">কেন্দুয়া</option><option value="আটপাড়া">আটপাড়া</option><option value="মদন">মদন</option><option value="খালিয়াজুরী">খালিয়াজুরী</option><option value="কলমাকান্দা">কলমাকান্দা</option><option value="মোহনগঞ্জ">মোহনগঞ্জ</option><option value="পূর্বধলা">পূর্বধলা</option><option value="অন্যান্য">অন্যান্য</option>';
	}
	

	document.getElementById("upo").innerHTML= thanaList;
}