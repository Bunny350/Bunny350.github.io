// we are not smart
const event_date = JSON.parse(event_dates_list);
var mcsls_date_exact = new Date(event_date.event_dates[0].event_date);
let mcsls_event_year = mcsls_date_exact.getFullYear();
let ev0_date_local;
if (event_date.event_dates[0].otherdesc_begin == "To be announced") {
	ev0_date_local = "";
} else {
	let device_current_year = new Date().getFullYear();
	if (mcsls_event_year == device_current_year) {
	ev0_date_local = mcsls_date_exact.toLocaleString([],{month:'long', day:'numeric'})
	} else {
		ev0_date_local = mcsls_date_exact.toLocaleString([],{year:'numeric', month:'long', day:'numeric'})
	}
}