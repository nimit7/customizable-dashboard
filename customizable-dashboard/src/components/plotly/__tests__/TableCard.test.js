import { render } from '@testing-library/react';
import TableCard from '../TableCard';

const defaultProps = {
    cardObj: {
        object_data: {
            "table_header": ["Node", "Roll Rate"],
            "table_data": [
                ["Auto Loans", 13.67, 86.33, 33.33, 8.67, 66.67, 26.67, 40],
                ["Direct - High Balance Customers", 8.34, 91.66, 8, 2, 100, 40, 60],
                ["Direct - Low Balance Customers", 0, 33.33, 0.33, 0, 33.33, 13.33, 20],
                ["Direct - Medium Balance Customers", 6.67, 60, 5, 1, 66.67, 26.67, 40],
                ["Direct Auto Loans", 15, 85, 13.33, 3, 66.67, 26.67, 40],
                ["Indirect - High Balance Customers", 8.33, 58.33, 8, 2, 66.67, 26.67, 40],
                ["Indirect - Low Balance Customers", 0, 33.33, 1.33, 0, 33.33, 13.33, 20],
                ["Indirect - Medium Balance Customers", 11.46, 88.54, 10.67, 3.67, 100, 40, 60],
                ["Indirect Auto Loans", 13.61, 86.39, 20, 5.67, 66.67, 26.67, 40]
            ],
            "html_data": [
                "<table border=\"1\" class=\"table table-striped\">\n  <thead>\n    <tr style=\"text-align: right;\">\n      <th></th>\n      <th>Node</th>\n      <th>Roll Rate</th>\n      <th>Collection Rate</th>\n      <th>No of Accounts</th>\n      <th>Rolled Accounts</th>\n      <th>Monthly Accounts</th>\n      <th>Direct Accounts</th>\n      <th>Indirect Accounts</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>0</th>\n      <td>Auto Loans</td>\n      <td>13.67</td>\n      <td>86.33</td>\n      <td>33.33</td>\n      <td>8.67</td>\n      <td>66.67</td>\n      <td>26.67</td>\n      <td>40.00</td>\n    </tr>\n    <tr>\n      <th>1</th>\n      <td>Direct - High Balance Customers</td>\n      <td>8.34</td>\n      <td>91.66</td>\n      <td>8.00</td>\n      <td>2.00</td>\n      <td>100.00</td>\n      <td>40.00</td>\n      <td>60.00</td>\n    </tr>\n    <tr>\n      <th>3</th>\n      <td>Direct - Low Balance Customers</td>\n      <td>0.00</td>\n      <td>33.33</td>\n      <td>0.33</td>\n      <td>0.00</td>\n      <td>33.33</td>\n      <td>13.33</td>\n      <td>20.00</td>\n    </tr>\n    <tr>\n      <th>5</th>\n      <td>Direct - Medium Balance Customers</td>\n      <td>6.67</td>\n      <td>60.00</td>\n      <td>5.00</td>\n      <td>1.00</td>\n      <td>66.67</td>\n      <td>26.67</td>\n      <td>40.00</td>\n    </tr>\n    <tr>\n      <th>6</th>\n      <td>Direct Auto Loans</td>\n      <td>15.00</td>\n      <td>85.00</td>\n      <td>13.33</td>\n      <td>3.00</td>\n      <td>66.67</td>\n      <td>26.67</td>\n      <td>40.00</td>\n    </tr>\n    <tr>\n      <th>7</th>\n      <td>Indirect - High Balance Customers</td>\n      <td>8.33</td>\n      <td>58.33</td>\n      <td>8.00</td>\n      <td>2.00</td>\n      <td>66.67</td>\n      <td>26.67</td>\n      <td>40.00</td>\n    </tr>\n    <tr>\n      <th>8</th>\n      <td>Indirect - Low Balance Customers</td>\n      <td>0.00</td>\n      <td>33.33</td>\n      <td>1.33</td>\n      <td>0.00</td>\n      <td>33.33</td>\n      <td>13.33</td>\n      <td>20.00</td>\n    </tr>\n    <tr>\n      <th>2</th>\n      <td>Indirect - Medium Balance Customers</td>\n      <td>11.46</td>\n      <td>88.54</td>\n      <td>10.67</td>\n      <td>3.67</td>\n      <td>100.00</td>\n      <td>40.00</td>\n      <td>60.00</td>\n    </tr>\n    <tr>\n      <th>4</th>\n      <td>Indirect Auto Loans</td>\n      <td>13.61</td>\n      <td>86.39</td>\n      <td>20.00</td>\n      <td>5.67</td>\n      <td>66.67</td>\n      <td>26.67</td>\n      <td>40.00</td>\n    </tr>\n  </tbody>\n</table>"
            ]
        }
    }
}

const noHtmlDataProps = {
    ...defaultProps,
    cardObj: {
        ...defaultProps.cardObj,
        object_data: {
            ...defaultProps.cardObj.object_data,
            html_data: []
        }
    }
};

test("Render", () => {
    render(<TableCard {...defaultProps} />)
})

test("Render with no html data", () => {
    render(<TableCard {...noHtmlDataProps} />)
})