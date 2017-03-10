import React, { Component, PropTypes } from 'react';
import Label from 'atom/label/1/0/0/label1_0_0';
import Input from 'atom/input/1/0/0/input1_0_0';
import Error from 'atom/error/1/0/0/error1_0_0';

/**
 * Component#Molecule
 * LabelとInputとErrorをまとめたmolecule。
 * labelとerrorは省略可。
 */
export default class Field1_0_0 extends Component {

  /**
   * propTypes
   * @property {string} name name属性
   * @property {object} input Field内のinputに渡す値
   * @property {string} label 表示するテキスト
   * @property {string} error エラー文言
   * @property {string} modifier CSSの修飾子
   * @property {Object} styles その他追加のスタイル
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    modifier: PropTypes.string,
    styles: PropTypes.object
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const {
      name,
      label,
      input,
      error,
      modifier = '',
      styles = {}
    } = this.props;

    return (
      <div className={`field1_0_0 ${modifier}`} style={styles}>
        {label &&
          <div className="field-label"><Label name={name} modifier={modifier}>{label}</Label></div>
        }

        <Input name={name} type={input.type} placeholder={input.placeholder} required={input.required} modifier={modifier} />

        {error &&
          <div className="field-error">
            <Error modifier={modifier}>{error}</Error>
          </div>
        }
      </div>
    );
  }
}
