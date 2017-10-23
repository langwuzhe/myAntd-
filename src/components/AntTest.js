import { Tree,Select,Icon,Row,Col} from 'antd';
const TreeNode = Tree.TreeNode;
import React from 'react';
export default class AntTest  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {outerData:[
            {
                "name": "永定河流域",
                "key": "wscd",
                "children": [
                    {
                        "name": "重点工程",
                        "key": "dugc",
                        "children": [
                            {
                                "name": "官厅水库",
                                "sttp": "RR",
                                "key": "FXRR0063"
                            },
                            {
                                "name": "斋堂水库",
                                "sttp": "RR",
                                "key": "FXRR0067"
                            },
                            {
                                "name": "珠窝水库",
                                "sttp": "RR",
                                "key": "FXRR0069"
                            },
                            {
                                "name": "落坡岭水库",
                                "sttp": "RR",
                                "key": "FXZQ0046"
                            },
                            {
                                "name": "三家店拦河闸",
                                "sttp": "DD",
                                "key": "FXZZ0029"
                            },
                            {
                                "name": "卢沟桥拦河闸",
                                "sttp": "SD",
                                "key": "FXZQ0069"
                            },
                            {
                                "name": "小清河分洪闸",
                                "sttp": "SD",
                                "key": "FXZQ0034"
                            }
                        ]
                    },
                    {
                        "name": "其他断面",
                        "key": "swz",
                        "children": [
                            {
                                "name": "清水",
                                "sttp": "ZZ",
                                "key": "FXZZ0013"
                            },
                            {
                                "name": "青白口",
                                "sttp": "ZQ",
                                "key": "FXZQ0070"
                            },
                            {
                                "name": "雁翅",
                                "sttp": "ZZ",
                                "key": "FXZZ0010"
                            },
                            {
                                "name": "陇驾庄",
                                "sttp": "ZZ",
                                "key": "FXZZ0028"
                            },
                            {
                                "name": "梁各庄",
                                "sttp": "ON",
                                "key": "lianggz"
                            }
                        ]
                    }
                ]
            }
        ]};
    }

    onChange(value){
        if(value == "YDHLY"){
            this.setState({outerData:[
                {
                    "name": "永定河流域",
                    "key": "wscd",
                    "children": [
                        {
                            "name": "重点工程",
                            "key": "dugc",
                            "children": [
                                {
                                    "name": "官厅水库",
                                    "sttp": "RR",
                                    "key": "FXRR0063"
                                },
                                {
                                    "name": "斋堂水库",
                                    "sttp": "RR",
                                    "key": "FXRR0067"
                                },
                                {
                                    "name": "珠窝水库",
                                    "sttp": "RR",
                                    "key": "FXRR0069"
                                },
                                {
                                    "name": "落坡岭水库",
                                    "sttp": "RR",
                                    "key": "FXZQ0046"
                                },
                                {
                                    "name": "三家店拦河闸",
                                    "sttp": "DD",
                                    "key": "FXZZ0029"
                                },
                                {
                                    "name": "卢沟桥拦河闸",
                                    "sttp": "SD",
                                    "key": "FXZQ0069"
                                },
                                {
                                    "name": "小清河分洪闸",
                                    "sttp": "SD",
                                    "key": "FXZQ0034"
                                }
                            ]
                        },
                        {
                            "name": "其他断面",
                            "key": "swz",
                            "children": [
                                {
                                    "name": "清水",
                                    "sttp": "ZZ",
                                    "key": "FXZZ0013"
                                },
                                {
                                    "name": "青白口",
                                    "sttp": "ZQ",
                                    "key": "FXZQ0070"
                                },
                                {
                                    "name": "雁翅",
                                    "sttp": "ZZ",
                                    "key": "FXZZ0010"
                                },
                                {
                                    "name": "陇驾庄",
                                    "sttp": "ZZ",
                                    "key": "FXZZ0028"
                                },
                                {
                                    "name": "梁各庄",
                                    "sttp": "ON",
                                    "key": "lianggz"
                                }
                            ]
                        }
                    ]
                }
            ]});
        }else {
            this.setState({
                outerData: [
                    {
                        "name": "潮白河流域",
                        "key": "wscd",
                        "children": [
                            {
                                "name": "重点工程",
                                "key": "dugc",
                                "children": [
                                    {
                                        "name": "白河堡水库",
                                        "sttp": "RR",
                                        "key": "FXRR0029"
                                    },
                                    {
                                        "name": "半城子水库",
                                        "sttp": "RR",
                                        "key": "FXRR0016"
                                    },
                                    {
                                        "name": "遥桥峪水库",
                                        "sttp": "RR",
                                        "key": "FXRR0025"
                                    },
                                    {
                                        "name": "密云水库",
                                        "sttp": "RR",
                                        "key": "FXRR0064"
                                    },
                                    {
                                        "name": "沙厂水库",
                                        "sttp": "RR",
                                        "key": "FXRR0020"
                                    },
                                    {
                                        "name": "大水峪水库",
                                        "sttp": "RR",
                                        "key": "FXRR0045"
                                    },
                                    {
                                        "name": "北台上水库",
                                        "sttp": "RR",
                                        "key": "FXRR0042"
                                    },
                                    {
                                        "name": "怀柔水库",
                                        "sttp": "RR",
                                        "key": "FXRR0065"
                                    },
                                    {
                                        "name": "向阳闸",
                                        "sttp": "SD",
                                        "key": "FXZQ0057"
                                    },
                                    {
                                        "name": "吴村闸",
                                        "sttp": "SD",
                                        "key": "wucunzha"
                                    }
                                ]
                            },
                            {
                                "name": "其他断面",
                                "key": "swz",
                                "children": [
                                    {
                                        "name": "张家坟",
                                        "sttp": "ZQ",
                                        "key": "FXZQ0022"
                                    },
                                    {
                                        "name": "下会",
                                        "sttp": "ZQ",
                                        "key": "FXZQ0023"
                                    },
                                    {
                                        "name": "前辛庄",
                                        "sttp": "ZQ",
                                        "key": "FXZQ0024"
                                    },
                                    {
                                        "name": "口头",
                                        "sttp": "ZQ",
                                        "key": "FXZQ0025"
                                    },
                                    {
                                        "name": "苏庄",
                                        "sttp": "ZQ",
                                        "key": "FXZQ0053"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        }
    }
    onCheck (checkedKeys, {checked: bool, checkedNodes, node, event}) {
        console.log('onCheck', checkedKeys);
    }


    render() {
        const expandedKeys = ['wscd','dugc'];
        const checkedKeys = ['wscd'];
       const {outerData} =  this.state;
        const loop = (data) => data.map((item) => {
            if (item.children) {
                return <TreeNode key={item.key} title={item.name}>{loop(item.children)}</TreeNode>;
            }
            if(item.sttp=="ZZ"||item.sttp=="ZQ"||item.stnm=="梁各庄"){
                return <TreeNode key={item.key} title={item.name}disabled/>;
            }
            return <TreeNode key={item.key} title={item.name} />;
        });
        return (
            <div>
                <Row>
                    <Col span="6">
                        <span style={{color:"rgba(0, 0, 0, 0.65)",display:"inline-block",paddingTop:"4px"}}> 流域切换：</span>
                    </Col>
                    <Col span="6">
                        <Select onChange={this.onChange.bind(this)} style={{width:"200px"}}>
                            <Option value="YDHLY">永定河流域</Option>
                            <Option value="CBHLY">潮白河流域</Option>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <div style={{overflow:"auto"}}>
                        <Tree className="myCls" showLine checkable
                              defaultCheckedKeys = {checkedKeys}
                              defaultExpandedKeys = {expandedKeys}
                              onCheck={this.onCheck.bind(this)}
                        >
                            {loop(outerData)}
                        </Tree>
                    </div>
                </Row>
            </div>
        );
    }
}
