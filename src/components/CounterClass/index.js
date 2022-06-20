import React from "react";

/**
 * Membuat Component Menggunakan Class.
 * Class meng-extends ke React.Component
 */
class Counter extends React.Component {
  /**
   * Membuat method constructor.
   * Menerima parameter props.
   * Method constructor otomatis dijalankan.
   * Digunakan untuk inisialisasi state.
   */
  constructor(props) {
    // Mengirim props ke parent class (React).
    super(props);

    /**
     * Membuat state angka.
     * Menggunakan keyword this.
     */
    this.state = {
      angka: 0,
    };
  }

  /**
   * Membuat method addAngka.
   * Digunakan untuk menambahkan angka.
   */
  addAngka() {
    /**
     * Menggunakan method setState.
     * Digunakan untuk update state.
     * Buat state angka yang baru.
     */
    this.setState({
      angka: this.state.angka + 1,
    });

    console.log(this.state.angka);
  }

  /**
   * Membuat method render (wajib).
   * Digunakan untuk merender tampilan.
   */
  render() {
    return (
      <div>
        {/* Memanggil state angka */}
        <p>Result: {this.state.angka}</p>
        {/* Menambahkan event onClick: menjalankan method addAngka */}
        <button onClick={() => this.addAngka()}>Add</button>
      </div>
    );
  }
}

export default Counter;
