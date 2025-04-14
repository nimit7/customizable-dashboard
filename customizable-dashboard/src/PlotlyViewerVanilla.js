import React, { useEffect } from 'react'

let pinnedObjects = [{ "object_type": "dashboard-info", "object_name": "Information", "object_data": { "name": "test", "description": "", "group": "Multi-Domain", "user_config": { "view_page_borders": true, "view_panel_highlighter": true, "page_orientation_portrait": true, "page_style": { "min-height": "1550px", "width": "1080px" }, "page_className": "shadow-lg p-0 bg-body rounded" } } }, { "object_type": "panel", "object_width": "12", "object_height": "0", "object_padding": "0", "object_header": "", "object_border": "0", "object_data": [{ "object_type": "text", "object_width": "12", "object_height": "100", "object_header": "", "object_border": "1", "object_data": { "title": "Title", "subtitle": "Sub-Title" }, "object_style": { "text_align": "Center", "page_break": "" } }], "object_query": { "title": "Title", "subtitle": "Sub-Title", "panel_width_value": 12, "text_width_value": 12, "text_height_value": 100, "text_align": "Center" }, "object_name": "Label-1" }, { "object_type": "panel", "object_width": "12", "object_height": "0", "object_padding": "0", "object_header": "", "object_border": "0", "object_data": [{ "object_type": "card", "object_width": "3", "object_height": "200", "object_header": "", "object_border": "1", "object_style": { "view_options": ["Node Name", "Metric Name", "Metric Value", "Cohort Name", "Segment Name", "Change %", "Time"], "nodename_suffix": "", "metricname_suffix": "", "metric_prefix": "", "metric_suffix": "", "change_type": "Percentage", "difference_type": "VsPrev", "change_prefix": "", "change_suffix": "%", "time_format": "", "card_template": "Vertical-Center" }, "object_data": { "metric_name": "Roll Rate", "metric_value": "13.67", "metric_change": "37.58", "metric_change_i": "\u25b2", "metric_change_c": "text-secondary", "metric_change_v": "3.73", "metric_change_s": "\u25b237.58%", "node_name": "Auto Loans", "tree_name": "Auto Loans - Collections 2022 - 24", "cohort_name": "", "segment_name": "", "filters": ["Month", "DaysPastDue", "Filter3", "Filter4"], "filter_values": ["2023-06", [], [], []] } }], "object_query": { "kpitreeid": 741, "kpitype": "Aggregations", "cohortname": [], "searchnodes": [], "searchmetrics": [], "filter1_value": "", "filter2_value": [], "filter3_value": [], "filter4_value": [], "summary_func": "Avg", "weight_metric": "", "panel_width_value": 12, "card_width_value": 3, "card_height_value": 200, "view_options": ["Node Name", "Metric Name", "Metric Value", "Cohort Name", "Segment Name", "Change %", "Time"], "nodenamesuffix": "", "metricnamesuffix": "", "metricprefix": "", "metricsuffix": "", "changetype": "Percentage", "difftype": "VsPrev", "changeprefix": "", "changesuffix": "%", "timeformat": "", "cardtemplate": "Vertical-Center", "datasource": "" }, "object_name": "KPICard-1" }, { "object_type": "panel", "object_width": "12", "object_height": "0", "object_header": "", "object_padding": "0", "object_border": "0", "object_data": [{ "object_type": "graph", "object_width": "12", "object_height": "350", "object_header": "", "object_border": "1", "object_data": "{\"data\":[{\"hovertemplate\":\"DaysPastDue=0 29\\u003cbr\\u003eMonth=%{x}\\u003cbr\\u003eRoll Rate=%{y}\\u003cextra\\u003e\\u003c\\u002fextra\\u003e\",\"legendgroup\":\"0 29\",\"line\":{\"color\":\"#636efa\",\"dash\":\"solid\"},\"marker\":{\"symbol\":\"circle\"},\"mode\":\"lines+markers\",\"name\":\"0 29\",\"orientation\":\"v\",\"showlegend\":true,\"x\":[\"2023-01\",\"2023-02\",\"2023-03\",\"2023-04\",\"2023-05\",\"2023-06\"],\"xaxis\":\"x\",\"y\":[20.4,16.8,14.0,10.0,13.0,11.0],\"yaxis\":\"y\",\"type\":\"scatter\"},{\"hovertemplate\":\"DaysPastDue=30 59\\u003cbr\\u003eMonth=%{x}\\u003cbr\\u003eRoll Rate=%{y}\\u003cextra\\u003e\\u003c\\u002fextra\\u003e\",\"legendgroup\":\"30 59\",\"line\":{\"color\":\"#EF553B\",\"dash\":\"solid\"},\"marker\":{\"symbol\":\"circle\"},\"mode\":\"lines+markers\",\"name\":\"30 59\",\"orientation\":\"v\",\"showlegend\":true,\"x\":[\"2023-01\",\"2023-02\",\"2023-03\",\"2023-04\",\"2023-05\",\"2023-06\"],\"xaxis\":\"x\",\"y\":[6.0,15.0,12.0,10.8,10.8,22.0],\"yaxis\":\"y\",\"type\":\"scatter\"},{\"hovertemplate\":\"DaysPastDue=60 89\\u003cbr\\u003eMonth=%{x}\\u003cbr\\u003eRoll Rate=%{y}\\u003cextra\\u003e\\u003c\\u002fextra\\u003e\",\"legendgroup\":\"60 89\",\"line\":{\"color\":\"#00cc96\",\"dash\":\"solid\"},\"marker\":{\"symbol\":\"circle\"},\"mode\":\"lines+markers\",\"name\":\"60 89\",\"orientation\":\"v\",\"showlegend\":true,\"x\":[\"2023-01\",\"2023-02\",\"2023-03\",\"2023-04\",\"2023-05\",\"2023-06\"],\"xaxis\":\"x\",\"y\":[0.0,0.0,15.0,7.5,6.0,8.0],\"yaxis\":\"y\",\"type\":\"scatter\"}],\"layout\":{\"template\":{\"data\":{\"histogram2dcontour\":[{\"type\":\"histogram2dcontour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"choropleth\":[{\"type\":\"choropleth\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"histogram2d\":[{\"type\":\"histogram2d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmap\":[{\"type\":\"heatmap\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmapgl\":[{\"type\":\"heatmapgl\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"contourcarpet\":[{\"type\":\"contourcarpet\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"contour\":[{\"type\":\"contour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"surface\":[{\"type\":\"surface\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"mesh3d\":[{\"type\":\"mesh3d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"scatter\":[{\"fillpattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2},\"type\":\"scatter\"}],\"parcoords\":[{\"type\":\"parcoords\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolargl\":[{\"type\":\"scatterpolargl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"bar\":[{\"error_x\":{\"color\":\"#2a3f5f\"},\"error_y\":{\"color\":\"#2a3f5f\"},\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"bar\"}],\"scattergeo\":[{\"type\":\"scattergeo\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolar\":[{\"type\":\"scatterpolar\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"histogram\":[{\"marker\":{\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"histogram\"}],\"scattergl\":[{\"type\":\"scattergl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatter3d\":[{\"type\":\"scatter3d\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattermapbox\":[{\"type\":\"scattermapbox\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterternary\":[{\"type\":\"scatterternary\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattercarpet\":[{\"type\":\"scattercarpet\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"carpet\":[{\"aaxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"baxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"type\":\"carpet\"}],\"table\":[{\"cells\":{\"fill\":{\"color\":\"#EBF0F8\"},\"line\":{\"color\":\"white\"}},\"header\":{\"fill\":{\"color\":\"#C8D4E3\"},\"line\":{\"color\":\"white\"}},\"type\":\"table\"}],\"barpolar\":[{\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"barpolar\"}],\"pie\":[{\"automargin\":true,\"type\":\"pie\"}]},\"layout\":{\"autotypenumbers\":\"strict\",\"colorway\":[\"#636efa\",\"#EF553B\",\"#00cc96\",\"#ab63fa\",\"#FFA15A\",\"#19d3f3\",\"#FF6692\",\"#B6E880\",\"#FF97FF\",\"#FECB52\"],\"font\":{\"color\":\"#2a3f5f\"},\"hovermode\":\"closest\",\"hoverlabel\":{\"align\":\"left\"},\"paper_bgcolor\":\"white\",\"plot_bgcolor\":\"#E5ECF6\",\"polar\":{\"bgcolor\":\"#E5ECF6\",\"angularaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"radialaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"ternary\":{\"bgcolor\":\"#E5ECF6\",\"aaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"baxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"caxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"coloraxis\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"colorscale\":{\"sequential\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"sequentialminus\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"diverging\":[[0,\"#8e0152\"],[0.1,\"#c51b7d\"],[0.2,\"#de77ae\"],[0.3,\"#f1b6da\"],[0.4,\"#fde0ef\"],[0.5,\"#f7f7f7\"],[0.6,\"#e6f5d0\"],[0.7,\"#b8e186\"],[0.8,\"#7fbc41\"],[0.9,\"#4d9221\"],[1,\"#276419\"]]},\"xaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"yaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"scene\":{\"xaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"yaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"zaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2}},\"shapedefaults\":{\"line\":{\"color\":\"#2a3f5f\"}},\"annotationdefaults\":{\"arrowcolor\":\"#2a3f5f\",\"arrowhead\":0,\"arrowwidth\":1},\"geo\":{\"bgcolor\":\"white\",\"landcolor\":\"#E5ECF6\",\"subunitcolor\":\"white\",\"showland\":true,\"showlakes\":true,\"lakecolor\":\"white\"},\"title\":{\"x\":0.05},\"mapbox\":{\"style\":\"light\"}}},\"xaxis\":{\"anchor\":\"y\",\"domain\":[0.0,1.0],\"title\":{\"text\":\"Month\"},\"dtick\":\"M1\",\"tickformat\":\"%b-%Y\",\"tickangle\":-45,\"gridcolor\":\"rgba(0,0,0,0)\"},\"yaxis\":{\"anchor\":\"x\",\"domain\":[0.0,1.0],\"title\":{\"text\":\"Roll Rate\"},\"gridcolor\":\"#e8e8e8\",\"zerolinecolor\":\"gainsboro\"},\"legend\":{\"title\":{\"text\":\"DaysPastDue\"},\"tracegroupgap\":0},\"margin\":{\"t\":60,\"l\":10,\"r\":10,\"b\":10},\"title\":{\"text\":\"Auto Loans\\u003cbr\\u003e\\u003cspan style='font-size: 12px;'\\u003e\\u003c\\u002fspan\\u003e\",\"x\":0.5,\"y\":0.95,\"xanchor\":\"center\",\"yanchor\":\"top\"},\"paper_bgcolor\":\"rgba(0,0,0,0)\",\"plot_bgcolor\":\"rgba(0,0,0,0)\"}}" }], "object_query": { "kpitreeid": 741, "searchnodes": [], "kpitype": "Aggregations", "filter1_value": [], "filter2_value": [], "filter3_value": [], "filter4_value": [], "viewby": "", "metricname": "", "groupby": "", "charttype": "line", "summary_func": "Avg", "weight_metric": "", "graph_panel_width_value": 12, "graph_width_value": 12, "graph_height_value": 350, "view_options": ["Chart Title", "Legends", "Legend-Title", "X-Axis Title", "X-Axis Labels", "Y-Axis Title", "Y-Axis Labels", "Y-Grid Lines", "Zero Line"], "legend_position": "Default", "legend_alignment": "Default", "comparetype": "", "datasource": "", "cohortname": "" }, "object_name": "Graph-1" }, { "object_type": "panel", "object_width": "12", "object_height": "0", "object_padding": "0", "object_header": "", "object_border": "0", "object_data": [{ "object_type": "table", "object_width": "12", "object_height": "400", "object_header": "", "object_border": "1", "object_data": { "table_header": ["Node", "Roll Rate", "Collection Rate", "No of Accounts", "Rolled Accounts", "Monthly Accounts", "Direct Accounts", "Indirect Accounts"], "table_data": [["Auto Loans", 13.67, 86.33, 33.33, 8.67, 66.67, 26.67, 40.0], ["Direct - High Balance Customers", 8.34, 91.66, 8.0, 2.0, 100.0, 40.0, 60.0], ["Direct - Low Balance Customers", 0.0, 33.33, 0.33, 0.0, 33.33, 13.33, 20.0], ["Direct - Medium Balance Customers", 6.67, 60.0, 5.0, 1.0, 66.67, 26.67, 40.0], ["Direct Auto Loans", 15.0, 85.0, 13.33, 3.0, 66.67, 26.67, 40.0], ["Indirect - High Balance Customers", 8.33, 58.33, 8.0, 2.0, 66.67, 26.67, 40.0], ["Indirect - Low Balance Customers", 0.0, 33.33, 1.33, 0.0, 33.33, 13.33, 20.0], ["Indirect - Medium Balance Customers", 11.46, 88.54, 10.67, 3.67, 100.0, 40.0, 60.0], ["Indirect Auto Loans", 13.61, 86.39, 20.0, 5.67, 66.67, 26.67, 40.0]], "html_data": ["<table border=\"1\" class=\"table table-striped\">\n  <thead>\n    <tr style=\"text-align: right;\">\n      <th></th>\n      <th>Node</th>\n      <th>Roll Rate</th>\n      <th>Collection Rate</th>\n      <th>No of Accounts</th>\n      <th>Rolled Accounts</th>\n      <th>Monthly Accounts</th>\n      <th>Direct Accounts</th>\n      <th>Indirect Accounts</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>Auto Loans</td>\n      <td>13.67</td>\n      <td>86.33</td>\n      <td>33.33</td>\n      <td>8.67</td>\n      <td>66.67</td>\n      <td>26.67</td>\n      <td>40.00</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>Direct - High Balance Customers</td>\n      <td>8.34</td>\n      <td>91.66</td>\n      <td>8.00</td>\n      <td>2.00</td>\n      <td>100.00</td>\n      <td>40.00</td>\n      <td>60.00</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>Direct - Low Balance Customers</td>\n      <td>0.00</td>\n      <td>33.33</td>\n      <td>0.33</td>\n      <td>0.00</td>\n      <td>33.33</td>\n      <td>13.33</td>\n      <td>20.00</td>\n    </tr>\n    <tr>\n      <th>5</th>\n      <td>Direct - Medium Balance Customers</td>\n      <td>6.67</td>\n      <td>60.00</td>\n      <td>5.00</td>\n      <td>1.00</td>\n      <td>66.67</td>\n      <td>26.67</td>\n      <td>40.00</td>\n    </tr>\n    <tr>\n      <th>6</th>\n      <td>Direct Auto Loans</td>\n      <td>15.00</td>\n      <td>85.00</td>\n      <td>13.33</td>\n      <td>3.00</td>\n      <td>66.67</td>\n      <td>26.67</td>\n      <td>40.00</td>\n    </tr>\n    <tr>\n      <th>7</th>\n      <td>Indirect - High Balance Customers</td>\n      <td>8.33</td>\n      <td>58.33</td>\n      <td>8.00</td>\n      <td>2.00</td>\n      <td>66.67</td>\n      <td>26.67</td>\n      <td>40.00</td>\n    </tr>\n    <tr>\n      <th>8</th>\n      <td>Indirect - Low Balance Customers</td>\n      <td>0.00</td>\n      <td>33.33</td>\n      <td>1.33</td>\n      <td>0.00</td>\n      <td>33.33</td>\n      <td>13.33</td>\n      <td>20.00</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>Indirect - Medium Balance Customers</td>\n      <td>11.46</td>\n      <td>88.54</td>\n      <td>10.67</td>\n      <td>3.67</td>\n      <td>100.00</td>\n      <td>40.00</td>\n      <td>60.00</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>Indirect Auto Loans</td>\n      <td>13.61</td>\n      <td>86.39</td>\n      <td>20.00</td>\n      <td>5.67</td>\n      <td>66.67</td>\n      <td>26.67</td>\n      <td>40.00</td>\n    </tr>\n  </tbody>\n</table>"] } }], "object_query": { "kpitreeid": 741, "searchnodes": [], "kpitype": "Aggregations", "cohortname": "", "filter1_value": "", "filter2_value": "", "filter3_value": "", "filter4_value": "", "viewcols": null, "metricname": [], "summary_func": "Avg", "weight_metric": "", "table_panel_width_value": 12, "table_width_value": 12, "table_height_value": 400, "table_dataformat": "", "datasource": "", "pivotcol": null, "precision": 2 }, "object_name": "Table-1" }, { "object_type": "panel", "object_width": "12", "object_height": "0", "object_padding": "0", "object_header": "", "object_border": "0", "object_data": [{ "object_type": "graph", "object_width": "12", "object_height": "350", "object_header": "", "object_border": "1", "object_data": "{\"data\":[{\"hovertemplate\":\"DaysPastDue=%{y}\\u003cbr\\u003eMonth=%{x}\\u003cbr\\u003eRoll Rate=%{z}\\u003cextra\\u003e\\u003c\\u002fextra\\u003e\",\"legendgroup\":\"0 29\",\"marker\":{\"color\":\"#636efa\",\"symbol\":\"circle\"},\"mode\":\"markers\",\"name\":\"0 29\",\"scene\":\"scene\",\"showlegend\":true,\"x\":[\"2023-01\",\"2023-02\",\"2023-03\",\"2023-04\",\"2023-05\",\"2023-06\"],\"y\":[\"0 29\",\"0 29\",\"0 29\",\"0 29\",\"0 29\",\"0 29\"],\"z\":[20.4,16.8,14.0,10.0,13.0,11.0],\"type\":\"scatter3d\"},{\"hovertemplate\":\"DaysPastDue=%{y}\\u003cbr\\u003eMonth=%{x}\\u003cbr\\u003eRoll Rate=%{z}\\u003cextra\\u003e\\u003c\\u002fextra\\u003e\",\"legendgroup\":\"30 59\",\"marker\":{\"color\":\"#EF553B\",\"symbol\":\"circle\"},\"mode\":\"markers\",\"name\":\"30 59\",\"scene\":\"scene\",\"showlegend\":true,\"x\":[\"2023-01\",\"2023-02\",\"2023-03\",\"2023-04\",\"2023-05\",\"2023-06\"],\"y\":[\"30 59\",\"30 59\",\"30 59\",\"30 59\",\"30 59\",\"30 59\"],\"z\":[6.0,15.0,12.0,10.8,10.8,22.0],\"type\":\"scatter3d\"},{\"hovertemplate\":\"DaysPastDue=%{y}\\u003cbr\\u003eMonth=%{x}\\u003cbr\\u003eRoll Rate=%{z}\\u003cextra\\u003e\\u003c\\u002fextra\\u003e\",\"legendgroup\":\"60 89\",\"marker\":{\"color\":\"#00cc96\",\"symbol\":\"circle\"},\"mode\":\"markers\",\"name\":\"60 89\",\"scene\":\"scene\",\"showlegend\":true,\"x\":[\"2023-01\",\"2023-02\",\"2023-03\",\"2023-04\",\"2023-05\",\"2023-06\"],\"y\":[\"60 89\",\"60 89\",\"60 89\",\"60 89\",\"60 89\",\"60 89\"],\"z\":[0.0,0.0,15.0,7.5,6.0,8.0],\"type\":\"scatter3d\"}],\"layout\":{\"template\":{\"data\":{\"histogram2dcontour\":[{\"type\":\"histogram2dcontour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"choropleth\":[{\"type\":\"choropleth\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"histogram2d\":[{\"type\":\"histogram2d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmap\":[{\"type\":\"heatmap\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmapgl\":[{\"type\":\"heatmapgl\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"contourcarpet\":[{\"type\":\"contourcarpet\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"contour\":[{\"type\":\"contour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"surface\":[{\"type\":\"surface\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"mesh3d\":[{\"type\":\"mesh3d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"scatter\":[{\"fillpattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2},\"type\":\"scatter\"}],\"parcoords\":[{\"type\":\"parcoords\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolargl\":[{\"type\":\"scatterpolargl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"bar\":[{\"error_x\":{\"color\":\"#2a3f5f\"},\"error_y\":{\"color\":\"#2a3f5f\"},\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"bar\"}],\"scattergeo\":[{\"type\":\"scattergeo\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolar\":[{\"type\":\"scatterpolar\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"histogram\":[{\"marker\":{\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"histogram\"}],\"scattergl\":[{\"type\":\"scattergl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatter3d\":[{\"type\":\"scatter3d\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattermapbox\":[{\"type\":\"scattermapbox\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterternary\":[{\"type\":\"scatterternary\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattercarpet\":[{\"type\":\"scattercarpet\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"carpet\":[{\"aaxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"baxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"type\":\"carpet\"}],\"table\":[{\"cells\":{\"fill\":{\"color\":\"#EBF0F8\"},\"line\":{\"color\":\"white\"}},\"header\":{\"fill\":{\"color\":\"#C8D4E3\"},\"line\":{\"color\":\"white\"}},\"type\":\"table\"}],\"barpolar\":[{\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"barpolar\"}],\"pie\":[{\"automargin\":true,\"type\":\"pie\"}]},\"layout\":{\"autotypenumbers\":\"strict\",\"colorway\":[\"#636efa\",\"#EF553B\",\"#00cc96\",\"#ab63fa\",\"#FFA15A\",\"#19d3f3\",\"#FF6692\",\"#B6E880\",\"#FF97FF\",\"#FECB52\"],\"font\":{\"color\":\"#2a3f5f\"},\"hovermode\":\"closest\",\"hoverlabel\":{\"align\":\"left\"},\"paper_bgcolor\":\"white\",\"plot_bgcolor\":\"#E5ECF6\",\"polar\":{\"bgcolor\":\"#E5ECF6\",\"angularaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"radialaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"ternary\":{\"bgcolor\":\"#E5ECF6\",\"aaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"baxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"caxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"coloraxis\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"colorscale\":{\"sequential\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"sequentialminus\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"diverging\":[[0,\"#8e0152\"],[0.1,\"#c51b7d\"],[0.2,\"#de77ae\"],[0.3,\"#f1b6da\"],[0.4,\"#fde0ef\"],[0.5,\"#f7f7f7\"],[0.6,\"#e6f5d0\"],[0.7,\"#b8e186\"],[0.8,\"#7fbc41\"],[0.9,\"#4d9221\"],[1,\"#276419\"]]},\"xaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"yaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"scene\":{\"xaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"yaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"zaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2}},\"shapedefaults\":{\"line\":{\"color\":\"#2a3f5f\"}},\"annotationdefaults\":{\"arrowcolor\":\"#2a3f5f\",\"arrowhead\":0,\"arrowwidth\":1},\"geo\":{\"bgcolor\":\"white\",\"landcolor\":\"#E5ECF6\",\"subunitcolor\":\"white\",\"showland\":true,\"showlakes\":true,\"lakecolor\":\"white\"},\"title\":{\"x\":0.05},\"mapbox\":{\"style\":\"light\"}}},\"scene\":{\"domain\":{\"x\":[0.0,1.0],\"y\":[0.0,1.0]},\"xaxis\":{\"title\":{\"text\":\"Month\"}},\"yaxis\":{\"title\":{\"text\":\"DaysPastDue\"},\"categoryorder\":\"array\",\"categoryarray\":[\"0 29\",\"30 59\",\"60 89\"]},\"zaxis\":{\"title\":{\"text\":\"Roll Rate\"}}},\"legend\":{\"title\":{\"text\":\"DaysPastDue\"},\"tracegroupgap\":0},\"margin\":{\"t\":50,\"l\":80,\"r\":30,\"b\":20},\"title\":{\"text\":\"Auto Loans\\u003cbr\\u003e\\u003cspan style='font-size: 12px;'\\u003e\\u003c\\u002fspan\\u003e\",\"x\":0.5,\"xanchor\":\"center\"},\"paper_bgcolor\":\"rgba(0,0,0,0)\",\"plot_bgcolor\":\"rgba(0,0,0,0)\",\"yaxis\":{\"gridcolor\":\"#e8e8e8\",\"zerolinecolor\":\"gray\"}}}" }], "object_query": { "kpitreeid": 741, "searchnodes": "", "kpitype": "Aggregations", "cohortname": "", "filter1_value": "", "filter2_value": "", "filter3_value": "", "filter4_value": "", "viewby": "Month", "metricname": "Roll Rate", "groupby": "DaysPastDue", "charttype": "scatter", "summary_func": "Avg", "weight_metric": "", "graph_panel_width_value": 12, "graph_width_value": 12, "graph_height_value": 350, "datasource": "" }, "object_name": "Graph3D-1" }]

const PlotlyViewerVanilla = () => {
    function getColWidth(pw, cw) {
        cw = cw > pw ? pw : cw;
        cw = Math.round(cw * 12.0 / pw);
        return cw;
    }

    for (let i = 0; i < pinnedObjects.length; i++) {
        var panel_obj = pinnedObjects[i]
        if (panel_obj["object_type"] == "panel") {
            var panel_data = panel_obj['object_data']
            let panel_header = panel_obj["object_header"] ? panel_obj["object_header"] : ""
            let panel_padding = panel_obj["object_padding"] ? panel_obj["object_padding"] : "0"
            let panel_border = panel_obj["object_border"] ? panel_obj["object_border"] : "0"
            var iPanel = document.createElement('div');
            var panel_width = parseInt(panel_obj['object_width'])
            iPanel.className = 'col-' + panel_width.toString() + " p-" + panel_padding.toString()
            let page_break = ""
            if (panel_obj['object_style']) {
                page_break = panel_obj['object_style']["page_break"] ? panel_obj['object_style']["page_break"] + ":" + "always " : ""

            }
            iPanel.style = "break-inside:avoid;" + page_break
            let iPanelCard = document.createElement('div');
            iPanelCard.className = "card p-0 bg-transparent  border-" + panel_border.toString()
            let iPanelCardBody = document.createElement('div');
            iPanelCardBody.className = "card-body p-0 "

            let iPanelHeader = document.createElement('div');
            iPanelHeader.className = "h5 p-2"
            iPanelHeader.style = "color:#043365"
            iPanelHeader.innerHTML = panel_header

            var iPanelRow = document.createElement('div');
            iPanelRow.className = 'row pr-3 pl-3'
            var sub_obj_type = ""
            for (let j = 0; j < panel_data.length; j++) {
                let card_obj = panel_data[j]
                let sub_obj_type = card_obj["object_type"]
                let object_style = card_obj['object_style'] ? card_obj['object_style'] : {}
                var card_width = getColWidth(panel_width, parseInt(card_obj['object_width']))
                var card_height = parseInt(card_obj['object_height'])
                let item_header = card_obj["object_header"] ? card_obj["object_header"] : ""
                let item_border = card_obj["object_border"] ? card_obj["object_border"] : "1"
                if (sub_obj_type == "card") {
                    var card_data = card_obj['object_data']
                    let filter_values = card_data["filter_values"]
                    let filters = card_data["filters"]
                    card_height = (card_height).toString() + "px"

                    let changetype = object_style["change_type"] ? object_style["change_type"] : "Percentage"
                    let nodenamesuffix = object_style["nodename_suffix"] ? object_style["nodename_suffix"] : ""
                    let metricnamesuffix = object_style["metricname_suffix"] ? object_style["metricname_suffix"] : ""
                    let changesuffix = object_style["change_suffix"] ? object_style["change_suffix"] : "%"
                    let changeprefix = object_style["change_prefix"] ? object_style["change_prefix"] : ""
                    let metricprefix = object_style["metric_prefix"] ? object_style["metric_prefix"] : ""
                    let metricsuffix = object_style["metric_suffix"] ? object_style["metric_suffix"] : ""
                    let cardtemplate = object_style["card_template"] ? object_style["card_template"] : "Vertical-Center"
                    let viewoptions = object_style["view_options"] ? object_style["view_options"] : ['Node Name', 'Metric Name', "Metric Value", 'Cohort Name', 'Segment Name', 'Change %']

                    let text_align = cardtemplate.split("-")[1].toString().toLowerCase()
                    let node_name = (viewoptions.indexOf("Node Name") > -1) ? card_data["node_name"] : ""
                    node_name = (nodenamesuffix === "") ? node_name : node_name + nodenamesuffix

                    let metric_name = (viewoptions.indexOf("Metric Name") > -1) ? card_data["metric_name"] : ""
                    metric_name = (metricnamesuffix === "") ? metric_name : metric_name + metricnamesuffix

                    let metric_value = (viewoptions.indexOf("Metric Value") > -1) ? card_data["metric_value"] : ""
                    metric_value = (metricprefix === "") ? metric_value : metricprefix + metric_value
                    metric_value = (metricsuffix === "") ? metric_value : metric_value + metricsuffix
                    let metric_change_c = card_data['metric_change_c']
                    let change_s = (viewoptions.indexOf("Change %") > -1) ? card_data["metric_change_s"] : ""
                    let cohort_name = (viewoptions.indexOf("Cohort Name") > -1) ? card_data["cohort_name"] : ""
                    let segment_name = (viewoptions.indexOf("Segment Name") > -1) ? card_data["segment_name"] : ""
                    let tree_name = (viewoptions.indexOf("Tree Name") > -1) ? card_data["tree_name"] : ""
                    let first_filter = (viewoptions.indexOf("Time") > -1) ? filter_values[0] : ""

                    var iCols = document.createElement('div');
                    iCols.className = 'col-' + card_width.toString() + ' p-1'
                    var iCard = document.createElement('div');
                    iCard.className = "card p-1 border-" + item_border.toString()
                    iCard.style = "height:" + card_height;
                    var iCardHeader = document.createElement('div');
                    iCardHeader.className = "card-header text-" + text_align + " p-0"
                    iCardHeader.style = "background:white;border:None"
                    let header_data = ``
                    header_data += `<div class="color:#043365" >`
                    if (item_header != "") { header_data += ` <h5 class="text-secondary">` + item_header + `</h5>` }
                    header_data += ` <h5 class="text-secondary">` + node_name + `</h5>`
                    header_data += ` <h5 >` + cohort_name + `</h5>`
                    header_data += ` <div class="text-success" >` + segment_name + `</div>`
                    header_data += `</div>`
                    iCardHeader.innerHTML = header_data
                    var iCardBody = document.createElement('div');
                    iCardBody.className = "card-body d-flex align-items-center p-1"
                    var iData = document.createElement('div');
                    iData.id = 'obj_content_' + j
                    iData.className = "w-100 text-" + text_align
                    let card_html = `<h6 style="text-align: ` + text_align + `" class="card-subtitle">` + metric_name + `</h6>`
                    if (first_filter != "") {
                        card_html += `<small style="text-align: ` + text_align + `;" class="` + metric_change_c + `">` + first_filter + `</small>`
                    }
                    if (cardtemplate.split("-")[0].toString().toLowerCase() == "horizontal") {

                        card_html += `<h2 style="text-align: ` + text_align + `;color:#043365" class="card-text">` + metric_value + ``
                        card_html += `<small style="text-align: ` + text_align + `;" class="h6 ` + metric_change_c + `">` + change_s + `</small></h2>`
                    }
                    else {
                        card_html += `<h2 style="text-align: ` + text_align + `;color:#043365" class="card-text">` + metric_value + `</h2>`
                        card_html += `<h6 style="text-align: ` + text_align + `;" class="h6 ` + metric_change_c + `">` + change_s + `</h6>`
                    }
                    iData.innerHTML = card_html
                    var iCardFooter = document.createElement('div');
                    iCardFooter.className = "card-footer text-" + text_align + " p-0 "
                    iCardFooter.style = "background:white;border:None"
                    let footer_data = ``
                    // if (filter_values[0] != "") {
                    //     footer_data += `<div class="badge rounded-pill text-bg-light text-secondary" > ` + filters[0] + ": " + filter_values[0] + `</div>`
                    // }
                    if (filter_values[1] != "") {
                        footer_data += `<div class="badge rounded-pill text-bg-light text-secondary" > ` + filters[1] + ": " + filter_values[1] + `</div>`
                    }
                    if (filter_values[2] != "") {
                        footer_data += `<div class="badge rounded-pill text-bg-light text-secondary" > ` + filters[2] + ": " + filter_values[2] + `</div>`
                    }
                    if (filter_values[3] != "") {
                        footer_data += `<div class="badge rounded-pill text-bg-light text-secondary" > ` + filters[3] + ": " + filter_values[3] + `</div>`
                    }
                    if (tree_name != "") { footer_data += `<div style="color:#043365" ><i class="bi bi-diagram-3"></i> ` + tree_name + `</div>` }
                    iCardFooter.innerHTML = footer_data
                    iCardBody.appendChild(iData)
                    iCard.appendChild(iCardHeader)
                    iCard.appendChild(iCardBody)
                    iCard.appendChild(iCardFooter)
                    iCols.appendChild(iCard)
                    iPanelRow.appendChild(iCols)
                }
                if (sub_obj_type == "text") {
                    var card_data = card_obj['object_data']
                    var card_width = getColWidth(panel_width, parseInt(card_obj['object_width']))
                    var card_height = parseInt(card_obj['object_height'])
                    card_height = (card_height).toString() + "px"
                    var iCols = document.createElement('div');
                    let text_align = object_style["text_align"] ? object_style["text_align"] : "Center"


                    text_align = text_align.toLowerCase()

                    iCols.className = 'col-' + card_width.toString() + ' p-1'

                    var iCard = document.createElement('div');
                    iCard.className = "card p-0 border-" + item_border.toString()
                    iCard.style = "height:" + card_height;
                    var iCardBody = document.createElement('div');
                    iCardBody.className = "card-body d-flex align-items-" + text_align + " p-1"
                    var iData = document.createElement('div');
                    iData.id = 'obj_content_' + j
                    iData.className = "w-100"
                    let card_html = `<h2 style="text-align: ` + text_align + `;color:#043365">` + card_data['title'] + `</h2>`
                    card_html += `<h6 style="text-align: ` + text_align + `;">` + card_data['subtitle'] + `</h6>`
                    iData.innerHTML = card_html
                    iCardBody.appendChild(iData)
                    iCard.appendChild(iCardBody)
                    iCols.appendChild(iCard)
                    iPanelRow.appendChild(iCols)

                }
                if (sub_obj_type == "graph") {
                    var card_data = card_obj['object_data']
                    var card_width = getColWidth(panel_width, parseInt(card_obj['object_width']))
                    var card_height = parseInt(card_obj['object_height'])

                    var iCols = document.createElement('div');
                    iCols.className = 'col-' + card_width.toString() + ' p-1'
                    var iCard = document.createElement('div');
                    iCard.className = "card p-0 border-" + item_border.toString()
                    var iCardBody = document.createElement('div');
                    iCardBody.className = "card-body p-0"
                    var iGraph = document.createElement('div');
                    iGraph.id = 'graph' + i
                    iGraph.className = 'h-auto w-100'
                    iCardBody.appendChild(iGraph)
                    iCard.appendChild(iCardBody)
                    iCols.appendChild(iCard)
                    iPanelRow.appendChild(iCols)
                    if (panel_header != "") { iPanelCardBody.appendChild(iPanelHeader) }
                    iPanelCardBody.appendChild(iPanelRow)
                    iPanelCard.appendChild(iPanelCardBody)
                    iPanel.appendChild(iPanelCard)
                    document.getElementById('graphcontainer').appendChild(iPanel);
                    let gd = JSON.parse(card_data);
                    gd['layout']['height'] = card_height
                    window.Plotly.newPlot(iGraph.id, gd);
                }
                if (sub_obj_type == "table") {
                    var card_data = card_obj['object_data']
                    try {
                        var card_width = getColWidth(panel_width, parseInt(card_obj['object_width']))
                        var card_height = parseInt(card_obj['object_height'])
                        var iCols = document.createElement('div');
                        iCols.className = 'col-' + card_width.toString() + ' p-1'
                        var iCard = document.createElement('div');
                        iCard.className = "card p-0 border-" + item_border.toString()
                        var iCardBody = document.createElement('div');
                        iCardBody.className = "card-body p-0"
                        var iTableWrapperDiv = document.createElement('div');
                        iTableWrapperDiv.className = 'table-responsive'
                        iTableWrapperDiv.style = "height:" + card_height.toString()
                        let html_data = card_data["html_data"] ? card_data["html_data"] : []
                        var iTable
                        if (html_data.length == 0) {
                            let iTable = document.createElement('table');
                            iTable.id = 'table' + i
                            iTable.className = 'table  table-bordered '
                            let iTableData = `<tr>`
                            let table_header = card_data["table_header"]
                            let table_data = card_data["table_data"]

                            iTableData += `<tr>`
                            for (let hi = 0; hi < table_header.length; hi++) {
                                iTableData += `<th class="p-1">` + table_header[hi] + `</th>`
                            }
                            iTableData += `</tr>`
                            for (let ri = 0; ri < table_data.length; ri++) {
                                iTableData += `<tr>`
                                for (let ci = 0; ci < table_header.length; ci++) {
                                    iTableData += `<td class="p-1">` + table_data[ri][ci] + `</td>`
                                }
                                iTableData += `</tr>`
                            }
                            iTable.innerHTML = iTableData
                        }
                        else {
                            iTable = document.createElement('div');
                            iTable.innerHTML = html_data.join("")
                        }
                        iTableWrapperDiv.appendChild(iTable)
                        iTableWrapperDiv.appendChild(iTable)

                        iCardBody.appendChild(iTableWrapperDiv)
                        iCard.appendChild(iCardBody)
                        iCols.appendChild(iCard)
                        iPanelRow.appendChild(iCols)
                        if (panel_header != "") { iPanelCardBody.appendChild(iPanelHeader) }
                        iPanelCardBody.appendChild(iPanelRow)
                        iPanelCard.appendChild(iPanelCardBody)
                        iPanel.appendChild(iPanelCard)
                        document.getElementById('graphcontainer').appendChild(iPanel);
                    }
                    catch (err) {

                    }



                }
            }
            if (sub_obj_type != "graph") {
                if (panel_header != "") { iPanelCardBody.appendChild(iPanelHeader) }
                iPanelCardBody.appendChild(iPanelRow)
                iPanelCard.appendChild(iPanelCardBody)
                iPanel.appendChild(iPanelCard)
                document.getElementById('graphcontainer').appendChild(iPanel)
            }

        }
    }
    if (pinnedObjects.length <= 1) {
        document.getElementById('graphcontainer').innerHTML = "<div class='col-sm-12 h4 text-center text-danger'>No Dashboard Data Available !!!</div>";
    }
    document.getElementById('graphcontainer').style.width = pinnedObjects[0]['object_data']['user_config']['page_style']['width']
}

export default PlotlyViewerVanilla