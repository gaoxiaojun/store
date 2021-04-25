(window.webpackJsonp = window.webpackJsonp || []).push([["protobuf-handler"], {
    "1qYw": function (e, t) {
        e.exports = {
            package: null,
            syntax: "proto2",
            messages: [{
                name: "Msg",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "Commands",
                    name: "command_number",
                    id: 1
                }, {
                    rule: "optional",
                    type: "bytes",
                    name: "data",
                    id: 2
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 3
                }],
                enums: [{
                    name: "Commands",
                    syntax: "proto2",
                    values: [{
                        name: "chart_create_session",
                        id: 0
                    }, {
                        name: "chart_delete_session",
                        id: 1
                    }, {
                        name: "resolve_symbol",
                        id: 2
                    }, {
                        name: "create_series",
                        id: 3
                    }, {
                        name: "create_study",
                        id: 4
                    }, {
                        name: "message",
                        id: 5
                    }, {
                        name: "timescale_update",
                        id: 6
                    }, {
                        name: "du",
                        id: 7
                    }, {
                        name: "series_loading",
                        id: 8
                    }, {
                        name: "series_completed",
                        id: 9
                    }, {
                        name: "series_error",
                        id: 10
                    }, {
                        name: "series_deleted",
                        id: 11
                    }, {
                        name: "series_timeframe",
                        id: 12
                    }, {
                        name: "first_bar_time",
                        id: 13
                    }, {
                        name: "study_loading",
                        id: 14
                    }, {
                        name: "study_completed",
                        id: 15
                    }, {
                        name: "switch_timezone",
                        id: 16
                    }, {
                        name: "request_studies_metadata",
                        id: 17
                    }, {
                        name: "remove_series",
                        id: 18
                    }, {
                        name: "modify_series",
                        id: 19
                    }, {
                        name: "request_more_data",
                        id: 20
                    }, {
                        name: "get_first_bar_time",
                        id: 21
                    }, {
                        name: "create_child_study",
                        id: 22
                    }, {
                        name: "remove_study",
                        id: 23
                    }, {
                        name: "modify_study",
                        id: 24
                    }, {
                        name: "create_pointset",
                        id: 25
                    }, {
                        name: "symbol_resolved",
                        id: 26
                    }, {
                        name: "study_deleted",
                        id: 27
                    }, {
                        name: "protocol_error",
                        id: 28
                    }, {
                        name: "critical_error",
                        id: 29
                    }, {
                        name: "set_auth_token",
                        id: 30
                    }, {
                        name: "studies_metadata",
                        id: 31
                    }, {
                        name: "set_data_quality",
                        id: 32
                    }, {
                        name: "quote_create_session",
                        id: 33
                    }, {
                        name: "quote_set_fields",
                        id: 34
                    }, {
                        name: "quote_delete_session",
                        id: 35
                    }, {
                        name: "quote_add_symbols",
                        id: 36
                    }, {
                        name: "quote_remove_symbols",
                        id: 37
                    }, {
                        name: "quote_switch_timezone",
                        id: 38
                    }, {
                        name: "quote_fast_symbols",
                        id: 39
                    }, {
                        name: "quote_hibernate_all",
                        id: 40
                    }, {
                        name: "qsd",
                        id: 41
                    }, {
                        name: "quote_list_fields",
                        id: 42
                    }, {
                        name: "depth_create_session",
                        id: 43
                    }, {
                        name: "depth_delete_session",
                        id: 44
                    }, {
                        name: "depth_set_symbol",
                        id: 45
                    }, {
                        name: "depth_clear_symbol",
                        id: 46
                    }, {
                        name: "depth_set_scale",
                        id: 47
                    }, {
                        name: "depth_symbol_success",
                        id: 48
                    }, {
                        name: "depth_symbol_error",
                        id: 49
                    }, {
                        name: "depth_symbol_cleared",
                        id: 50
                    }, {
                        name: "dd",
                        id: 51
                    }, {
                        name: "depth_bar_last_value",
                        id: 52
                    }, {
                        name: "remove_pointset",
                        id: 53
                    }, {
                        name: "study_error",
                        id: 54
                    }, {
                        name: "modify_pointset",
                        id: 55
                    }, {
                        name: "switch_protocol",
                        id: 56
                    }, {
                        name: "symbol_error",
                        id: 57
                    }, {
                        name: "request_more_tickmarks",
                        id: 58
                    }, {
                        name: "tickmark_update",
                        id: 59
                    }, {
                        name: "error_message",
                        id: 60
                    }, {
                        name: "wrong_message_type",
                        id: 61
                    }, {
                        name: "mock_fire_tick",
                        id: 62
                    }, {
                        name: "pointset_error",
                        id: 63
                    }, {
                        name: "quote_fire_tick",
                        id: 64
                    }, {
                        name: "quote_fire_crash",
                        id: 65
                    }, {
                        name: "child_study_rebind",
                        id: 66
                    }, {
                        name: "replay_point",
                        id: 67
                    }, {
                        name: "replay_create_session",
                        id: 68
                    }, {
                        name: "replay_delete_session",
                        id: 69
                    }, {
                        name: "replay_add_series",
                        id: 70
                    }, {
                        name: "replay_remove_series",
                        id: 71
                    }, {
                        name: "replay_reset",
                        id: 72
                    }, {
                        name: "replay_step",
                        id: 73
                    }, {
                        name: "replay_error",
                        id: 74
                    }, {
                        name: "replay_ok",
                        id: 75
                    }, {
                        name: "replay_start",
                        id: 76
                    }, {
                        name: "replay_stop",
                        id: 77
                    }, {
                        name: "replay_resolutions",
                        id: 78
                    }, {
                        name: "replay_data_end",
                        id: 79
                    }, {
                        name: "replay_set_resolution",
                        id: 80
                    }, {
                        name: "protocol_switched",
                        id: 81
                    }, {
                        name: "replay_instance_id",
                        id: 82
                    }, {
                        name: "unsupported_resolution",
                        id: 83
                    }, {
                        name: "quote_completed",
                        id: 84
                    }, {
                        name: "set_broker",
                        id: 85
                    }]
                }]
            }, {
                name: "chart_create_session",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "parameters",
                    id: 2
                }]
            }, {
                name: "chart_delete_session",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }]
            }, {
                name: "switch_timezone",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "timezone",
                    id: 2
                }]
            }, {
                name: "request_studies_metadata",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "meta_name",
                    id: 2
                }]
            }, {
                name: "resolve_symbol",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "resolve_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 3
                }]
            }, {
                name: "symbol_error",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 2
                }, {
                    rule: "repeated",
                    type: "string",
                    name: "reason",
                    id: 3
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 4
                }]
            }, {
                name: "create_series",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "resolve_name",
                    id: 4
                }, {
                    rule: "optional",
                    type: "string",
                    name: "resolution",
                    id: 5
                }, {
                    rule: "optional",
                    type: "string",
                    name: "bars",
                    id: 6
                }, {
                    rule: "optional",
                    type: "string",
                    name: "frame",
                    id: 7
                }]
            }, {
                name: "remove_series",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }]
            }, {
                name: "modify_series",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "resolve_name",
                    id: 4
                }, {
                    rule: "optional",
                    type: "string",
                    name: "resolution",
                    id: 5
                }, {
                    rule: "optional",
                    type: "string",
                    name: "frame",
                    id: 6
                }]
            }, {
                name: "request_more_data",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "count",
                    id: 3
                }]
            }, {
                name: "get_first_bar_time",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "resolution",
                    id: 3
                }]
            }, {
                name: "create_study",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "study_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "parent",
                    id: 4
                }, {
                    rule: "optional",
                    type: "string",
                    name: "study",
                    id: 5
                }, {
                    rule: "optional",
                    type: "bytes",
                    name: "inputs",
                    id: 6
                }]
            }, {
                name: "create_child_study",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "study_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "parent",
                    id: 4
                }, {
                    rule: "optional",
                    type: "string",
                    name: "study",
                    id: 5
                }, {
                    rule: "optional",
                    type: "bytes",
                    name: "inputs",
                    id: 6
                }]
            }, {
                name: "child_study_rebind",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "study_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "parent",
                    id: 4
                }, {
                    rule: "optional",
                    type: "string",
                    name: "study",
                    id: 5
                }, {
                    rule: "optional",
                    type: "bytes",
                    name: "inputs",
                    id: 6
                }]
            }, {
                name: "remove_study",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "study_name",
                    id: 2
                }]
            }, {
                name: "modify_study",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "study_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "bytes",
                    name: "inputs",
                    id: 4
                }]
            }, {
                name: "create_pointset",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "ps_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 4
                }, {
                    rule: "optional",
                    type: "string",
                    name: "interval",
                    id: 5
                }, {
                    rule: "optional",
                    type: "string",
                    name: "points",
                    id: 6
                }]
            }, {
                name: "modify_pointset",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "ps_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "points",
                    id: 4
                }]
            }, {
                name: "remove_pointset",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "ps_name",
                    id: 2
                }]
            }, {
                name: "quote_create_session",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }]
            }, {
                name: "quote_set_fields",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "fields",
                    id: 2
                }]
            }, {
                name: "quote_delete_session",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }]
            }, {
                name: "quote_add_symbols",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbols",
                    id: 2
                }]
            }, {
                name: "quote_remove_symbols",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "repeated",
                    type: "string",
                    name: "symbols",
                    id: 2
                }]
            }, {
                name: "quote_switch_timezone",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "timezone",
                    id: 2
                }]
            }, {
                name: "quote_fast_symbols",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbols",
                    id: 2
                }]
            }, {
                name: "quote_hibernate_all",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }]
            }, {
                name: "quote_fire_tick",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 2
                }]
            }, {
                name: "quote_fire_crash",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 2
                }]
            }, {
                name: "depth_create_session",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "double",
                    name: "multiplier",
                    id: 2
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "viewport_width",
                    id: 3
                }]
            }, {
                name: "depth_delete_session",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }]
            }, {
                name: "depth_set_symbol",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 2
                }]
            }, {
                name: "depth_clear_symbol",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }]
            }, {
                name: "depth_set_scale",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "double",
                    name: "scale",
                    id: 2
                }]
            }, {
                name: "replay_create_session",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }]
            }, {
                name: "replay_delete_session",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }]
            }, {
                name: "replay_add_series",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "resolution",
                    id: 4
                }]
            }, {
                name: "replay_remove_series",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "resolution",
                    id: 4
                }]
            }, {
                name: "replay_reset",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 2
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 3
                }]
            }, {
                name: "replay_step",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 2
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "length",
                    id: 3
                }]
            }, {
                name: "replay_start",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 2
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "delay",
                    id: 3
                }]
            }, {
                name: "replay_stop",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 2
                }]
            }, {
                name: "replay_set_resolution",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "resolution",
                    id: 3
                }]
            }, {
                name: "set_auth_token",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "token",
                    id: 1
                }]
            }, {
                name: "set_data_quality",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "quality",
                    id: 1
                }]
            }, {
                name: "set_broker",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "broker_name",
                    id: 1
                }]
            }, {
                name: "request_more_tickmarks",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "bars",
                    id: 3
                }]
            }, {
                name: "switch_protocol",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "DataType",
                    name: "protocol",
                    id: 1
                }],
                enums: [{
                    name: "DataType",
                    syntax: "proto2",
                    values: [{
                        name: "json",
                        id: 0
                    }, {
                        name: "protobuf",
                        id: 1
                    }]
                }]
            }, {
                name: "protocol_switched",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "DataType",
                    name: "protocol",
                    id: 1
                }],
                enums: [{
                    name: "DataType",
                    syntax: "proto2",
                    values: [{
                        name: "json",
                        id: 0
                    }, {
                        name: "protobuf",
                        id: 1
                    }]
                }]
            }, {
                name: "mock_fire_tick",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 2
                }, {
                    rule: "optional",
                    type: "double",
                    name: "time",
                    id: 3
                }, {
                    rule: "optional",
                    type: "double",
                    name: "price",
                    id: 4
                }, {
                    rule: "optional",
                    type: "double",
                    name: "size",
                    id: 5
                }]
            }, {
                name: "message",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "text",
                    id: 1
                }]
            }, {
                name: "protocol_error",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "text",
                    id: 1
                }]
            }, {
                name: "critical_error",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "reason",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "info",
                    id: 3
                }]
            }, {
                name: "error_message",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "params",
                    id: 2
                }]
            }, {
                name: "wrong_message_type",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "fail_message",
                    id: 1
                }]
            }, {
                name: "series_loading",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 4
                }]
            }, {
                name: "series_completed",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "update_mode",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 4
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 5
                }]
            }, {
                name: "series_error",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "reason",
                    id: 4
                }, {
                    rule: "optional",
                    type: "string",
                    name: "node",
                    id: 5
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 6
                }]
            }, {
                name: "series_deleted",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 4
                }]
            }, {
                name: "series_timeframe",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "left",
                    id: 4
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "right",
                    id: 5
                }, {
                    rule: "optional",
                    type: "string",
                    name: "timeframe",
                    id: 6
                }, {
                    rule: "optional",
                    type: "bool",
                    name: "isAccurateData",
                    id: 7
                }]
            }, {
                name: "first_bar_time",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol_id",
                    id: 2
                }, {
                    rule: "optional",
                    type: "double",
                    name: "time",
                    id: 3
                }]
            }, {
                name: "unsupported_resolution",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "object_id",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "resolution",
                    id: 4
                }]
            }, {
                name: "study_loading",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 4
                }]
            }, {
                name: "study_completed",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 4
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 5
                }]
            }, {
                name: "study_deleted",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "study_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 4
                }]
            }, {
                name: "study_error",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "study_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "reason",
                    id: 4
                }, {
                    rule: "optional",
                    type: "string",
                    name: "node",
                    id: 5
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 6
                }]
            }, {
                name: "timescale_update",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "timescale",
                    name: "timescale",
                    id: 2
                }, {
                    rule: "optional",
                    type: "objects",
                    name: "objects",
                    id: 3
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 4
                }]
            }, {
                name: "du",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "objects",
                    name: "objects",
                    id: 2
                }]
            }, {
                name: "timescale",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "int32",
                    name: "index",
                    id: 1
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "zoffset",
                    id: 2
                }, {
                    rule: "repeated",
                    type: "double",
                    name: "changes",
                    id: 3
                }, {
                    rule: "repeated",
                    type: "marks",
                    name: "marks",
                    id: 4
                }, {
                    rule: "repeated",
                    type: "index_diff",
                    name: "index_diff",
                    id: 5
                }]
            }, {
                name: "tickmark_update",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "index",
                    id: 2
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "zoffset",
                    id: 3
                }, {
                    rule: "repeated",
                    type: "double",
                    name: "changes",
                    id: 4
                }, {
                    rule: "repeated",
                    type: "marks",
                    name: "marks",
                    id: 5
                }]
            }, {
                name: "marks",
                syntax: "proto2",
                fields: [{
                    rule: "repeated",
                    type: "double",
                    name: "value",
                    id: 1
                }]
            }, {
                name: "index_diff",
                syntax: "proto2",
                fields: [{
                    rule: "repeated",
                    type: "int32",
                    name: "index",
                    id: 1
                }]
            }, {
                name: "objects",
                syntax: "proto2",
                fields: [{
                    rule: "repeated",
                    type: "series",
                    name: "series",
                    id: 1
                }]
            }, {
                name: "series",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "series_name",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "node",
                    id: 2
                }, {
                    rule: "repeated",
                    type: "s",
                    name: "data",
                    id: 3
                }, {
                    rule: "optional",
                    type: "ns",
                    name: "ns",
                    id: 4
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 5
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "last_bar_close",
                    id: 6
                }]
            }, {
                name: "ns",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "d",
                    id: 1
                }, {
                    rule: "optional",
                    type: "bool",
                    name: "nochange",
                    id: 2
                }, {
                    rule: "repeated",
                    type: "int32",
                    name: "indexes",
                    id: 3
                }]
            }, {
                name: "st",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "int32",
                    name: "i",
                    id: 1
                }, {
                    rule: "repeated",
                    type: "double",
                    name: "value",
                    id: 2
                }]
            }, {
                name: "s",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "int32",
                    name: "i",
                    id: 1
                }, {
                    rule: "repeated",
                    type: "double",
                    name: "value",
                    id: 2
                }]
            }, {
                name: "symbol_resolved",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol_info",
                    id: 3
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 4
                }]
            }, {
                name: "studies_metadata",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "meta_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "metadata",
                    id: 3
                }]
            }, {
                name: "qsd",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol_name",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "status",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "values",
                    id: 4
                }, {
                    rule: "optional",
                    type: "double",
                    name: "lp",
                    id: 5
                }, {
                    rule: "optional",
                    type: "float",
                    name: "ch",
                    id: 6
                }, {
                    rule: "optional",
                    type: "float",
                    name: "chp",
                    id: 7
                }, {
                    rule: "optional",
                    type: "double",
                    name: "high_price",
                    id: 8
                }, {
                    rule: "optional",
                    type: "double",
                    name: "low_price",
                    id: 9
                }, {
                    rule: "optional",
                    type: "double",
                    name: "volume",
                    id: 10
                }, {
                    rule: "optional",
                    type: "double",
                    name: "rtc",
                    id: 11
                }, {
                    rule: "optional",
                    type: "float",
                    name: "rch",
                    id: 12
                }, {
                    rule: "optional",
                    type: "float",
                    name: "rchp",
                    id: 13
                }, {
                    rule: "optional",
                    type: "float",
                    name: "bid",
                    id: 14
                }, {
                    rule: "optional",
                    type: "float",
                    name: "ask",
                    id: 15
                }, {
                    rule: "optional",
                    type: "float",
                    name: "bid_size",
                    id: 16
                }, {
                    rule: "optional",
                    type: "float",
                    name: "ask_size",
                    id: 17
                }, {
                    rule: "optional",
                    type: "string",
                    name: "rest",
                    id: 19
                }]
            }, {
                name: "quote_list_fields",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "fields",
                    id: 2
                }]
            }, {
                name: "quote_completed",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol_name",
                    id: 2
                }]
            }, {
                name: "depth_symbol_success",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 2
                }]
            }, {
                name: "depth_symbol_error",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "reason",
                    id: 3
                }]
            }, {
                name: "depth_symbol_cleared",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 2
                }]
            }, {
                name: "dd",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "depth_data",
                    name: "depth_data",
                    id: 2
                }]
            }, {
                name: "depth_data",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 1
                }, {
                    rule: "optional",
                    type: "double",
                    name: "left",
                    id: 2
                }, {
                    rule: "optional",
                    type: "double",
                    name: "right",
                    id: 3
                }, {
                    rule: "repeated",
                    type: "bs",
                    name: "bids",
                    id: 4
                }, {
                    rule: "repeated",
                    type: "bs",
                    name: "asks",
                    id: 5
                }]
            }, {
                name: "bs",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "double",
                    name: "price",
                    id: 1
                }, {
                    rule: "optional",
                    type: "double",
                    name: "volume",
                    id: 2
                }]
            }, {
                name: "depth_bar_last_value",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "symbol",
                    id: 2
                }, {
                    rule: "optional",
                    type: "double",
                    name: "last_value",
                    id: 3
                }]
            }, {
                name: "pointset_error",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "set_id",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 3
                }]
            }, {
                name: "replay_point",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "int32",
                    name: "time",
                    id: 3
                }]
            }, {
                name: "replay_ok",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 2
                }]
            }, {
                name: "replay_error",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "turnaround",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "reason",
                    id: 3
                }, {
                    rule: "optional",
                    type: "string",
                    name: "info",
                    id: 4
                }]
            }, {
                name: "replay_resolutions",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "base_resolution",
                    id: 2
                }, {
                    rule: "optional",
                    type: "string",
                    name: "min_resolution",
                    id: 3
                }]
            }, {
                name: "replay_data_end",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }]
            }, {
                name: "replay_instance_id",
                syntax: "proto2",
                fields: [{
                    rule: "optional",
                    type: "string",
                    name: "session",
                    id: 1
                }, {
                    rule: "optional",
                    type: "string",
                    name: "id",
                    id: 2
                }]
            }],
            isNamespace: !0
        }
    },
    "5iuW": function (e, t, n) {
        "use strict";
        var i = n("DPDv")
            , s = n("1qYw")
            , o = function () {
                for (var e in this._protoMessage = i.loadJson(s).build(),
                    this._Msg = this._protoMessage.Msg,
                    this._commandByNumber = [],
                    this._Msg.Commands)
                    this._commandByNumber[this._Msg.Commands[e]] = e
            };
        o.prototype.decode_message = function (e) {
            var t = this._Msg.decode(e)
                , n = this._commandByNumber[t.command_number];
            return {
                m: n,
                p: this._protoMessage[n].decode(t.data),
                time: t.time
            }
        }
            ,
            o.prototype.encode_command = function (e, t) {
                return this._Msg.encode({
                    command_number: e,
                    data: this._protoMessage[e].encode(t)
                }).toBuffer()
            }
            ,
            e.exports = o
    },
    lxLC: function (e, t, n) {
        "use strict";
        e.exports = function () {
            var e = n("5iuW")
                , t = n("DPDv").ByteBuffer;
            this._protobufTranslator = new e,
                this.set_broker = function (e) {
                    return {
                        broker_name: e
                    }
                }
                ,
                this.set_data_quality = function () {
                    return {
                        quality: "low"
                    }
                }
                ,
                this.quote_create_session = function (e) {
                    return {
                        session: e
                    }
                }
                ,
                this.quote_delete_session = function (e) {
                    return {
                        session: e
                    }
                }
                ,
                this.quote_set_fields = function (e, t) {
                    return {
                        session: e,
                        fields: JSON.stringify(t)
                    }
                }
                ,
                this.quote_add_symbols = function (e, t) {
                    return {
                        session: e,
                        symbols: JSON.stringify(t)
                    }
                }
                ,
                this.quote_remove_symbols = function (e, t) {
                    return {
                        session: e,
                        symbols: t
                    }
                }
                ,
                this.quote_fast_symbols = function (e, t) {
                    return {
                        session: e,
                        symbols: "object" == typeof t ? JSON.stringify(t) : JSON.stringify([t])
                    }
                }
                ,
                this.quote_hibernate_all = function (e) {
                    return {
                        session: e
                    }
                }
                ,
                this.depth_create_session = function (e, t, n) {
                    return {
                        session: e,
                        multiplier: t,
                        viewport_width: n
                    }
                }
                ,
                this.depth_delete_session = function (e) {
                    return {
                        session: e
                    }
                }
                ,
                this.depth_set_symbol = function (e, t) {
                    return {
                        session: e,
                        symbol: t
                    }
                }
                ,
                this.depth_clear_symbol = function (e) {
                    return {
                        session: e
                    }
                }
                ,
                this.depth_set_scale = function (e, t) {
                    return {
                        session: e,
                        scale: t
                    }
                }
                ,
                this.chart_create_session = function (e, t) {
                    return {
                        session: e,
                        parameters: t ? "disable_statistics" : ""
                    }
                }
                ,
                this.chart_delete_session = function (e) {
                    return {
                        session: e
                    }
                }
                ,
                this.set_auth_token = function (e) {
                    return {
                        token: e
                    }
                }
                ,
                this.switch_timezone = function (e, t) {
                    return {
                        session: e,
                        timezone: t
                    }
                }
                ,
                this.resolve_symbol = function (e, t, n) {
                    return {
                        session: e,
                        resolve_name: t,
                        symbol: n
                    }
                }
                ,
                this.create_series = function (e, t, n, i, s, o, a) {
                    var r = {
                        session: e,
                        series_name: t,
                        turnaround: n = n || "",
                        resolve_name: i,
                        resolution: s,
                        bars: "object" == typeof o ? JSON.stringify(o) : JSON.stringify([o])
                    };
                    return null !== a && (r.frame = a),
                        r
                }
                ,
                this.remove_series = function (e, t) {
                    return {
                        session: e,
                        series_name: t
                    }
                }
                ,
                this.modify_series = function (e, t, n, i, s, o) {
                    var a = {
                        session: e,
                        series_name: t,
                        turnaround: n = n || "",
                        resolve_name: i,
                        resolution: s
                    };
                    return null !== o && (a.frame = o),
                        a
                }
                ,
                this.request_more_data = function (e, t, n) {
                    return {
                        session: e,
                        series_name: t,
                        count: n
                    }
                }
                ,
                this.request_studies_metadata = function (e, t) {
                    return {
                        session: e,
                        meta_name: t
                    }
                }
                ,
                this.create_study = function (e, n, i, s, o, a) {
                    return {
                        session: e,
                        study_name: n,
                        turnaround: i = i || "",
                        parent: s,
                        study: o,
                        inputs: t.fromUTF8(JSON.stringify(a))
                    }
                }
                ,
                this.create_child_study = function (e, t, n, i, s, o) {
                    return this.create_study(e, t, n, i, s, o)
                }
                ,
                this.child_study_rebind = function (e, n, i, s, o, a) {
                    return {
                        session: e,
                        study_name: n,
                        turnaround: i = i || "",
                        parent: s,
                        study: o,
                        inputs: t.fromUTF8(JSON.stringify(a))
                    }
                }
                ,
                this.remove_study = function (e, t) {
                    return {
                        session: e,
                        study_name: t
                    }
                }
                ,
                this.modify_study = function (e, n, i, s) {
                    return {
                        session: e,
                        study_name: n,
                        turnaround: i = i || "",
                        inputs: t.fromUTF8(JSON.stringify(s))
                    }
                }
                ,
                this.create_pointset = function (e, t, n, i, s, o) {
                    return {
                        session: e,
                        ps_name: t,
                        turnaround: n = n || "",
                        symbol: i,
                        interval: s,
                        points: JSON.stringify([o])
                    }
                }
                ,
                this.modify_pointset = function (e, t, n, i) {
                    return {
                        session: e,
                        ps_name: t,
                        turnaround: n = n || "",
                        points: JSON.stringify([i])
                    }
                }
                ,
                this.remove_pointset = function (e, t) {
                    return {
                        session: e,
                        ps_name: t
                    }
                }
                ,
                this.request_more_tickmarks = function (e, t, n) {
                    return {
                        session: e,
                        series_name: t,
                        bars: n
                    }
                }
                ,
                this.get_first_bar_time = function (e, t, n) {
                    return {
                        session: e,
                        symbol_name: t,
                        resolution: n
                    }
                }
                ,
                this.replay_create_session = function (e) {
                    return {
                        session: e
                    }
                }
                ,
                this.replay_delete_session = function (e) {
                    return {
                        session: e
                    }
                }
                ,
                this.replay_reset = function (e, t, n) {
                    return {
                        session: e,
                        time: n,
                        turnaround: t
                    }
                }
                ,
                this.replay_start = function (e, t, n) {
                    return {
                        session: e,
                        turnaround: t,
                        delay: n
                    }
                }
                ,
                this.replay_stop = function (e, t) {
                    return {
                        session: e,
                        turnaround: t
                    }
                }
                ,
                this.replay_step = function (e, t, n) {
                    return {
                        session: e,
                        length: n,
                        turnaround: t
                    }
                }
                ,
                this.replay_add_series = function (e, t, n, i) {
                    return {
                        session: e,
                        symbol: n,
                        resolution: i,
                        turnaround: t
                    }
                }
                ,
                this.replay_remove_series = function (e, t, n, i) {
                    return {
                        session: e,
                        symbol: n,
                        resolution: i,
                        turnaround: t
                    }
                }
                ,
                this.replay_set_resolution = function (e, t, n) {
                    return {
                        session: e,
                        turnaround: t,
                        resolution: n
                    }
                }
                ,
                this.convertTimescaleResponse = function (e) {
                    for (var t = e.marks, n = 0; n < t.length; ++n)
                        t[n] = {
                            span: t[n].value[0],
                            time: t[n].value[1],
                            index: t[n].value[2]
                        };
                    if (void 0 !== e.index_diff) {
                        var i = e.index_diff;
                        for (n = 0; n < i.length; ++n)
                            i[n] = {
                                old: i[n].index[0],
                                new: i[n].index[1]
                            }
                    } else
                        e.index_diff = [];
                    return e
                }
                ,
                this.getDataUpdateObjects = function (e) {
                    return e.params[0].series
                }
                ,
                this.getTimescaleObjects = function (e) {
                    return e.params[1].series
                }
                ,
                this.getTimescaleChangeset = function (e) {
                    return e.params[0]
                }
                ,
                this._convertObjectToArray = function (e) {
                    return Object.keys(e).map((function (t) {
                        return e[t]
                    }
                    ))
                }
                ,
                this.prepareDataUpdateObjects = function (e, t, n) {
                    t.forEach((function (t) {
                        for (var i in t.plots)
                            for (var s in t.plots[i].value)
                                1e100 === t.plots[i].value[s] && (t.plots[i].value[s] = void 0);
                        t.last_bar_close && (t.lastBar = {
                            closeTime: t.last_bar_close
                        },
                            delete t.last_bar_close);
                        var o = {
                            method: "data_update",
                            params: t
                        };
                        n(e, t.customId, o)
                    }
                    ))
                }
                ,
                this.unpack = function (e) {
                    var t;
                    function n(e) {
                        return {
                            v: e.volume,
                            p: e.price
                        }
                    }
                    switch ((e = this._protobufTranslator.decode_message(e)).session = e.p.session,
                    e.method = e.m,
                    t = e.p,
                    e.method) {
                        case "symbol_resolved":
                            e.p.symbol_info = JSON.parse(e.p.symbol_info),
                                e.p = this._convertObjectToArray(e.p);
                            break;
                        case "studies_metadata":
                            t.metadata = JSON.parse(t.metadata),
                                e.p = this._convertObjectToArray(e.p);
                            break;
                        case "qsd":
                            if (e.method = "quote_symbol_data",
                                t.values)
                                t.values = JSON.parse(t.values);
                            else {
                                t.values = {};
                                ["lp", "ch", "chp", "high_price", "low_price", "volume", "rtc", "rch", "rchp", "bid", "ask", "bid_size", "ask_size", "series_data"].forEach((function (e) {
                                    var n, i, s;
                                    void 0 !== t[e] && null !== t[e] && (t.values[e] = "series_data" === e ? t[e] : "chp" === e || "rchp" === e ? (n = t[e],
                                        i = 4,
                                        s = Math.pow(10, i),
                                        Math.round(n * s) / s) : t[e])
                                }
                                ));
                                var i = JSON.parse(t.rest);
                                Object.keys(i).forEach((function (e) {
                                    t.values[e] = i[e]
                                }
                                ))
                            }
                            var s = {
                                symbolname: t.symbol_name,
                                status: t.status,
                                values: t.values
                            };
                            s.values.change = t.values.ch,
                                s.values.last_price = t.values.lp,
                                s.values.change_percent = t.values.chp;
                            var o = [t.session, s];
                            e.p = o,
                                e.params = e.p,
                                delete t.values.ch,
                                delete t.values.lp,
                                delete t.values.chp;
                            break;
                        case "du":
                            e.method = "data_update",
                                t.objects.series.forEach((function (e) {
                                    e.data.forEach((function (e) {
                                        e.index = e.i,
                                            delete e.i,
                                            delete e.v
                                    }
                                    )),
                                        e.plots = e.data,
                                        e.ns.d = "" === e.ns.d ? "" : e.ns.d,
                                        e.ns.indexes = e.ns.nochange ? "nochange" : e.ns.indexes,
                                        e.nonseries = e.ns,
                                        e.customId = e.series_name,
                                        delete e.ns,
                                        delete e.data
                                }
                                )),
                                e.p = this._convertObjectToArray(e.p);
                            break;
                        case "tickmark_update":
                            var a = {
                                index: t.index,
                                zoffset: t.zoffset,
                                changes: t.changes,
                                marks: t.marks
                            };
                            o = [t.session, a];
                            e.p = o;
                            break;
                        case "timescale_update":
                            t.objects.series.forEach((function (e) {
                                e.data.forEach((function (e) {
                                    e.index = e.i,
                                        delete e.i,
                                        delete e.v
                                }
                                )),
                                    e.plots = e.data,
                                    e.ns.d = "" === e.ns.d ? "" : e.ns.d,
                                    e.ns.indexes = e.ns.nochange ? "nochange" : e.ns.indexes,
                                    e.nonseries = e.ns,
                                    e.customId = e.series_name,
                                    delete e.ns,
                                    delete e.data
                            }
                            )),
                                e.p = this._convertObjectToArray(e.p);
                            break;
                        case "dd":
                            (t = t.depth_data).asks = t.asks.map(n),
                                t.bids = t.bids.map(n),
                                e.p = this._convertObjectToArray(e.p);
                            break;
                        case "symbol_error":
                            var r = this._convertObjectToArray(t.reason);
                            e.p = [t.session, t.symbol].concat(r);
                            break;
                        default:
                            e.p = this._convertObjectToArray(e.p)
                    }
                    return e.params = e.p,
                        e
                }
                ,
                this.prepareEncodeMessage = function (e, t) {
                    return this._protobufTranslator.encode_command(e, t)
                }
        }
    }
}]);
