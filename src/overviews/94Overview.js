import { Typography, Image } from "antd";

const Header = () => {
  return <h1>94 Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The 94 Cipher is a type of substitution cipher that uses the 94
        printable ASCII characters (from space to tilde `~`) to encrypt
        messages. This cipher assigns each character a unique number between 0
        and 93, enabling encryption by simply replacing each character with its
        corresponding number. It is a straightforward method that can be easily
        implemented in programming languages, making it suitable for various
        applications, including basic data obfuscation.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>Let’s encrypt the plaintext message: "HELLO" using the 94 Cipher.</p>
      <p>1. Assign numbers to the printable ASCII characters:</p>
      <ul>
        <li>Space (0)</li>
        <li>! (1)</li>
        <li>" (2)</li>
        <li># (3)</li>
        <li>$ (4)</li>
        <li>% (5)</li>
        <li>& (6)</li>
        <li>' (7)</li>
        <li>( (8)</li>
        <li>) (9)</li>
        <li>* (10)</li>
        <li>+ (11)</li>
        <li>, (12)</li>
        <li>- (13)</li>
        <li>. (14)</li>
        <li>/ (15)</li>
        <li>0 (16)</li>
        <li>1 (17)</li>
        <li>2 (18)</li>
        <li>3 (19)</li>
        <li>4 (20)</li>
        <li>5 (21)</li>
        <li>6 (22)</li>
        <li>7 (23)</li>
        <li>8 (24)</li>
        <li>9 (25)</li>
        <li>: (26)</li>
        <li>; (27)</li>
        <li>&lt; (28)</li>
        <li>= (29)</li>
        <li>&gt; (30)</li>
        <li>? (31)</li>
        <li>@ (32)</li>
        <li>A (33)</li>
        <li>B (34)</li>
        <li>C (35)</li>
        <li>D (36)</li>
        <li>E (37)</li>
        <li>F (38)</li>
        <li>G (39)</li>
        <li>H (40)</li>
        <li>I (41)</li>
        <li>J (42)</li>
        <li>K (43)</li>
        <li>L (44)</li>
        <li>M (45)</li>
        <li>N (46)</li>
        <li>O (47)</li>
        <li>P (48)</li>
        <li>Q (49)</li>
        <li>R (50)</li>
        <li>S (51)</li>
        <li>T (52)</li>
        <li>U (53)</li>
        <li>V (54)</li>
        <li>W (55)</li>
        <li>X (56)</li>
        <li>Y (57)</li>
        <li>Z (58)</li>
        <li>[ (59)</li>
        <li>\ (60)</li>
        <li>] (61)</li>
        <li>^ (62)</li>
        <li>_ (63)</li>
        <li>` (64)</li>
        <li>a (65)</li>
        <li>b (66)</li>
        <li>c (67)</li>
        <li>d (68)</li>
        <li>e (69)</li>
        <li>f (70)</li>
        <li>g (71)</li>
        <li>h (72)</li>
        <li>i (73)</li>
        <li>j (74)</li>
        <li>k (75)</li>
        <li>l (76)</li>
        <li>m (77)</li>
        <li>n (78)</li>
        <li>o (79)</li>
        <li>p (80)</li>
        <li>q (81)</li>
        <li>r (82)</li>
        <li>s (83)</li>
        <li>t (84)</li>
        <li>u (85)</li>
        <li>v (86)</li>
        <li>w (87)</li>
        <li>x (88)</li>
        <li>y (89)</li>
        <li>z (90)</li>
        <li>{91}</li>
        <li>| (92)</li>
        <li>{93}</li>
        <li>~ (94)</li>
      </ul>
      <p>2. Convert each character of "HELLO" to its corresponding number:</p>
      <p>H = 40, E = 37, L = 44, L = 44, O = 47</p>
      <p>3. The encrypted message in numbers is:</p>
      <p>
        <strong>40 37 44 44 47</strong>
      </p>
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Image
          src="https://slideplayer.com/slide/16602378/96/images/2/US+Army+M-94+Cipher+Device.jpg"
          alt="94 Cipher Example"
        />
      </div>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a
        href="https://en.wikipedia.org/wiki/M-94"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://en.wikipedia.org/wiki/M-94
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
