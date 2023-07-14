let event_dates_list = '{"event_dates":[{"event_name":"mcsls", "event_date":"2023-07-21", "otherdesc_begin":"", "otherdesc_after":"" }, {"event_name":"product_event", "event_date":"", "otherdesc_begin":"Unavaliable", "otherdesc_after":"" }, {"event_name":"misc_event", "event_date":"2023-06-02", "otherdesc_begin":"To be announced", "otherdesc_after":"" }]}';
// {"event_name":"event_name", "event_date":"YYYY-MM-DD", "otherdesc_begin":"To be announced", "otherdesc_after":"" }
// Not specifying days will not be shown, thanks to the artificial addition of auto checks.
// There is a magic. If one event does not have any specified date, once typed "To be announced"
// to the beginning of the description (otherdesc_begin) the date will not be shown or written.
// Event date shown: year:'numeric', month:'long', day: 'numeric'
