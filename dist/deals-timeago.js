function parseWebflowDateToISO(t) { const e = t.split(" ")[0] + " " + t.split(" ")[1] + " " + t.split(" ")[2], s = new Date(e), i = t.split(" ")[3], o = parseInt(i.split(":")[0]), a = parseInt(i.split(":")[1]); return "pm" === t.split(" ")[4] ? s.setHours(o + 12, a) : s.setHours(o, a), s.toISOString() } $(function () { $(".slick-track > .deals").each(function (t, e) { const s = "div.date-of-post", i = $(e).find(s).html(), o = (parseWebflowDateToISO(i), $("<time/>").attr("datetime", i).attr("class", "timeago")); $(e).find(".posted-by-who").append("<span> </span>"), $(e).find(".posted-by-who").append(o) }), setTimeout(function () { jQuery("time.timeago").timeago() }, 1e3) });